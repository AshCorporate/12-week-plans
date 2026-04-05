<template>
  <div class="logo-wrap">
    <div class="logo-names">
      <span class="logo-ilya">Ilya</span>
      <span class="logo-heart">♥</span>
      <span class="logo-varya">Varya</span>
    </div>
    <div class="logo-family">= Family</div>
  </div>
</template>

<style scoped>
.logo-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 0.25rem 0;
}

.logo-names {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 1.05rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--text-primary);
}

.logo-heart {
  color: var(--accent);
  font-size: 0.9rem;
}

.logo-family {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  padding-left: 0.1rem;
}
</style>
