<template>
  <nav class="sidebar">
    <div class="sidebar-header">
      <AppLogo />
    </div>

    <div class="nav-body">
      <div class="nav-section">
        <div class="nav-section-label">Главное</div>
        <ul class="nav-list">
          <li v-for="item in mainItems" :key="item.path">
            <RouterLink :to="item.path" class="nav-link" :class="{ active: isActive(item.path) }">
              <span class="nav-icon"><NavIcon :name="item.icon" /></span>
              <span class="nav-label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <div class="nav-section-label">Продуктивность</div>
        <ul class="nav-list">
          <li v-for="item in productivityItems" :key="item.path">
            <RouterLink :to="item.path" class="nav-link" :class="{ active: isActive(item.path) }">
              <span class="nav-icon"><NavIcon :name="item.icon" /></span>
              <span class="nav-label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <div class="nav-section-label">Прочее</div>
        <ul class="nav-list">
          <li v-for="item in otherItems" :key="item.path">
            <RouterLink :to="item.path" class="nav-link" :class="{ active: isActive(item.path) }">
              <span class="nav-icon"><NavIcon :name="item.icon" /></span>
              <span class="nav-label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebar-footer">
      <RouterLink to="/settings" class="nav-link settings-link" :class="{ active: isActive('/settings') }">
        <span class="nav-icon"><NavIcon name="settings" /></span>
        <span class="nav-label">Настройки</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'
import NavIcon from './NavIcon.vue'

const route = useRoute()

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path
}

const mainItems = [
  { path: '/', icon: 'home', label: 'Главная' },
  { path: '/marathon', icon: 'marathon', label: 'Марафон' },
  { path: '/daily', icon: 'daily', label: 'День' },
]

const productivityItems = [
  { path: '/pomodoro', icon: 'pomodoro', label: 'Помидор' },
  { path: '/tracker', icon: 'tracker', label: 'Трекер дня' },
  { path: '/productivity', icon: 'productivity', label: 'Статистика' },
]

const otherItems = [
  { path: '/knowledge', icon: 'knowledge', label: 'Учёба' },
  { path: '/plan-1c', icon: 'plan1c', label: 'План 1С' },
  { path: '/finance', icon: 'finance', label: 'Финансы' },
  { path: '/rules', icon: 'rules', label: 'Кодекс пути' },
]
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background: var(--sidebar-bg, var(--bg-secondary));
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow: hidden;
}

.sidebar-header {
  padding: 1.375rem 1.125rem 1rem;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.nav-body {
  flex: 1;
  overflow-y: auto;
  padding: 0.625rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  scrollbar-width: none;
}

.nav-body::-webkit-scrollbar {
  display: none;
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-bottom: 0.5rem;
}

.nav-section + .nav-section {
  padding-top: 0.25rem;
  border-top: 1px solid var(--border);
}

.nav-section-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-secondary);
  opacity: 0.55;
  padding: 0.5rem 0.75rem 0.3rem;
  user-select: none;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 450;
  letter-spacing: -0.01em;
  border-radius: 9px;
  transition:
    background 0.15s var(--ease),
    color 0.15s var(--ease),
    box-shadow 0.15s var(--ease);
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--accent-subtle);
}

.nav-link.active {
  color: var(--accent);
  background: var(--accent-subtle);
  font-weight: 600;
  box-shadow: inset 0 0 0 1px var(--border-strong);
}

.nav-link.active .nav-icon {
  opacity: 1;
}

.nav-icon {
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.65;
  transition: opacity 0.15s var(--ease);
}

.nav-link:hover .nav-icon,
.nav-link.active .nav-icon {
  opacity: 1;
}

.nav-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-footer {
  padding: 0.5rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

.settings-link {
  width: 100%;
}

/* ── Mobile bottom nav ────────────────────────────────────────────────── */
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
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    z-index: 200;
    overflow: visible;
  }

  .sidebar-header {
    display: none;
  }

  .nav-body {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-body::-webkit-scrollbar {
    display: none;
  }

  .nav-section {
    display: contents;
    padding: 0;
    border: none;
  }

  .nav-section-label {
    display: none;
  }

  .nav-list {
    display: contents;
  }

  .nav-link {
    flex-direction: column;
    padding: 0.45rem 0.4rem 0.35rem;
    font-size: 0.6rem;
    gap: 0.2rem;
    border-radius: 0;
    border-bottom: 2px solid transparent;
    min-width: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    box-shadow: none !important;
  }

  .nav-link:hover {
    background: var(--accent-subtle);
  }

  .nav-link.active {
    border-bottom-color: var(--accent);
    background: transparent;
    font-weight: 600;
  }

  .nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.7;
  }

  .nav-link.active .nav-icon {
    opacity: 1;
  }

  .nav-label {
    font-size: 0.58rem;
    font-weight: 500;
  }

  .sidebar-footer {
    display: contents;
    border: none;
    padding: 0;
  }

  .settings-link {
    flex-direction: column;
    padding: 0.45rem 0.4rem 0.35rem;
    font-size: 0.6rem;
    gap: 0.2rem;
    border-radius: 0;
    border-bottom: 2px solid transparent;
    min-width: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: none !important;
  }
}
</style>
