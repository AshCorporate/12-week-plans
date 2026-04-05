<template>
  <div class="rules-page">
    <div class="rules-header">
      <blockquote class="header-quote">"Дисциплина равна свободе."</blockquote>
      <p class="header-attr">— Jocko Willink</p>
      <div class="divider-title">
        <span class="divider-line"></span>
        <span class="divider-text">— Кодекс Пути —</span>
        <span class="divider-line"></span>
      </div>
    </div>

    <div class="rules-list">
      <div v-for="(rule, index) in rules" :key="index" class="rule-card">
        <div class="rule-number">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="rule-content">
          <h2 class="rule-title">{{ rule.title }}</h2>
          <p class="rule-sub">{{ rule.sub }}</p>
          <p v-if="rule.attr" class="rule-attr">{{ rule.attr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rules = [
  {
    title: 'Не останавливайся.',
    sub: '«Движение — это жизнь. Остановка — смерть.»',
    attr: '— Лев Толстой',
  },
  {
    title: 'Ни единой сладости.',
    sub: '«Дисциплина начинается с малого — с того, от чего отказываешься.»',
    attr: null,
  },
  {
    title: 'Чистота тела — чистота духа.',
    sub: '«Тело — инструмент духа. Держи его в порядке.»',
    attr: '— Марк Аврелий',
  },
  {
    title: 'Движение каждый день.',
    sub: '«Тело — единственное место, в котором тебе обязательно жить.»',
    attr: '— Джим Рон',
  },
  {
    title: 'Почитай родителей.',
    sub: '«Родители — первая книга, которую ты читаешь в этом мире.»',
    attr: null,
  },
  {
    title: 'Отдавай себя делу без остатка.',
    sub: '«Всё, что стоит делать, стоит делать хорошо.»',
    attr: '— Честерфилд',
  },
  {
    title: 'Кровать — только для близости. Днём — для дела.',
    sub: '«Постель не место для праздности. Заработай свой отдых.»',
    attr: null,
  },
]
</script>

<style scoped>
.rules-page {
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

.rules-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-quote {
  font-size: 1.35rem;
  font-weight: 300;
  font-style: italic;
  color: var(--text-primary);
  letter-spacing: 0.01em;
  margin-bottom: 0.4rem;
}

.header-attr {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.divider-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--border-strong);
}

.divider-text {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--text-secondary);
  white-space: nowrap;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.rule-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.rule-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-card);
}

.rule-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--border-strong);
  letter-spacing: -0.04em;
  line-height: 1;
  flex-shrink: 0;
  min-width: 3rem;
  font-variant-numeric: tabular-nums;
}

.rule-content {
  flex: 1;
}

.rule-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.rule-sub {
  font-size: 0.95rem;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.25rem;
}

.rule-attr {
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 500;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .rule-card {
    gap: 1rem;
    padding: 1.25rem;
  }
  .rule-number {
    font-size: 2rem;
    min-width: 2.5rem;
  }
}
</style>
