<template>
  <div class="dashboard">
    <!-- Hero -->
    <header class="dashboard-hero">
      <div class="hero-brand">
        <h1 class="brand-title">
          <span class="brand-ilya">Ilya</span>
          <span class="brand-heart">♥</span>
          <span class="brand-varya">Varya</span>
          <span class="brand-eq"> = </span>
          <span class="brand-family">Family</span>
        </h1>
        <p class="hero-date">{{ currentDate }}</p>
      </div>
    </header>

    <!-- Cards grid -->
    <div class="dashboard-grid">
      <!-- Marathon progress -->
      <div class="card progress-card">
        <p class="card-eyebrow">56-дневный марафон</p>
        <h3 class="card-title">День {{ marathon.currentDay }} из 56</h3>
        <div class="progress-section">
          <div class="progress-label">
            <span class="progress-name">Прогресс</span>
            <span class="progress-pct">{{ Math.round(marathon.progressPct) }}%</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" :style="{ width: marathon.progressPct + '%' }"></div>
          </div>
        </div>
        <div class="days-remaining">
          <span class="remaining-num">{{ marathon.daysRemaining }}</span>
          <span class="remaining-label"> дней осталось</span>
        </div>
        <div v-if="!todayReportFilled" class="report-reminder">
          <span class="reminder-text">Не забудь заполнить отчёт за сегодня</span>
          <RouterLink to="/marathon" class="btn btn-ghost reminder-btn">Заполнить →</RouterLink>
        </div>
      </div>

      <!-- Today's tasks -->
      <div class="card tasks-card">
        <p class="card-eyebrow">Сегодня</p>
        <h3 class="card-title">Задачи</h3>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-value" style="color: var(--success)">{{ doneTodayCount }}</span>
            <span class="stat-label">выполнено</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ todayCount }}</span>
            <span class="stat-label">всего</span>
          </div>
          <div class="stat-ring-wrap" v-if="todayCount > 0">
            <svg class="stat-ring" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" class="ring-track" />
              <circle
                cx="22" cy="22" r="18"
                class="ring-progress"
                :stroke-dashoffset="ringOffset"
              />
            </svg>
            <span class="ring-label">{{ Math.round(todayTaskProgress) }}%</span>
          </div>
        </div>
        <div class="progress-bar-wrap" style="margin-top: 1.25rem">
          <div class="progress-bar-fill" :style="{ width: todayTaskProgress + '%' }"></div>
        </div>
      </div>

      <!-- Quote -->
      <div class="card quote-card">
        <p class="card-eyebrow">Цитата дня</p>
        <blockquote class="quote-text">{{ todayQuote.text }}</blockquote>
        <p class="quote-author">— {{ todayQuote.author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSettingsStore } from '../stores/settings.js'
import { useTasksStore } from '../stores/tasks.js'
import { useMarathonStore } from '../stores/marathon.js'

const settings = useSettingsStore()
const tasksStore = useTasksStore()
const marathon = useMarathonStore()

const currentDate = computed(() => {
  return new Date().toLocaleDateString('ru-RU', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
})

const todayReportFilled = computed(() => marathon.isReportFilled(marathon.currentDay))

// Tasks
const todayStr = computed(() => new Date().toISOString().split('T')[0])
const todayTasks = computed(() => tasksStore.tasksByDate[todayStr.value] || [])
const todayCount = computed(() => todayTasks.value.length)
const doneTodayCount = computed(() => todayTasks.value.filter(t => t.done).length)
const todayTaskProgress = computed(() => todayCount.value > 0 ? (doneTodayCount.value / todayCount.value) * 100 : 0)

const ringCircumference = 2 * Math.PI * 18
const ringOffset = computed(() => ringCircumference - (todayTaskProgress.value / 100) * ringCircumference)

// Quotes
const quotes = [
  { text: 'Дисциплина равна свободе.', author: 'Jocko Willink' },
  { text: 'Потеря времени — величайшее из расточительств.', author: 'Марк Аврелий' },
  { text: 'Пока ты жив — пока есть такая возможность — пока можешь — совершенствуй себя.', author: 'Марк Аврелий' },
  { text: 'Лучшее время посадить дерево было 20 лет назад. Следующее лучшее время — сейчас.', author: 'Китайская пословица' },
  { text: 'Единственный путь делать великую работу — любить то, что делаешь.', author: 'Стив Джобс' },
  { text: 'Тот, кто двигается вперёд — обгоняет тех, кто стоит на месте.', author: 'Мусаси Миямото' },
  { text: 'Не жди вдохновения. Начни делать — и вдохновение само придёт к тебе.', author: 'Джек Лондон' },
  { text: 'Всё, что стоит делать, стоит делать хорошо.', author: 'Честерфилд' },
  { text: 'Человек может всё, что он воображает.', author: 'Виктор Гюго' },
  { text: 'Трудности делают человека.', author: 'Сенека' },
  { text: 'Страдание — это очищение.', author: 'Фёдор Достоевский' },
  { text: 'Счастье не в том, чтобы делать, что хочешь, а в том, чтобы хотеть то, что делаешь.', author: 'Лев Толстой' },
  { text: 'У человека можно отнять всё, кроме последней свободы — выбора своего отношения к обстоятельствам.', author: 'Виктор Франкл' },
  { text: 'Нет ничего важнее следующей минуты.', author: 'Сенека' },
  { text: 'Сначала научись правилам, потом сражайся с ними.', author: 'Мусаси Миямото' },
  { text: 'Тот, кто победил сам себя, сильнее того, кто победил тысячу раз в битве.', author: 'Будда' },
  { text: 'Смерть — это не то, чего нам стоит бояться. Стоит бояться никогда не начать жить.', author: 'Марк Аврелий' },
  { text: 'Путь длиной в тысячу миль начинается с первого шага.', author: 'Лао-Цзы' },
  { text: 'Совершенство — не цель, а направление.', author: 'Jocko Willink' },
  { text: 'Если хочешь достичь чего-либо в этом мире, просыпайся раньше.', author: 'Jocko Willink' },
  { text: 'Каждый день — это счёт. Каждое утро нужно ответить на вопрос: что я добавлю на эту страницу?', author: 'Марк Аврелий' },
  { text: 'Незнание — не беда. Беда — нежелание знать.', author: 'Сократ' },
]

const todayQuote = computed(() => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  return quotes[dayOfYear % quotes.length]
})
</script>

<style scoped>
.dashboard {
  max-width: 900px;
  margin: 0 auto;
}

.dashboard-hero {
  margin-bottom: 2rem;
}

.brand-title {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.brand-heart {
  color: var(--accent);
  font-size: 1.6rem;
}

.brand-eq,
.brand-family {
  font-weight: 600;
}

.hero-date {
  margin-top: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-transform: capitalize;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.progress-card {
  grid-column: 1 / -1;
}

.card-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.progress-section {
  margin-bottom: 0.75rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.35rem;
}

.progress-pct {
  font-weight: 600;
  color: var(--text-primary);
}

.days-remaining {
  margin-top: 0.75rem;
}

.remaining-num {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
}

.remaining-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.report-reminder {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: var(--accent-subtle);
  border-radius: 10px;
  border: 1px solid var(--border);
  flex-wrap: wrap;
}

.reminder-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  flex: 1;
}

.reminder-btn {
  font-size: 0.82rem;
  padding: 0.35rem 0.75rem;
  text-decoration: none;
}

/* Stats */
.stats-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.03em;
}

.stat-label {
  font-size: 0.72rem;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}

.stat-divider {
  width: 1px;
  height: 2.5rem;
  background: var(--border);
}

.stat-ring-wrap {
  position: relative;
  width: 44px;
  height: 44px;
  margin-left: auto;
}

.stat-ring {
  width: 44px;
  height: 44px;
  transform: rotate(-90deg);
}

.ring-track {
  fill: none;
  stroke: var(--border);
  stroke-width: 3;
}

.ring-progress {
  fill: none;
  stroke: var(--accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 113.1;
  transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.ring-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--text-primary);
}

/* Quote */
.quote-card {
  grid-column: 1 / -1;
}

.quote-text {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0.75rem 0 0.5rem;
}

.quote-author {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .progress-card {
    grid-column: 1;
  }

  .quote-card {
    grid-column: 1;
  }

  .brand-title {
    font-size: 1.5rem;
  }
}
</style>
