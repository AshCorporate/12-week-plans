<template>
  <div class="daily-tasks">
    <h1 class="page-title">📅 Дневные задачи</h1>
    <p class="date-label">{{ currentDate }}</p>

    <!-- Section 1: Plan -->
    <section class="dt-section">
      <h2 class="section-title">📋 План на день</h2>

      <div class="task-list">
        <TaskCard
          v-for="task in plannedTasks"
          :key="task.id"
          :task="task"
          @toggle="tasksStore.toggleTask(task.id)"
          @delete="tasksStore.deleteTask(task.id)"
          @start-pomodoro="tasksStore.startTimer(task.id, 25 * 60 * 1000)"
          @increment-planned="tasksStore.incrementPlanned(task.id)"
          @decrement-planned="tasksStore.decrementPlanned(task.id)"
          @record-interruption="tasksStore.recordInterruption(task.id)"
        />
        <p v-if="plannedTasks.length === 0" class="empty-hint">
          Добавьте задачи на день ниже.
        </p>
      </div>

      <div class="add-task-form">
        <input
          v-model="newTask"
          class="input"
          placeholder="Новая задача..."
          @keydown.enter="addPlannedTask"
        />
        <div class="pomodoro-picker">
          <button class="btn btn-ghost btn-sm" @click="newPlanned = Math.max(1, newPlanned - 1)">−</button>
          <span class="pomodoro-count">{{ newPlanned }} 🍅</span>
          <button class="btn btn-ghost btn-sm" @click="newPlanned = Math.min(12, newPlanned + 1)">+</button>
        </div>
        <button class="btn btn-primary" @click="addPlannedTask">Добавить</button>
      </div>
      <p class="hint-text">💡 Если задача > 5–7 помидоров — разбейте её на части</p>
    </section>

    <!-- Section 2: Active timer (shown only when timer is running) -->
    <section v-if="tasksStore.activeTimer" class="dt-section active-timer-section">
      <h2 class="section-title">⏱ Активный помидор</h2>
      <div class="active-timer-body">
        <div class="timer-display">{{ timerDisplay }}</div>
        <div class="active-task-name">{{ activeTaskName }}</div>
        <div class="timer-controls">
          <button class="btn btn-primary" @click="togglePause">
            {{ tasksStore.activeTimer.isPaused ? '▶ Продолжить' : '⏸ Пауза' }}
          </button>
          <button class="btn btn-ghost" @click="tasksStore.resetTimer()">⏹ Сброс</button>
          <button class="btn btn-ghost" @click="recordInterruption">⚡ Записать прерывание</button>
        </div>
      </div>
    </section>

    <!-- Section 3: Unplanned tasks -->
    <section class="dt-section">
      <h2 class="section-title">📝 Незапланированные дела</h2>
      <p class="hint-text">Если во время работы появилась новая задача — запишите её здесь, не прерывая таймер.</p>

      <div class="task-list">
        <TaskCard
          v-for="task in unplannedTasks"
          :key="task.id"
          :task="task"
          @toggle="tasksStore.toggleTask(task.id)"
          @delete="tasksStore.deleteTask(task.id)"
          @start-pomodoro="tasksStore.startTimer(task.id, 25 * 60 * 1000)"
          @increment-planned="tasksStore.incrementPlanned(task.id)"
          @decrement-planned="tasksStore.decrementPlanned(task.id)"
          @record-interruption="tasksStore.recordInterruption(task.id)"
        />
      </div>

      <div class="add-task-form">
        <input
          v-model="newUnplanned"
          class="input"
          placeholder="Записать задачу..."
          @keydown.enter="addUnplannedTask"
        />
        <button class="btn btn-primary" @click="addUnplannedTask">Записать</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TaskCard from '../components/TaskCard.vue'
import { useTasksStore } from '../stores/tasks.js'

const tasksStore = useTasksStore()
const newTask = ref('')
const newPlanned = ref(1)
const newUnplanned = ref('')

const currentDate = computed(() =>
  new Date().toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
)

const allTasks = computed(() => tasksStore.getTodayTasks())
const plannedTasks = computed(() => allTasks.value.filter(t => !t.isUnplanned))
const unplannedTasks = computed(() => allTasks.value.filter(t => t.isUnplanned))

function addPlannedTask() {
  if (newTask.value.trim()) {
    tasksStore.addTask(newTask.value.trim(), { plannedPomodoros: newPlanned.value })
    newTask.value = ''
    newPlanned.value = 1
  }
}

function addUnplannedTask() {
  if (newUnplanned.value.trim()) {
    tasksStore.addUnplannedTask(newUnplanned.value.trim())
    newUnplanned.value = ''
  }
}

// Timer display
const now = ref(Date.now())
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    if (!tasksStore.activeTimer) return
    now.value = Date.now()
    if (!tasksStore.activeTimer.isPaused) {
      const remaining = tasksStore.activeTimer.endTime - now.value
      if (remaining <= 0) {
        playBeep()
        tasksStore.completeTimer()
      }
    }
  }, 500)
})

onUnmounted(() => clearInterval(interval))

const timerDisplay = computed(() => {
  if (!tasksStore.activeTimer) return '00:00'
  let remaining
  if (tasksStore.activeTimer.isPaused) {
    remaining = tasksStore.activeTimer.remainingMs
  } else {
    remaining = tasksStore.activeTimer.endTime - now.value
  }
  if (remaining < 0) remaining = 0
  const totalSec = Math.ceil(remaining / 1000)
  const mins = Math.floor(totalSec / 60)
  const secs = totalSec % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
})

const activeTaskName = computed(() => {
  if (!tasksStore.activeTimer) return ''
  const task = allTasks.value.find(t => t.id === tasksStore.activeTimer.taskId)
  return task ? task.text : ''
})

function togglePause() {
  if (tasksStore.activeTimer?.isPaused) {
    tasksStore.resumeTimer()
  } else {
    tasksStore.pauseTimer()
  }
}

function recordInterruption() {
  if (tasksStore.activeTimer) {
    tasksStore.recordInterruption(tasksStore.activeTimer.taskId)
  }
}

function playBeep() {
  try {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 880
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 1)
  } catch (e) {
    console.warn('Audio not available', e)
  }
}
</script>

<style scoped>
.daily-tasks {
  max-width: 720px;
}
.date-label {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  text-transform: capitalize;
}
.dt-section {
  margin-bottom: 2.5rem;
}
.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.empty-hint {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.add-task-form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}
.add-task-form .input {
  flex: 1;
  min-width: 200px;
}
.pomodoro-picker {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.pomodoro-count {
  font-size: 0.9rem;
  min-width: 3.5rem;
  text-align: center;
}
.hint-text {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}
.active-timer-section {
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 1.5rem;
}
.active-timer-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.timer-display {
  font-family: 'Courier New', monospace;
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--accent);
  letter-spacing: 2px;
}
.active-task-name {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}
.timer-controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

