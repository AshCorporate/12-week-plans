<template>
  <div class="marathon-page">
    <!-- Header -->
    <div class="marathon-header">
      <div class="header-top">
        <div>
          <h1 class="page-title">56-дневный марафон</h1>
          <p class="header-sub">Илья + Варя = Семья</p>
        </div>
        <div class="start-date-group">
          <label class="start-label">Начало</label>
          <input type="date" class="input date-input" v-model="marathon.startDate" />
        </div>
      </div>

      <div class="marathon-stats card">
        <div class="stat-block">
          <span class="stat-big">{{ marathon.currentDay }}</span>
          <span class="stat-desc">день из 56</span>
        </div>
        <div class="stat-divider-v"></div>
        <div class="stat-block">
          <span class="stat-big">{{ marathon.daysRemaining }}</span>
          <span class="stat-desc">осталось</span>
        </div>
        <div class="stat-divider-v"></div>
        <div class="stat-block">
          <span class="stat-big">{{ Math.round(marathon.progressPct) }}%</span>
          <span class="stat-desc">пройдено</span>
        </div>
        <div class="progress-bar-wrap full-bar">
          <div class="progress-bar-fill" :style="{ width: marathon.progressPct + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Day Grid -->
    <div class="weeks-container">
      <div v-for="week in 8" :key="week" class="week-block">
        <div class="week-label">Неделя {{ week }}</div>
        <div class="day-grid">
          <div
            v-for="dayNum in getDaysOfWeek(week)"
            :key="dayNum"
            class="day-cell"
            :class="getDayClass(dayNum)"
            @click="openDay(dayNum)"
          >
            <div class="day-num">{{ dayNum }}</div>
            <div class="day-date">{{ formatDayDate(dayNum) }}</div>
            <div class="day-status">
              <span v-if="isPast(dayNum) && marathon.isReportFilled(dayNum)" class="status-done">✓</span>
              <span v-else-if="isPast(dayNum)" class="status-empty">◯</span>
              <span v-else-if="isToday(dayNum)" class="status-today">●</span>
            </div>
            <div v-if="isCheckpoint(dayNum)" class="checkpoint-badge">КП</div>
          </div>
        </div>

        <!-- Checkpoint card after each week -->
        <div v-if="checkpointDays.includes(week * 7)" class="checkpoint-card card">
          <div class="cp-header">
            <span class="cp-label">Контрольная точка</span>
            <span class="cp-day">День {{ week * 7 }}</span>
          </div>
          <p class="cp-text">{{ checkpointTexts[week - 1] }}</p>
          <div v-if="selectedDay === week * 7 || marathon.getReport(week * 7).checkpointReflection !== undefined" class="cp-reflection">
            <textarea
              class="input cp-textarea"
              placeholder="Ваши мысли по итогам недели..."
              :value="marathon.getReport(week * 7).checkpointReflection || ''"
              @blur="saveCheckpoint(week * 7, $event.target.value)"
            ></textarea>
          </div>
          <button v-else class="btn btn-ghost cp-btn" @click="openDay(week * 7)">Открыть отчёт</button>
        </div>
      </div>
    </div>

    <!-- Day Detail Panel -->
    <Transition name="slide-up">
      <div v-if="selectedDay !== null" class="day-detail card">
        <div class="detail-header">
          <div>
            <h2 class="detail-title">День {{ selectedDay }}</h2>
            <p class="detail-date">{{ formatFullDate(selectedDay) }}</p>
          </div>
          <button class="btn btn-ghost close-btn" @click="selectedDay = null">✕</button>
        </div>

        <div class="detail-body">
          <!-- Daily Plan -->
          <div class="detail-section">
            <label class="detail-label">План на день</label>
            <textarea
              class="input detail-textarea"
              placeholder="Что планируешь сделать сегодня..."
              v-model="planText"
              @blur="savePlan"
            ></textarea>
          </div>

          <!-- Report -->
          <div class="detail-section">
            <label class="detail-label">Отчёт дня</label>
            <div class="report-fields">
              <div class="report-field">
                <label class="field-label">Изучал</label>
                <textarea class="input field-textarea" placeholder="Что изучал..." v-model="reportDraft.studied" @blur="saveReport"></textarea>
              </div>
              <div class="report-field">
                <label class="field-label">Построил</label>
                <textarea class="input field-textarea" placeholder="Что создал / построил..." v-model="reportDraft.built" @blur="saveReport"></textarea>
              </div>
              <div class="report-field">
                <label class="field-label">Застрял</label>
                <textarea class="input field-textarea" placeholder="Где были трудности..." v-model="reportDraft.stuck" @blur="saveReport"></textarea>
              </div>
              <div class="report-field">
                <label class="field-label">Завтра</label>
                <textarea class="input field-textarea" placeholder="Фокус на завтра..." v-model="reportDraft.tomorrow" @blur="saveReport"></textarea>
              </div>
            </div>
          </div>

          <!-- Checkpoint reflection -->
          <div v-if="isCheckpoint(selectedDay)" class="detail-section">
            <label class="detail-label">Рефлексия контрольной точки</label>
            <p class="cp-question">{{ checkpointTexts[Math.ceil(selectedDay / 7) - 1] }}</p>
            <textarea
              class="input detail-textarea"
              placeholder="Ваши мысли..."
              v-model="checkpointReflection"
              @blur="saveCheckpointReflection"
            ></textarea>
          </div>

          <div class="detail-actions">
            <button class="btn btn-primary" @click="saveAll">Сохранить</button>
            <div v-if="isReportComplete" class="report-complete-badge">✓ Отчёт заполнен</div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useMarathonStore } from '../stores/marathon.js'

