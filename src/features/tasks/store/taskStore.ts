import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { TaskFormModel, TaskModel } from '../types/task'
import { taskApi } from '@/services/api/taskApi'
import { TASK_INIT } from '../constants/task'

export const useTaskStore = defineStore('task', () => {
  /**
   * タスク一覧
   */
  const tasks: Ref<TaskModel[]> = ref([])

  /**
   * タスク(詳細)
   */
  const currentTaskForm: Ref<TaskFormModel> = ref(TASK_INIT)

  /**
   * タスク一覧取得
   */
  const getTasks = async () => {
    tasks.value = await taskApi.getTasks()
  }

  /**
   * タスク1件取得
   * @param id タスクID
   */
  const getTaskById = async (id: number) => {
    const task = tasks.value.find((task) => task.id === id)
    currentTaskForm.value = task ?? (await taskApi.getTaskById(id))
  }

  return {
    tasks,
    currentTask: currentTaskForm,
    getTasks,
    getTaskById,
  }
})
