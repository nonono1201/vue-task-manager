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

  /**
   * タスク登録
   * @param input 登録情報
   */
  const registTask = async (input: TaskFormModel) => {
    await taskApi.regist(input);
    getTasks();
  }

    /**
   * タスク更新
   * @param input 更新情報
   */
  const updateTask = async (input: TaskModel) => {
    await taskApi.update(input)
     getTasks();
  }

    /**
   * タスク削除
   * @param id タスクID
   */
  const deleteTask = async (id: number) => {
    await taskApi.delete(id)
    getTasks()
  }

  return {
    tasks,
    currentTask: currentTaskForm,
    getTasks,
    getTaskById,
    registTask,
    updateTask,
    deleteTask
  }
})
