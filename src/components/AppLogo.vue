<template>
  <div class="logo-wrap">
    <div class="logo-mark">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="var(--accent)" opacity="0.12"/>
        <rect x="6" y="6" width="5" height="5" rx="1.5" fill="var(--accent)"/>
        <rect x="13" y="6" width="5" height="5" rx="1.5" fill="var(--accent)" opacity="0.6"/>
        <rect x="6" y="13" width="5" height="5" rx="1.5" fill="var(--accent)" opacity="0.6"/>
        <rect x="13" y="13" width="5" height="5" rx="1.5" fill="var(--accent)" opacity="0.35"/>
      </svg>
    </div>
    <div class="logo-text">
      <span class="logo-title">12 Weeks</span>
      <span class="logo-sub">Planner</span>
    </div>
  </div>
</template>

<style scoped>
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.125rem 0;
}

.logo-mark {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1.2;
}

.logo-title {
  font-size: 0.9375rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.logo-sub {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--text-secondary);
  opacity: 0.75;
}
</style>
