import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import DailyTracker from '../views/DailyTracker.vue'
import DailyTasks from '../views/DailyTasks.vue'
import Marathon from '../views/Marathon.vue'
import RulesOfPath from '../views/RulesOfPath.vue'
import Settings from '../views/Settings.vue'
import PomodoroTimer from '../views/PomodoroTimer.vue'
import ProductivityTracker from '../views/ProductivityTracker.vue'
import Finance from '../views/Finance.vue'
import Knowledge from '../views/Knowledge.vue'
import Plan1C from '../views/Plan1C.vue'

const routes = [
  { path: '/landing', component: LandingPage },
  { path: '/', component: Dashboard },
  { path: '/tracker', component: DailyTracker },
  { path: '/daily', component: DailyTasks },
  { path: '/marathon', component: Marathon },
  { path: '/rules', component: RulesOfPath },
  { path: '/settings', component: Settings },
  { path: '/pomodoro', component: PomodoroTimer },
  { path: '/productivity', component: ProductivityTracker },
  { path: '/finance', component: Finance },
  { path: '/knowledge', component: Knowledge },
  { path: '/plan-1c', component: Plan1C },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