const marathon = useMarathonStore()

const selectedDay = ref(null)
const planText = ref('')
const reportDraft = ref({ studied: '', built: '', stuck: '', tomorrow: '' })
const checkpointReflection = ref('')

const checkpointDays = [7, 14, 21, 28, 35, 42, 49, 56]

const checkpointTexts = [
  'Можешь ли ты самостоятельно создать справочник и документ без подсказок?',
  'Конфигурация с продуманной структурой объектов и базовой логикой.',
  'Можешь ли объяснить: документ → проводка → движения → регистр → остатки?',
  'Запросы стали твоей поддержкой, а не слабым местом.',
  'Проект 1 завершён и объясним.',
  'Проект 2 завершён.',
  'Есть резюме и 3 проекта.',
  'Готов к подаче заявок на позицию junior.',
]

function getDaysOfWeek(week) {
  const start = (week - 1) * 7 + 1
  return Array.from({ length: 7 }, (_, i) => start + i)
}

function isCheckpoint(dayNum) {
  return checkpointDays.includes(dayNum)
}

function getDayDate(dayNum) {
  const d = new Date(marathon.startDate)
  d.setDate(d.getDate() + dayNum - 1)
  return d
}

function formatDayDate(dayNum) {
  const d = getDayDate(dayNum)
  return `${d.getDate()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

function formatFullDate(dayNum) {
  const d = getDayDate(dayNum)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function isPast(dayNum) {
  return dayNum < marathon.currentDay
}

function isToday(dayNum) {
  return dayNum === marathon.currentDay
}

function getDayClass(dayNum) {
  if (isToday(dayNum)) return 'day-today'
  if (isPast(dayNum)) return 'day-past'
  return 'day-future'
}

function openDay(dayNum) {
  selectedDay.value = dayNum
  planText.value = marathon.getPlan(dayNum)
  const r = marathon.getReport(dayNum)
  reportDraft.value = {
    studied: r.studied || '',
    built: r.built || '',
    stuck: r.stuck || '',
    tomorrow: r.tomorrow || '',
  }
  checkpointReflection.value = r.checkpointReflection || ''
}

function savePlan() {
  if (selectedDay.value !== null) {
    marathon.savePlan(selectedDay.value, planText.value)
  }
}

function saveReport() {
  if (selectedDay.value !== null) {
    marathon.saveReport(selectedDay.value, { ...reportDraft.value })
  }
}

function saveCheckpoint(dayNum, text) {
  marathon.saveReport(dayNum, { checkpointReflection: text })
}

function saveCheckpointReflection() {
  if (selectedDay.value !== null) {
    marathon.saveReport(selectedDay.value, { checkpointReflection: checkpointReflection.value })
  }
}

function saveAll() {
  savePlan()
  saveReport()
  saveCheckpointReflection()
}

const isReportComplete = computed(() => {
  if (selectedDay.value === null) return false
  return !!(reportDraft.value.studied && reportDraft.value.built && reportDraft.value.stuck && reportDraft.value.tomorrow)
})
</script>

<style scoped>
.marathon-page {
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

.marathon-header {
  margin-bottom: 2rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.header-sub {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.start-date-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.start-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.date-input {
  padding: 0.4rem 0.75rem;
  font-size: 0.9rem;
}

.marathon-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.25rem 1.5rem;
}

.stat-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-big {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.02em;
}

.stat-desc {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.1rem;
}

.stat-divider-v {
  width: 1px;
  height: 2.5rem;
  background: var(--border);
}

.full-bar {
  flex: 1 1 100%;
  margin-top: 0.75rem;
}

.weeks-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.week-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.week-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.day-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.day-cell {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  text-align: center;
  transition: border-color 0.2s, background 0.2s;
  position: relative;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.day-cell:hover {
  border-color: var(--border-strong);
  background: var(--bg-elevated);
}

.day-today {
  border-color: var(--accent) !important;
  background: var(--accent-subtle) !important;
}

.day-past {
  opacity: 0.85;
}

.day-future {
  opacity: 0.45;
}

.day-num {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.day-date {
  font-size: 0.65rem;
  color: var(--text-secondary);
}

.day-status {
  font-size: 0.85rem;
  margin-top: 0.15rem;
}

.status-done { color: var(--success); }
.status-empty { color: var(--border-strong); }
.status-today { color: var(--accent); }

.checkpoint-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.55rem;
  font-weight: 700;
  background: var(--accent);
  color: var(--bg-primary);
  border-radius: 4px;
  padding: 1px 4px;
  letter-spacing: 0.05em;
}

.checkpoint-card {
  background: var(--bg-elevated);
  border-color: var(--border-strong);
  padding: 1.25rem;
}

.cp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.cp-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
}

.cp-day {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.cp-text {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.cp-textarea {
  width: 100%;
  min-height: 80px;
  resize: vertical;
}

.cp-btn {
  font-size: 0.82rem;
  padding: 0.4rem 0.9rem;
}

/* Day Detail Panel */
.day-detail {
  position: fixed;
  bottom: 0;
  left: 240px;
  right: 0;
  max-height: 75vh;
  overflow-y: auto;
  border-radius: 20px 20px 0 0;
  z-index: 300;
  padding: 1.5rem 2rem;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.detail-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
}

.detail-date {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.2rem;
}

.close-btn {
  padding: 0.4rem 0.75rem;
  font-size: 1rem;
}

.detail-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.detail-textarea {
  width: 100%;
  min-height: 80px;
  resize: vertical;
}

.report-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.report-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.field-textarea {
  width: 100%;
  min-height: 60px;
  resize: vertical;
}

.cp-question {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text-secondary);
  padding: 0.5rem 0;
}

.detail-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
}

.report-complete-badge {
  font-size: 0.85rem;
  color: var(--success);
  font-weight: 500;
}

/* Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .day-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.3rem;
  }

  .day-cell {
    min-height: 64px;
    padding: 0.5rem 0.25rem;
  }

  .day-num {
    font-size: 1rem;
  }

  .day-date {
    font-size: 0.55rem;
  }

  .day-detail {
    left: 0;
    padding: 1.25rem 1rem;
  }

  .report-fields {
    grid-template-columns: 1fr;
  }

  .marathon-stats {
    gap: 1rem;
  }
}
</style>
