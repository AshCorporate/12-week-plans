<template>
  <div class="transition-plan">
    <h1>Станьте разработчиком 1С за несколько недель!</h1>
    <div class="positioning-block">
      <p>У вас есть мощный инженерный опыт в различных языках программирования, включая C++, C#, Python, а также знание алгоритмов, баз данных, математики, Unity и финансовых рынков.</p>
    </div>
    <h2>Дорожная карта</h2>
    <ul class="roadmap">
      <li><strong>Ежедневная практика:</strong> 14 сессий по 25 минут (метод Помодоро)</li>
      <li><strong>Еженедельные цели:</strong>
        <ul>
          <li>Знакомство с 1С:Бухгалтерия и основами разработки</li>
          <li>Создание проектов портфолио</li>
        </ul>
      </li>
      <li><strong>Проекты портфолио:</strong>
        <ul>
          <li>Склад / Продажи</li>
          <li>CRM light</li>
          <li>Мини-контроль кэш-флоу</li>
        </ul>
      </li>
      <li><strong>Подготовка к интервью:</strong> Тесты, вопросы часовой теории и практики</li>
      <li><strong>Подготовка к сертификации:</strong> Изучение требований и создание проектов</li>
      <li><strong>Поиск работы:</strong> Помощь с резюме и подготовка к собеседованиям</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TransitionPlan',
};
</script>

<style scoped>
.transition-plan {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h1 {
  color: #333;
}

.positioning-block {
  margin-bottom: 20px;
  font-style: italic;
}

.roadmap {
  list-style-type: none;
  padding-left: 0;
}

.roadmap li {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>