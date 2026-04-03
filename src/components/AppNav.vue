<template>
  <nav class="sidebar">
    <div class="sidebar-header">
      <AppLogo />
    </div>
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.path">
        <RouterLink :to="item.path" class="nav-link" :class="{ active: route.path === item.path }">
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'

const route = useRoute()

const navItems = [
  { path: '/', icon: '🏠', label: 'Главная' },
  { path: '/tracker', icon: '📓', label: 'Трекер' },
  { path: '/daily', icon: '📅', label: 'День' },
  { path: '/productivity', icon: '📊', label: 'Стат.' },
  { path: '/knowledge', icon: '📚', label: 'Учёба' },
  { path: '/weekly', icon: '📆', label: 'Неделя' },
  { path: '/monthly', icon: '🗓️', label: '4 нед.' },
  { path: '/yearly', icon: '🎯', label: '12 нед.' },
  { path: '/plan-1c', icon: '🏗️', label: '1С план' },
  { path: '/settings', icon: '⚙️', label: 'Настр.' },
  { path: '/finance', icon: '💰', label: 'Финансы' },
]
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow-y: auto;
  scrollbar-width: none;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar-header {
  padding: 1.5rem 1.25rem 1.25rem;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.nav-list {
  list-style: none;
  padding: 0.75rem 0.625rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 450;
  letter-spacing: -0.01em;
  border-radius: 10px;
  transition: background 0.18s var(--ease, cubic-bezier(0.4,0,0.2,1)),
              color 0.18s var(--ease, cubic-bezier(0.4,0,0.2,1));
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--accent-subtle, rgba(124, 111, 255, 0.08));
}

.nav-link.active {
  color: var(--accent);
  background: var(--accent-subtle, rgba(124, 111, 255, 0.1));
  font-weight: 600;
}

.nav-icon {
  font-size: 1rem;
  width: 1.25rem;
  text-align: center;
  flex-shrink: 0;
}

.nav-label {
  flex: 1;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: stretch;
    padding: 0;
    border-right: none;
    border-top: 1px solid var(--border);
    background: var(--bg-secondary);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    z-index: 200;
    overflow-y: visible;
  }

  .sidebar-header {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    padding: 0;
    flex: 1;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-list::-webkit-scrollbar {
    display: none;
  }

  .nav-link {
    flex-direction: column;
    padding: 0.5rem 0.5rem 0.4rem;
    font-size: 0.6rem;
    gap: 0.2rem;
    border-radius: 0;
    border-bottom: 2px solid transparent;
    min-width: 52px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
  }

  .nav-link:hover {
    background: var(--accent-subtle, rgba(124, 111, 255, 0.06));
  }

  .nav-link.active {
    border-bottom-color: var(--accent);
    background: transparent;
  }

  .nav-icon {
    font-size: 1.2rem;
    width: auto;
  }

  .nav-label {
    font-size: 0.58rem;
    font-weight: 500;
  }
}
</style>
