<template>
  <div class="card task-card" :class="{ 'task-active-timer': isActive }">
    <div class="task-top">
      <label class="task-check-label">
        <input type="checkbox" :checked="task.done" @change="$emit('toggle')" />
        <span :class="{ 'done-text': task.done }">{{ task.text }}</span>
      </label>
      <span v-if="isCompleted" class="badge-done">✅ Выполнено по плану</span>
      <button class="btn btn-ghost btn-icon" @click="$emit('delete')" title="Удалить">🗑️</button>
    </div>

    <!-- Pomodoro squares row -->
    <div class="pomodoro-row">
      <span
        v-for="i in totalSquares"
        :key="i"
        class="pomodoro-sq"
        :title="i <= completedCount ? 'Завершено' : 'Запланировано'"
      >{{ i <= completedCount ? '🍅' : '☐' }}</span>

      <button class="btn btn-ghost btn-sm pomodoro-adj" @click="$emit('decrement-planned')" title="Убрать помидор">−</button>
      <button class="btn btn-ghost btn-sm pomodoro-adj" @click="$emit('increment-planned')" title="Добавить помидор">+</button>
    </div>

    <!-- Start / interrupt controls -->
    <div class="task-action-row" v-if="!task.done">
      <template v-if="isActive">
        <button class="btn btn-ghost btn-sm" @click="$emit('record-interruption')">⚡ Прерывание</button>
        <span v-if="task.interruptionsCount" class="interruption-count">{{ task.interruptionsCount }} ✗</span>
      </template>
      <template v-else>
        <button
          class="btn btn-primary btn-sm"
          :disabled="!!tasksStore.activeTimer"
          :aria-disabled="!!tasksStore.activeTimer"
          :title="tasksStore.activeTimer ? 'Таймер уже запущен' : 'Начать помидор'"
          @click="$emit('start-pomodoro')"
        >▶ Начать помидор</button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTasksStore } from '../stores/tasks.js'

const props = defineProps({
  task: { type: Object, required: true },
})
const emit = defineEmits(['toggle', 'delete', 'start-pomodoro', 'increment-planned', 'decrement-planned', 'record-interruption'])

const tasksStore = useTasksStore()

const isActive = computed(() =>
  tasksStore.activeTimer?.taskId === props.task.id
)

const completedCount = computed(() => props.task.completedPomodoros || 0)
const plannedCount = computed(() => props.task.plannedPomodoros || 1)
const totalSquares = computed(() => Math.max(completedCount.value, plannedCount.value))
const isCompleted = computed(() => completedCount.value >= plannedCount.value && plannedCount.value > 0)
</script>

<style scoped>
.task-card {
  transition: all 0.3s ease;
}
.task-active-timer {
  border: 2px solid var(--accent) !important;
  background: rgba(108, 99, 255, 0.07);
}
.task-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.task-check-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  flex: 1;
}
.task-check-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--accent);
  cursor: pointer;
}
.done-text {
  text-decoration: line-through;
  color: var(--text-secondary);
}
.badge-done {
  font-size: 0.75rem;
  background: rgba(72, 199, 116, 0.15);
  color: #48c774;
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}
.pomodoro-row {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
}
.pomodoro-sq {
  font-size: 1rem;
  cursor: default;
  user-select: none;
}
.pomodoro-adj {
  padding: 0.15rem 0.45rem;
  font-size: 0.85rem;
  line-height: 1;
}
.task-action-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
}
.interruption-count {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
.btn-icon {
  padding: 0.35rem 0.5rem;
  font-size: 1rem;
}
.btn-sm {
  padding: 0.3rem 0.65rem;
  font-size: 0.82rem;
}
.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>

