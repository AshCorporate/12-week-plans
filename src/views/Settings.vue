<template>
  <div class="settings-view">
    <h1 class="page-title">⚙️ Настройки</h1>

    <div class="card settings-card">
      <h3>Начало 12-недельного цикла</h3>
      <div class="field-row">
        <input type="date" class="input" v-model="settings.startDate" />
      </div>
    </div>

    <div class="card settings-card">
      <h3>Тема оформления</h3>
      <div class="theme-grid">
        <button
          v-for="t in themes"
          :key="t.id"
          class="theme-card"
          :class="{ 'theme-card--active': settings.theme === t.id }"
          :style="{ '--tc-bg': t.bg, '--tc-accent': t.accent }"
          @click="settings.theme = t.id"
        >
          <span class="theme-swatch">
            <span class="swatch-bg" :style="{ background: t.bg }"></span>
            <span class="swatch-accent" :style="{ background: t.accent }"></span>
          </span>
          <span class="theme-label">{{ t.label }}</span>
        </button>
      </div>
    </div>

    <div class="card settings-card danger-card">
      <h3>Сброс данных</h3>
      <p class="danger-desc">Удалить все задачи, планы и сбросить настройки.</p>
      <button class="btn btn-danger" @click="confirmReset">🗑️ Сбросить все данные</button>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '../stores/settings.js'

const settings = useSettingsStore()

const themes = [
  { id: 'dark',   label: 'Тёмная',   bg: '#12121A', accent: '#7C6FFF' },
  { id: 'light',  label: 'Светлая',  bg: '#F4F6FA', accent: '#6558F5' },
  { id: 'black',  label: 'Чёрная',   bg: '#050508', accent: '#A89CFF' },
  { id: 'green',  label: 'Зелёная',  bg: '#0A120E', accent: '#4ADE80' },
  { id: 'pink',   label: 'Розовая',  bg: '#FDF0F5', accent: '#E05A8A' },
  { id: 'blue',   label: 'Синяя',    bg: '#07101E', accent: '#4DA6FF' },
  { id: 'yellow', label: 'Жёлтая',   bg: '#141008', accent: '#F5C842' },
]

function confirmReset() {
  if (confirm('Вы уверены? Все данные будут удалены безвозвратно.')) {
    settings.resetAll()
  }
}
</script>

<style scoped>
.settings-view { max-width: 600px; }
.settings-card {
  margin-bottom: 1.25rem;
}
.settings-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.field-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.field-row .input {
  color-scheme: dark;
}

/* Theme picker grid */
.theme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
}

.theme-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 10px;
  border: 2px solid var(--border);
  background: var(--bg-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.theme-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.theme-card--active {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.theme-swatch {
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border: 2px solid var(--border);
  flex-shrink: 0;
}

.swatch-bg {
  flex: 1;
}

.swatch-accent {
  flex: 1;
}

.theme-label {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.2;
}

.danger-card {
  border-color: var(--danger);
}
.danger-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

@media (max-width: 480px) {
  .theme-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  .theme-swatch {
    width: 32px;
    height: 32px;
  }
  .theme-label {
    font-size: 0.7rem;
  }
}
</style>
