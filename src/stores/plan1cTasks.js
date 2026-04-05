import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const usePlan1cTasksStore = defineStore('plan1cTasks', () => {
  const stored = JSON.parse(localStorage.getItem('vis-plan1c') || '{}')

  // subtasksDone: { 'day-N': { taskIndex: boolean } }
  const subtasksDone = ref(stored.subtasksDone || {})

  // reportFilled: { 'day-N': boolean }
  const reportFilled = ref(stored.reportFilled || {})

  watch([subtasksDone, reportFilled], () => {
    localStorage.setItem('vis-plan1c', JSON.stringify({
      subtasksDone: subtasksDone.value,
      reportFilled: reportFilled.value,
    }))
  }, { deep: true })

  function toggleSubtask(dayNumber, taskIndex) {
    const key = `day-${dayNumber}`
    if (!subtasksDone.value[key]) subtasksDone.value[key] = {}
    subtasksDone.value[key][taskIndex] = !subtasksDone.value[key][taskIndex]
  }

  function isSubtaskDone(dayNumber, taskIndex) {
    const key = `day-${dayNumber}`
    return !!(subtasksDone.value[key] && subtasksDone.value[key][taskIndex])
  }

  function setReportFilled(dayNumber, value) {
    reportFilled.value[`day-${dayNumber}`] = value
  }

  function isReportFilled(dayNumber) {
    return !!reportFilled.value[`day-${dayNumber}`]
  }

  return {
    subtasksDone,
    reportFilled,
    toggleSubtask,
    isSubtaskDone,
    setReportFilled,
    isReportFilled,
  }
})
