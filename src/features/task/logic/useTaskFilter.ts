import { ref, computed, type Ref } from 'vue'
import { TASK_FILTER_STATUS, type Task, type TaskFilterStatus } from '../types/task'

export function useTaskFilter(tasks: Ref<Task[]>) {
  const title = ref('')
  const status = ref<TaskFilterStatus>(TASK_FILTER_STATUS.ALL)

  const filteredTasks = computed(() => {
    const result= tasks.value.filter(task => {
      const matchTitle =
        task.title.toLowerCase().includes(title.value.toLowerCase())

      const matchStatus =
        status.value === TASK_FILTER_STATUS.ALL || task.status === status.value
      return matchTitle && matchStatus
    })
    return result
  })

  return {
    title,
    status,
    filteredTasks,
  }
}