import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const TOTAL_DAYS = 56

export const useMarathonStore = defineStore('marathon', () => {
  const stored = JSON.parse(localStorage.getItem('vis-marathon') || '{}')

  const startDate = ref(stored.startDate || new Date().toISOString().split('T')[0])

  // dailyReports: { 'YYYY-MM-DD': { studied: '', built: '', stuck: '', tomorrow: '', checkpointReflection: '' } }
  const dailyReports = ref(stored.dailyReports || {})

  // dailyPlans: { 'YYYY-MM-DD': string }
  const dailyPlans = ref(stored.dailyPlans || {})

  watch([startDate, dailyReports, dailyPlans], () => {
    localStorage.setItem('vis-marathon', JSON.stringify({
      startDate: startDate.value,
      dailyReports: dailyReports.value,
      dailyPlans: dailyPlans.value,
    }))
  }, { deep: true })

  const currentDay = computed(() => {
    const now = Date.now()
    const start = new Date(startDate.value).getTime()
    const diff = Math.floor((now - start) / (24 * 3600 * 1000)) + 1
    return Math.max(1, Math.min(diff, TOTAL_DAYS))
  })

  const progressPct = computed(() => (currentDay.value / TOTAL_DAYS) * 100)

  const daysRemaining = computed(() => Math.max(0, TOTAL_DAYS - currentDay.value + 1))

  function getDayKey(dayNumber) {
    const d = new Date(startDate.value)
    d.setDate(d.getDate() + dayNumber - 1)
    return d.toISOString().split('T')[0]
  }

  function saveReport(dayNumber, report) {
    const key = getDayKey(dayNumber)
    dailyReports.value[key] = { ...dailyReports.value[key], ...report }
  }

  function savePlan(dayNumber, planText) {
    const key = getDayKey(dayNumber)
    dailyPlans.value[key] = planText
  }

  function getReport(dayNumber) {
    return dailyReports.value[getDayKey(dayNumber)] || {}
  }

  function getPlan(dayNumber) {
    return dailyPlans.value[getDayKey(dayNumber)] || ''
  }

  function isReportFilled(dayNumber) {
    const r = getReport(dayNumber)
    return !!(r.studied && r.built && r.stuck && r.tomorrow)
  }

  return {
    startDate,
    dailyReports,
    dailyPlans,
    currentDay,
    progressPct,
    daysRemaining,
    getDayKey,
    saveReport,
    savePlan,
    getReport,
    getPlan,
    isReportFilled,
  }
})
