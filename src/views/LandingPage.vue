<template>
  <div class="landing">
    <!-- Background blobs -->
    <div class="bg-blobs" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">✦ Планировщик нового поколения</div>
          <h1 class="hero-title">
            <span class="gradient-text">Организуй учёбу.</span><br />
            Достигай целей<br />каждую неделю.
          </h1>
          <p class="hero-subtitle">
            Умный планировщик занятий для студентов, преподавателей и занятых профессионалов.
            Расписание, дедлайны, аналитика — всё в одном месте.
          </p>
          <div class="hero-actions">
            <RouterLink to="/" class="btn-landing btn-landing-primary">
              Начать бесплатно →
            </RouterLink>
            <button class="btn-landing btn-landing-ghost" @click="scrollTo('preview')">
              Смотреть демо
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">12 000+</span>
              <span class="stat-label">пользователей</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">98%</span>
              <span class="stat-label">довольны</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">4.9★</span>
              <span class="stat-label">рейтинг</span>
            </div>
          </div>
        </div>

        <!-- Floating preview cards -->
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-card hero-card-main glass">
            <div class="mini-topbar">
              <div class="mini-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="mini-date">Вт, 8 апреля</span>
              <div class="mini-avatar">АИ</div>
            </div>
            <div class="mini-tasks">
              <div class="mini-task-row">
                <span class="mini-checkbox checked"></span>
                <span class="mini-task-text done-text">Лекция по алгебре</span>
                <span class="pill pill-lavender">Математика</span>
              </div>
              <div class="mini-task-row">
                <span class="mini-checkbox checked"></span>
                <span class="mini-task-text done-text">Решить задачи 1–5</span>
                <span class="pill pill-lavender">Математика</span>
              </div>
              <div class="mini-task-row">
                <span class="mini-checkbox"></span>
                <span class="mini-task-text">Практика Vue.js</span>
                <span class="pill pill-blue">Программирование</span>
              </div>
              <div class="mini-task-row">
                <span class="mini-checkbox"></span>
                <span class="mini-task-text">Словарный диктант</span>
                <span class="pill pill-coral">Английский</span>
              </div>
            </div>
            <div class="mini-progress">
              <span class="mini-progress-label">Прогресс дня</span>
              <div class="mini-progress-bar">
                <div class="mini-progress-fill" style="width: 50%"></div>
              </div>
              <span class="mini-progress-pct">50%</span>
            </div>
          </div>

          <div class="hero-card hero-card-pomodoro glass float-card">
            <div class="pomodoro-ring">
              <svg viewBox="0 0 60 60" width="60" height="60">
                <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(124,111,255,0.15)" stroke-width="5"/>
                <circle cx="30" cy="30" r="25" fill="none" stroke="#7C6FFF" stroke-width="5"
                  stroke-dasharray="157" stroke-dashoffset="40"
                  stroke-linecap="round" transform="rotate(-90 30 30)"/>
              </svg>
              <span class="pomodoro-time">24:12</span>
            </div>
            <span class="pomodoro-label">Фокус 🍅</span>
          </div>

          <div class="hero-card hero-card-streak glass float-card-2">
            <span class="streak-icon">🔥</span>
            <div>
              <div class="streak-num">23</div>
              <div class="streak-label">дня подряд</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Features ──────────────────────────────────────────────────────── -->
    <section class="features section" id="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Возможности</div>
          <h2 class="section-title">Всё что нужно для<br />продуктивной учёбы</h2>
          <p class="section-subtitle">Умные инструменты, которые помогут организовать время, следить за прогрессом и достигать целей.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card card-lg" v-for="f in features" :key="f.title">
            <div class="feature-icon" :style="{ background: f.iconBg }">{{ f.icon }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── App Preview ───────────────────────────────────────────────────── -->
    <section class="preview section" id="preview">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Интерфейс</div>
          <h2 class="section-title">Мощный dashboard<br />прямо в браузере</h2>
          <p class="section-subtitle">Интуитивный интерфейс, который вдохновляет работать продуктивно каждый день.</p>
        </div>
        <div class="app-preview glass">
          <!-- Sidebar mini -->
          <div class="preview-sidebar">
            <div class="preview-logo">◆</div>
            <nav class="preview-nav">
              <div class="preview-nav-item active" title="Главная">⬛</div>
              <div class="preview-nav-item" title="Марафон">◈</div>
              <div class="preview-nav-item" title="День">▦</div>
              <div class="preview-nav-item" title="Помидор">◷</div>
              <div class="preview-nav-item" title="Трекер">▤</div>
              <div class="preview-nav-item" title="Статистика">▨</div>
            </nav>
          </div>
          <!-- Main content -->
          <div class="preview-main">
            <div class="preview-topbar">
              <div class="preview-topbar-title">Добро пожаловать, Алексей 👋</div>
              <div class="preview-topbar-right">
                <span class="preview-date-badge">Ср, 9 апреля 2025</span>
                <div class="preview-avatar">АИ</div>
              </div>
            </div>
            <div class="preview-body">
              <!-- Week calendar -->
              <div class="preview-calendar">
                <div class="preview-cal-header">
                  <span class="preview-cal-title">Расписание недели</span>
                  <div class="preview-cal-nav">
                    <button>‹</button>
                    <button>›</button>
                  </div>
                </div>
                <div class="week-grid">
                  <div class="week-day" v-for="day in weekDays" :key="day.name">
                    <div class="week-day-label" :class="{ today: day.today }">
                      <span>{{ day.short }}</span>
                      <span class="week-day-num" :class="{ today: day.today }">{{ day.num }}</span>
                    </div>
                    <div class="week-events">
                      <div
                        v-for="ev in day.events"
                        :key="ev.name"
                        class="week-event"
                        :class="ev.color"
                      >{{ ev.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Right panel -->
              <div class="preview-right">
                <div class="preview-tasks-card">
                  <div class="preview-tasks-title">Задачи на сегодня</div>
                  <div class="preview-task-item" v-for="t in previewTasks" :key="t.text">
                    <span class="preview-checkbox" :class="{ done: t.done }">
                      <svg v-if="t.done" viewBox="0 0 12 12" width="10" height="10"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
                    </span>
                    <span class="preview-task-text" :class="{ done: t.done }">{{ t.text }}</span>
                    <span class="pill" :class="t.color">{{ t.subject }}</span>
                  </div>
                </div>
                <div class="preview-progress-card">
                  <div class="preview-tasks-title">Прогресс предметов</div>
                  <div class="preview-prog-row" v-for="p in previewProgress" :key="p.name">
                    <span class="preview-prog-label">{{ p.name }}</span>
                    <div class="preview-prog-bar">
                      <div class="preview-prog-fill" :class="p.color" :style="{ width: p.pct + '%' }"></div>
                    </div>
                    <span class="preview-prog-pct">{{ p.pct }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="preview-badge">🌙 Поддержка тёмной темы включена</div>
      </div>
    </section>

    <!-- ── Schedule Preview ──────────────────────────────────────────────── -->
    <section class="schedule section" id="schedule">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Расписание</div>
          <h2 class="section-title">Расписание в удобном<br />формате</h2>
          <p class="section-subtitle">Переключайтесь между режимами просмотра одним кликом.</p>
        </div>
        <div class="schedule-switcher">
          <button
            v-for="v in scheduleViews"
            :key="v.id"
            class="switcher-btn"
            :class="{ active: scheduleView === v.id }"
            @click="scheduleView = v.id"
          >{{ v.label }}</button>
        </div>

        <!-- Day view -->
        <div v-if="scheduleView === 'day'" class="schedule-content glass">
          <div class="timeblock" v-for="tb in timeblocks" :key="tb.time">
            <span class="tb-time">{{ tb.time }}</span>
            <div class="tb-event" :class="tb.color">
              <span class="tb-event-title">{{ tb.title }}</span>
              <span class="tb-event-sub">{{ tb.sub }}</span>
            </div>
          </div>
        </div>

        <!-- Week view -->
        <div v-if="scheduleView === 'week'" class="schedule-content glass">
          <div class="week-schedule-grid">
            <div class="ws-col" v-for="d in weekScheduleDays" :key="d.name">
              <div class="ws-day-label">{{ d.name }}</div>
              <div class="ws-events">
                <div class="ws-event" :class="e.color" v-for="e in d.events" :key="e.title">
                  <span class="ws-event-time">{{ e.time }}</span>
                  <span class="ws-event-title">{{ e.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Month view -->
        <div v-if="scheduleView === 'month'" class="schedule-content glass">
          <div class="month-grid">
            <div class="month-weekday" v-for="wd in ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']" :key="wd">{{ wd }}</div>
            <div
              class="month-day"
              v-for="d in monthDays"
              :key="d.num"
              :class="{ today: d.today, empty: d.empty }"
            >
              <span v-if="!d.empty" class="month-day-num">{{ d.num }}</span>
              <div v-if="!d.empty" class="month-dots">
                <span v-for="dot in d.dots" :key="dot" class="month-dot" :class="dot"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="subject-legend">
          <span class="pill pill-lavender">Математика</span>
          <span class="pill pill-blue">Программирование</span>
          <span class="pill pill-teal">Физика</span>
          <span class="pill pill-coral">Английский</span>
        </div>
      </div>
    </section>

    <!-- ── Productivity Dashboard ────────────────────────────────────────── -->
    <section class="productivity section" id="productivity">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Аналитика</div>
          <h2 class="section-title">Следи за прогрессом<br />в реальном времени</h2>
          <p class="section-subtitle">Детальная статистика, графики и индикаторы эффективности.</p>
        </div>
        <div class="stat-cards-grid">
          <div class="stat-card glass" v-for="s in statCards" :key="s.label">
            <div class="stat-card-icon" :style="{ background: s.iconBg }">{{ s.icon }}</div>
            <div class="stat-card-body">
              <div class="stat-card-value">{{ s.value }}</div>
              <div class="stat-card-label">{{ s.label }}</div>
            </div>
            <div class="stat-card-badge" :class="s.badgeClass">{{ s.badge }}</div>
          </div>
        </div>
        <div class="productivity-grid">
          <div class="prod-chart-card glass">
            <div class="prod-chart-header">
              <span class="prod-chart-title">Продуктивность за неделю</span>
              <span class="prod-chart-sub">апрель 2025</span>
            </div>
            <div class="bar-chart" aria-label="Weekly productivity chart">
              <svg viewBox="0 0 340 120" width="100%" height="120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#7C6FFF"/>
                    <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.6"/>
                  </linearGradient>
                </defs>
                <rect x="10"  y="30"  width="34" height="90" rx="6" fill="url(#barGrad)" opacity="0.8"/>
                <rect x="58"  y="50"  width="34" height="70" rx="6" fill="url(#barGrad)" opacity="0.7"/>
                <rect x="106" y="15"  width="34" height="105" rx="6" fill="url(#barGrad)"/>
                <rect x="154" y="40"  width="34" height="80" rx="6" fill="url(#barGrad)" opacity="0.75"/>
                <rect x="202" y="20"  width="34" height="100" rx="6" fill="url(#barGrad)" opacity="0.9"/>
                <rect x="250" y="55"  width="34" height="65" rx="6" fill="url(#barGrad)" opacity="0.65"/>
                <rect x="298" y="10"  width="34" height="110" rx="6" fill="url(#barGrad)"/>
                <text x="27"  y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Пн</text>
                <text x="75"  y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Вт</text>
                <text x="123" y="118" text-anchor="middle" font-size="9" fill="#7C6FFF" font-weight="600">Ср</text>
                <text x="171" y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Чт</text>
                <text x="219" y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Пт</text>
                <text x="267" y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Сб</text>
                <text x="315" y="118" text-anchor="middle" font-size="9" fill="#6B6B8A">Вс</text>
              </svg>
            </div>
          </div>
          <div class="prod-progress-card glass">
            <div class="prod-chart-title" style="margin-bottom: 1rem;">Прогресс по предметам</div>
            <div class="prod-prog-row" v-for="p in productivityProgress" :key="p.name">
              <div class="prod-prog-top">
                <span class="prod-prog-name">{{ p.name }}</span>
                <span class="prod-prog-pct">{{ p.pct }}%</span>
              </div>
              <div class="prod-prog-bar-wrap">
                <div class="prod-prog-bar-fill" :class="p.color" :style="{ width: p.pct + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Testimonials ──────────────────────────────────────────────────── -->
    <section class="testimonials section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Отзывы</div>
          <h2 class="section-title">Что говорят пользователи</h2>
          <p class="section-subtitle">Тысячи студентов и профессионалов уже организовали свою учёбу с нами.</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card glass" v-for="t in testimonials" :key="t.name">
            <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p class="testimonial-text">{{ t.text }}</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar" :style="{ background: t.avatarBg }">{{ t.initials }}</div>
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-card glass">
          <div class="cta-glow" aria-hidden="true"></div>
          <h2 class="cta-title">Готов стать продуктивнее?</h2>
          <p class="cta-subtitle">Начни планировать свои занятия уже сегодня. Бесплатно, без регистрации.</p>
          <RouterLink to="/" class="btn-landing btn-landing-primary btn-landing-lg">
            Открыть планировщик →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Footer ────────────────────────────────────────────────────────── -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-logo">◆ 12-Week Plans</div>
            <p class="footer-desc">Умный планировщик для достижения целей за 12 недель.</p>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <div class="footer-col-title">Возможности</div>
              <RouterLink to="/daily" class="footer-link">Ежедневные задачи</RouterLink>
              <RouterLink to="/marathon" class="footer-link">Марафон 56 дней</RouterLink>
              <RouterLink to="/pomodoro" class="footer-link">Помодоро</RouterLink>
              <RouterLink to="/productivity" class="footer-link">Статистика</RouterLink>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Инструменты</div>
              <RouterLink to="/tracker" class="footer-link">Трекер дня</RouterLink>
              <RouterLink to="/finance" class="footer-link">Финансы</RouterLink>
              <RouterLink to="/knowledge" class="footer-link">База знаний</RouterLink>
              <RouterLink to="/rules" class="footer-link">Кодекс пути</RouterLink>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Настройки</div>
              <RouterLink to="/settings" class="footer-link">Параметры</RouterLink>
              <RouterLink to="/plan-1c" class="footer-link">План 1С</RouterLink>
            </div>
          </div>
        </div>
        <div class="footer-sep"></div>
        <div class="footer-bottom">
          <span class="footer-copy">© 2025 12-Week Plans. Все права защищены.</span>
          <span class="footer-made">Сделано с ♥ для продуктивности</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const features = [
  {
    icon: '📅',
    title: 'Умное расписание',
    desc: 'Планируй занятия по неделям с удобным календарём и временными блоками.',
    iconBg: 'linear-gradient(135deg, rgba(124,111,255,0.15), rgba(124,111,255,0.05))',
  },
  {
    icon: '⏰',
    title: 'Дедлайны и напоминания',
    desc: 'Никогда не пропусти важное событие — умные напоминания всегда помогут.',
    iconBg: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))',
  },
  {
    icon: '🍅',
    title: 'Техника Помодоро',
    desc: 'Управляй фокусом и временем с помощью встроенного таймера Помодоро.',
    iconBg: 'linear-gradient(135deg, rgba(251,113,133,0.15), rgba(251,113,133,0.05))',
  },
  {
    icon: '📊',
    title: 'Аналитика продуктивности',
    desc: 'Детальная статистика, графики прогресса и инсайты о твоей эффективности.',
    iconBg: 'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(45,212,191,0.05))',
  },
  {
    icon: '🎯',
    title: 'Приоритеты задач',
    desc: 'Расставляй приоритеты и фокусируйся на действительно важных задачах.',
    iconBg: 'linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0.05))',
  },
  {
    icon: '🌙',
    title: 'Тёмная тема',
    desc: 'Комфортная работа в любое время суток — выбирай из нескольких тем оформления.',
    iconBg: 'linear-gradient(135deg, rgba(124,111,255,0.12), rgba(45,212,191,0.08))',
  },
]

const weekDays = [
  { short: 'Пн', num: '7',  today: false, events: [{ name: 'Физика', color: 'ev-teal' }] },
  { short: 'Вт', num: '8',  today: false, events: [{ name: 'Матем.', color: 'ev-lavender' }, { name: 'Англ.', color: 'ev-coral' }] },
  { short: 'Ср', num: '9',  today: true,  events: [{ name: 'Прогр.', color: 'ev-blue' }] },
  { short: 'Чт', num: '10', today: false, events: [{ name: 'Матем.', color: 'ev-lavender' }] },
  { short: 'Пт', num: '11', today: false, events: [{ name: 'Физика', color: 'ev-teal' }, { name: 'Прогр.', color: 'ev-blue' }] },
  { short: 'Сб', num: '12', today: false, events: [] },
  { short: 'Вс', num: '13', today: false, events: [{ name: 'Англ.', color: 'ev-coral' }] },
]

const previewTasks = [
  { text: 'Лекция по алгебре', subject: 'Матем.', color: 'pill-lavender', done: true },
  { text: 'Задачи 1–5 (стр. 42)', subject: 'Матем.', color: 'pill-lavender', done: true },
  { text: 'Практика Vue.js', subject: 'Прогр.', color: 'pill-blue', done: false },
  { text: 'Словарный диктант', subject: 'Англ.', color: 'pill-coral', done: false },
]

const previewProgress = [
  { name: 'Математика', pct: 85, color: 'fill-lavender' },
  { name: 'Программирование', pct: 72, color: 'fill-blue' },
  { name: 'Физика', pct: 60, color: 'fill-teal' },
  { name: 'Английский', pct: 78, color: 'fill-coral' },
]

const scheduleView = ref('day')
const scheduleViews = [
  { id: 'day', label: 'День' },
  { id: 'week', label: 'Неделя' },
  { id: 'month', label: 'Месяц' },
]

const timeblocks = [
  { time: '09:00–10:30', title: 'Математика', sub: 'Лекция + практика', color: 'tb-lavender' },
  { time: '10:45–11:30', title: 'Перерыв', sub: 'Прогулка, кофе', color: 'tb-break' },
  { time: '11:00–12:00', title: 'Программирование', sub: 'Vue.js — компоненты', color: 'tb-blue' },
  { time: '12:00–13:00', title: 'Обед', sub: '', color: 'tb-break' },
  { time: '13:00–14:30', title: 'Физика', sub: 'Механика, задачи', color: 'tb-teal' },
  { time: '15:00–16:00', title: 'Английский', sub: 'Чтение + словарь', color: 'tb-coral' },
]

const weekScheduleDays = [
  { name: 'Пн', events: [{ time: '09:00', title: 'Физика', color: 'tb-teal' }] },
  { name: 'Вт', events: [{ time: '09:00', title: 'Матем.', color: 'tb-lavender' }, { time: '15:00', title: 'Англ.', color: 'tb-coral' }] },
  { name: 'Ср', events: [{ time: '11:00', title: 'Прогр.', color: 'tb-blue' }] },
  { name: 'Чт', events: [{ time: '09:00', title: 'Матем.', color: 'tb-lavender' }] },
  { name: 'Пт', events: [{ time: '09:00', title: 'Физика', color: 'tb-teal' }, { time: '13:00', title: 'Прогр.', color: 'tb-blue' }] },
  { name: 'Сб', events: [] },
  { name: 'Вс', events: [{ time: '11:00', title: 'Англ.', color: 'tb-coral' }] },
]

const monthDays = (() => {
  const days = []
  // April 2025 starts on Tuesday → 1 empty Monday slot
  days.push({ empty: true, num: 0, dots: [] })
  const events = {
    1: ['dot-teal'], 3: ['dot-lavender'], 5: ['dot-blue', 'dot-coral'],
    7: ['dot-teal'], 8: ['dot-lavender', 'dot-coral'], 9: ['dot-blue'],
    10: ['dot-lavender'], 11: ['dot-teal', 'dot-blue'], 14: ['dot-lavender'],
    15: ['dot-blue'], 17: ['dot-teal'], 19: ['dot-coral'], 21: ['dot-lavender', 'dot-blue'],
    22: ['dot-teal'], 24: ['dot-lavender'], 25: ['dot-blue', 'dot-coral'],
    28: ['dot-teal'], 30: ['dot-lavender'],
  }
  for (let i = 1; i <= 30; i++) {
    days.push({ num: i, today: i === 9, empty: false, dots: events[i] || [] })
  }
  return days
})()

const statCards = [
  { icon: '✅', label: 'Задач выполнено', value: '847', badge: '+12%', badgeClass: 'badge-green', iconBg: 'rgba(16,185,129,0.12)' },
  { icon: '⏱️', label: 'Часов фокуса', value: '124 ч', badge: '+8%', badgeClass: 'badge-green', iconBg: 'rgba(124,111,255,0.12)' },
  { icon: '🔥', label: 'Серия дней', value: '23 дня', badge: 'Рекорд!', badgeClass: 'badge-orange', iconBg: 'rgba(251,146,60,0.12)' },
  { icon: '⚡', label: 'Эффективность', value: '94%', badge: '↑ 3%', badgeClass: 'badge-green', iconBg: 'rgba(99,102,241,0.12)' },
]

const productivityProgress = [
  { name: 'Математика', pct: 85, color: 'fill-lavender' },
  { name: 'Программирование', pct: 72, color: 'fill-blue' },
  { name: 'Физика', pct: 60, color: 'fill-teal' },
  { name: 'Английский', pct: 78, color: 'fill-coral' },
]

const testimonials = [
  {
    name: 'Анна Смирнова',
    role: 'Студентка, 3 курс МГТУ',
    initials: 'АС',
    avatarBg: 'linear-gradient(135deg, #a78bfa, #6366f1)',
    text: 'Наконец-то нашла планировщик, который реально помогает. Успеваю готовиться ко всем парам и ещё находить время на хобби. Дизайн просто огонь!',
  },
  {
    name: 'Михаил Козлов',
    role: 'Разработчик, учится параллельно',
    initials: 'МК',
    avatarBg: 'linear-gradient(135deg, #2dd4bf, #6366f1)',
    text: 'Использую уже полгода. Техника Помодоро изменила мою жизнь — стал делать в два раза больше за то же время. Рекомендую всем!',
  },
  {
    name: 'Елена Петрова',
    role: 'Преподаватель математики',
    initials: 'ЕП',
    avatarBg: 'linear-gradient(135deg, #fb7185, #f59e0b)',
    text: 'Отличный инструмент и для преподавателей! Планирую лекции, слежу за прогрессом студентов. Интерфейс интуитивный и красивый.',
  },
]
</script>

<style scoped>
/* ── Base ────────────────────────────────────────────────────────────── */
.landing {
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--bg-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 6rem 0;
}

/* ── Background blobs ────────────────────────────────────────────────── */
.bg-blobs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
}

.blob-1 {
  width: 600px;
  height: 600px;
  top: -150px;
  right: -100px;
  background: radial-gradient(circle, #a78bfa, #6366f1);
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 500px;
  height: 500px;
  bottom: 10%;
  left: -150px;
  background: radial-gradient(circle, #2dd4bf, #6366f1);
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 350px;
  height: 350px;
  top: 40%;
  left: 40%;
  background: radial-gradient(circle, #fb7185, #a78bfa);
  animation: float 12s ease-in-out infinite 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-28px) scale(1.03); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Glass utility ───────────────────────────────────────────────────── */
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

:root[data-theme="premium-lavender"] .glass,
:root[data-theme="bw-light"] .glass {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(124, 111, 255, 0.12);
}

/* ── Gradient text ───────────────────────────────────────────────────── */
.gradient-text {
  background: linear-gradient(135deg, #a78bfa 0%, #6366f1 45%, #2dd4bf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Pill badges ─────────────────────────────────────────────────────── */
.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
.pill-lavender { background: rgba(124, 111, 255, 0.15); color: #a78bfa; }
.pill-blue     { background: rgba(99, 102, 241, 0.15);  color: #818cf8; }
.pill-teal     { background: rgba(45, 212, 191, 0.15);  color: #2dd4bf; }
.pill-coral    { background: rgba(251, 113, 133, 0.15); color: #fb7185; }

/* ── Section headers ─────────────────────────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
  animation: fadeInUp 0.6s ease both;
}

.section-badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  background: rgba(124, 111, 255, 0.12);
  color: #a78bfa;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border: 1px solid rgba(124, 111, 255, 0.2);
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.65;
}

/* ── Landing buttons ─────────────────────────────────────────────────── */
.btn-landing {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.btn-landing-primary {
  background: linear-gradient(135deg, #7C6FFF, #6366f1);
  color: #fff;
  box-shadow: 0 4px 20px rgba(124, 111, 255, 0.35);
}

.btn-landing-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(124, 111, 255, 0.45);
}

.btn-landing-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border, rgba(255,255,255,0.1));
}

.btn-landing-ghost:hover {
  background: var(--accent-subtle, rgba(124,111,255,0.08));
  color: var(--text-primary);
  border-color: rgba(124, 111, 255, 0.3);
}

.btn-landing-lg {
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 7rem 0 4rem;
  z-index: 1;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  animation: fadeInUp 0.7s ease both;
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: rgba(124, 111, 255, 0.1);
  color: #a78bfa;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 111, 255, 0.2);
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.12;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 460px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stat-num {
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border, rgba(255,255,255,0.1));
  flex-shrink: 0;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 420px;
  animation: fadeInUp 0.7s ease 0.15s both;
}

.hero-card {
  position: absolute;
  border-radius: 20px;
  padding: 1.25rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
}

.hero-card-main {
  top: 0;
  right: 0;
  width: 340px;
}

.hero-card-pomodoro {
  bottom: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-radius: 16px;
}

.hero-card-streak {
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 16px;
}

.float-card {
  animation: float 6s ease-in-out infinite;
}
.float-card-2 {
  animation: float 7s ease-in-out infinite 1s;
}

/* Mini card internals */
.mini-topbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.mini-dots {
  display: flex;
  gap: 4px;
}
.mini-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border, rgba(255,255,255,0.15));
}
.mini-dots span:first-child { background: #ff5f57; }
.mini-dots span:nth-child(2) { background: #ffbd2e; }
.mini-dots span:last-child { background: #28c840; }
.mini-date {
  flex: 1;
  font-size: 0.72rem;
  color: var(--text-secondary);
  text-align: center;
}
.mini-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7C6FFF, #2dd4bf);
  font-size: 0.55rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-tasks { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
.mini-task-row { display: flex; align-items: center; gap: 0.5rem; }
.mini-checkbox {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1.5px solid rgba(124,111,255,0.4);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mini-checkbox.checked {
  background: #7C6FFF;
  border-color: #7C6FFF;
}
.mini-checkbox.checked::after {
  content: '✓';
  font-size: 0.55rem;
  color: white;
  font-weight: 700;
}
.mini-task-text { flex: 1; font-size: 0.73rem; color: var(--text-primary); }
.mini-task-text.done-text { text-decoration: line-through; opacity: 0.45; }

.mini-progress { display: flex; align-items: center; gap: 0.5rem; }
.mini-progress-label { font-size: 0.65rem; color: var(--text-secondary); white-space: nowrap; }
.mini-progress-bar { flex: 1; height: 4px; background: rgba(124,111,255,0.15); border-radius: 999px; overflow: hidden; }
.mini-progress-fill { height: 100%; background: linear-gradient(90deg, #7C6FFF, #2dd4bf); border-radius: 999px; }
.mini-progress-pct { font-size: 0.65rem; font-weight: 700; color: #a78bfa; }

.pomodoro-ring { position: relative; display: flex; align-items: center; justify-content: center; }
.pomodoro-time {
  position: absolute;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
}
.pomodoro-label { font-size: 0.72rem; color: var(--text-secondary); }

.streak-icon { font-size: 1.5rem; }
.streak-num { font-size: 1.4rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }
.streak-label { font-size: 0.7rem; color: var(--text-secondary); }

/* ─────────────────────────────────────────────────────────────────────
   FEATURES
   ───────────────────────────────────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: var(--bg-card, rgba(255,255,255,0.04));
  border: 1px solid var(--border, rgba(255,255,255,0.08));
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.5s ease both;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(124, 111, 255, 0.15);
  border-color: rgba(124, 111, 255, 0.25);
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(124, 111, 255, 0.1);
}

.feature-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ─────────────────────────────────────────────────────────────────────
   APP PREVIEW
   ───────────────────────────────────────────────────────────────────── */
.app-preview {
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  height: 480px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.6s ease both;
}

/* Sidebar */
.preview-sidebar {
  width: 52px;
  background: rgba(255,255,255,0.03);
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
  flex-shrink: 0;
}

.preview-logo {
  font-size: 1rem;
  color: #a78bfa;
  margin-bottom: 0.5rem;
}

.preview-nav { display: flex; flex-direction: column; gap: 4px; }
.preview-nav-item {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.15s ease;
}
.preview-nav-item.active { background: rgba(124,111,255,0.15); color: #a78bfa; }

/* Main area */
.preview-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.preview-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}
.preview-topbar-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
.preview-topbar-right { display: flex; align-items: center; gap: 0.75rem; }
.preview-date-badge {
  font-size: 0.7rem;
  color: var(--text-secondary);
  background: rgba(124,111,255,0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}
.preview-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7C6FFF, #2dd4bf);
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-body { display: flex; gap: 1rem; padding: 1rem; flex: 1; overflow: hidden; }

/* Calendar */
.preview-calendar { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; min-width: 0; }
.preview-cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
.preview-cal-title { font-size: 0.78rem; font-weight: 700; color: var(--text-primary); }
.preview-cal-nav { display: flex; gap: 4px; }
.preview-cal-nav button {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; flex: 1; }
.week-day { display: flex; flex-direction: column; gap: 4px; }
.week-day-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 0.6rem;
  color: var(--text-secondary);
  font-weight: 500;
}
.week-day-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.62rem;
}
.week-day-num.today { background: #7C6FFF; color: white; font-weight: 700; }
.week-day-label.today { color: #a78bfa; }
.week-events { display: flex; flex-direction: column; gap: 3px; }
.week-event {
  border-radius: 4px;
  font-size: 0.58rem;
  padding: 0.15rem 0.3rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ev-lavender { background: rgba(124,111,255,0.2); color: #a78bfa; }
.ev-blue     { background: rgba(99,102,241,0.2);  color: #818cf8; }
.ev-teal     { background: rgba(45,212,191,0.2);  color: #2dd4bf; }
.ev-coral    { background: rgba(251,113,133,0.2); color: #fb7185; }

/* Right panel */
.preview-right { width: 200px; display: flex; flex-direction: column; gap: 0.75rem; flex-shrink: 0; }
.preview-tasks-card, .preview-progress-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 0.875rem;
}
.preview-tasks-title { font-size: 0.72rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.625rem; }
.preview-task-item { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem; }
.preview-checkbox {
  width: 13px;
  height: 13px;
  border-radius: 3px;
  border: 1.5px solid rgba(124,111,255,0.4);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview-checkbox.done { background: #7C6FFF; border-color: #7C6FFF; }
.preview-task-text { flex: 1; font-size: 0.65rem; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.preview-task-text.done { text-decoration: line-through; opacity: 0.4; }

.preview-prog-row { margin-bottom: 0.5rem; }
.preview-prog-bar { height: 4px; background: rgba(255,255,255,0.07); border-radius: 999px; overflow: hidden; margin: 0.2rem 0; }
.preview-prog-fill { height: 100%; border-radius: 999px; }
.fill-lavender { background: linear-gradient(90deg, #7C6FFF, #a78bfa); }
.fill-blue     { background: linear-gradient(90deg, #6366f1, #818cf8); }
.fill-teal     { background: linear-gradient(90deg, #2dd4bf, #5eead4); }
.fill-coral    { background: linear-gradient(90deg, #fb7185, #fda4af); }
.preview-prog-label { font-size: 0.62rem; color: var(--text-secondary); }
.preview-prog-pct { font-size: 0.62rem; color: var(--text-primary); font-weight: 600; float: right; }

.preview-badge {
  text-align: center;
  margin-top: 1.25rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* ─────────────────────────────────────────────────────────────────────
   SCHEDULE
   ───────────────────────────────────────────────────────────────────── */
.schedule-switcher {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.3rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.switcher-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.switcher-btn.active {
  background: linear-gradient(135deg, #7C6FFF, #6366f1);
  color: white;
  box-shadow: 0 2px 10px rgba(124,111,255,0.35);
}

.schedule-content {
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.4s ease both;
}

/* Day view */
.timeblock {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin-bottom: 0.75rem;
}
.tb-time {
  font-size: 0.75rem;
  color: var(--text-secondary);
  width: 90px;
  flex-shrink: 0;
  padding-top: 0.3rem;
  font-variant-numeric: tabular-nums;
}
.tb-event {
  flex: 1;
  border-radius: 10px;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.tb-lavender { background: rgba(124,111,255,0.12); border-left: 3px solid #7C6FFF; }
.tb-blue     { background: rgba(99,102,241,0.12);  border-left: 3px solid #6366f1; }
.tb-teal     { background: rgba(45,212,191,0.12);  border-left: 3px solid #2dd4bf; }
.tb-coral    { background: rgba(251,113,133,0.12); border-left: 3px solid #fb7185; }
.tb-break    { background: rgba(255,255,255,0.03); border-left: 3px solid rgba(255,255,255,0.1); }
.tb-event-title { font-size: 0.88rem; font-weight: 600; color: var(--text-primary); }
.tb-event-sub   { font-size: 0.78rem; color: var(--text-secondary); }

/* Week schedule view */
.week-schedule-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.75rem; }
.ws-col { display: flex; flex-direction: column; gap: 0.5rem; }
.ws-day-label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); text-align: center; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
.ws-events { display: flex; flex-direction: column; gap: 0.35rem; }
.ws-event { border-radius: 8px; padding: 0.4rem 0.5rem; display: flex; flex-direction: column; gap: 2px; }
.ws-event-time { font-size: 0.6rem; color: var(--text-secondary); }
.ws-event-title { font-size: 0.72rem; font-weight: 600; color: var(--text-primary); }

/* Month view */
.month-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.month-weekday {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-align: center;
  padding: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.month-day {
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  transition: background 0.15s;
  cursor: pointer;
}
.month-day:not(.empty):hover { background: rgba(124,111,255,0.08); }
.month-day.today { background: rgba(124,111,255,0.15); }
.month-day.empty { opacity: 0; }
.month-day-num { font-size: 0.8rem; color: var(--text-primary); font-weight: 500; }
.month-day.today .month-day-num { color: #a78bfa; font-weight: 800; }
.month-dots { display: flex; gap: 3px; }
.month-dot { width: 5px; height: 5px; border-radius: 50%; }
.dot-lavender { background: #a78bfa; }
.dot-blue     { background: #818cf8; }
.dot-teal     { background: #2dd4bf; }
.dot-coral    { background: #fb7185; }

.subject-legend {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* ─────────────────────────────────────────────────────────────────────
   PRODUCTIVITY DASHBOARD
   ───────────────────────────────────────────────────────────────────── */
.stat-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeInUp 0.5s ease both;
  position: relative;
}

.stat-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.stat-card-body { flex: 1; min-width: 0; }
.stat-card-value { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }
.stat-card-label { font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem; }

.stat-card-badge {
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
}
.badge-green  { background: rgba(16,185,129,0.15);  color: #10b981; }
.badge-orange { background: rgba(251,146,60,0.15);  color: #fb923c; }

.productivity-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.25rem;
}

.prod-chart-card, .prod-progress-card {
  border-radius: 20px;
  padding: 1.75rem;
  animation: fadeInUp 0.5s ease both;
}

.prod-chart-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
.prod-chart-title { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
.prod-chart-sub { font-size: 0.75rem; color: var(--text-secondary); }

.bar-chart { width: 100%; }

.prod-prog-row { margin-bottom: 1rem; }
.prod-prog-top { display: flex; justify-content: space-between; margin-bottom: 0.35rem; }
.prod-prog-name { font-size: 0.82rem; color: var(--text-primary); font-weight: 500; }
.prod-prog-pct { font-size: 0.82rem; color: var(--text-secondary); font-weight: 600; }
.prod-prog-bar-wrap { height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; }
.prod-prog-bar-fill { height: 100%; border-radius: 999px; transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); }

/* ─────────────────────────────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────────────────────────────── */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeInUp 0.5s ease both;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(124, 111, 255, 0.12);
}

.testimonial-stars { font-size: 0.9rem; }

.testimonial-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.testimonial-author { display: flex; align-items: center; gap: 0.875rem; }

.testimonial-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testimonial-name { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
.testimonial-role { font-size: 0.78rem; color: var(--text-secondary); }

/* ─────────────────────────────────────────────────────────────────────
   CTA
   ───────────────────────────────────────────────────────────────────── */
.cta-section { z-index: 1; position: relative; }

.cta-card {
  border-radius: 28px;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(124, 111, 255, 0.2);
}

.cta-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,111,255,0.12), transparent);
  pointer-events: none;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
}

.cta-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  position: relative;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.65;
}

/* ─────────────────────────────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 1;
  padding: 3.5rem 0 2rem;
  border-top: 1px solid var(--border, rgba(255,255,255,0.08));
}

.footer-top {
  display: flex;
  gap: 4rem;
  margin-bottom: 2.5rem;
}

.footer-brand { max-width: 260px; }
.footer-logo { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.625rem; letter-spacing: -0.02em; }
.footer-desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

.footer-cols { display: flex; gap: 3rem; flex: 1; justify-content: flex-end; }
.footer-col { display: flex; flex-direction: column; gap: 0.5rem; }
.footer-col-title { font-size: 0.78rem; font-weight: 700; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 0.25rem; }
.footer-link {
  font-size: 0.88rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover { color: #a78bfa; }

.footer-sep {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124,111,255,0.3), transparent);
  margin-bottom: 1.5rem;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-copy { font-size: 0.82rem; color: var(--text-secondary); }
.footer-made { font-size: 0.82rem; color: var(--text-secondary); }

/* ─────────────────────────────────────────────────────────────────────
   RESPONSIVE
   ───────────────────────────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .stat-cards-grid { grid-template-columns: repeat(2, 1fr); }
  .productivity-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .section { padding: 4rem 0; }
  .container { padding: 0 1.25rem; }

  .hero { padding: 4rem 0 2rem; }
  .hero .container { grid-template-columns: 1fr; gap: 2.5rem; }
  .hero-visual { height: 300px; }
  .hero-card-main { width: 260px; right: 50%; transform: translateX(50%); }
  .hero-card-pomodoro { left: 10px; bottom: 30px; }
  .hero-card-streak { display: none; }

  .features-grid { grid-template-columns: 1fr; }
  .stat-cards-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }

  .app-preview { height: auto; flex-direction: column; }
  .preview-sidebar { width: 100%; height: 48px; flex-direction: row; padding: 0 1rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .preview-nav { flex-direction: row; }
  .preview-body { flex-direction: column; }
  .preview-right { width: 100%; }

  .week-schedule-grid { grid-template-columns: repeat(4, 1fr); }
  .footer-top { flex-direction: column; gap: 2rem; }
  .footer-cols { gap: 2rem; justify-content: flex-start; }
  .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .hero-actions .btn-landing { width: 100%; justify-content: center; }
  .stat-cards-grid { grid-template-columns: 1fr; }
  .footer-cols { flex-direction: column; }
  .week-schedule-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
