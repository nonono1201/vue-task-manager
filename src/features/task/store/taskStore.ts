import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { type TaskForm, type Task, type Status } from '../types/task'
import { taskApi } from '@/services/api/taskApi'
import { NotFoundError } from '@/errors'

export const useTaskStore = defineStore('task', () => {
  /** タスク一覧 */
  const tasks: Ref<Task[]> = ref([])

  /** ローディング中か */
  const isLoading: Ref<boolean> = ref(false)

  /** ドラッグ中か */
  const isDragging: Ref<boolean> = ref(false)

  /**
   * タスク一覧取得
   */
  const getTasks = async () => {
    tasks.value = await taskApi.getTasks()
  }

  /**
   * ステータス毎のタスク取得
   * @param status ステータス
   * @returns ステータス毎のタスク
   */
  const byStatus = (status: Status) => {
    return tasks.value.filter((task) => task.status === status)
  }

  /**
   * タスク移動
   * @param id タスクid
   * @param newStatus 更新後ステータス
   */
  const moveTask = async (id: number, newStatus: Status) => {
    const task = tasks.value.find((task) => task.id === id)
    if (task) {
      task.status = newStatus
      await updateTask(task)
    }
  }

  /**
   * idに紐づくタスク(入力情報)を取得
   * @param id タスクID
   */
  const findTaskById = async (id: number) => {
    isLoading.value = true
    try {
      const result = tasks.value.find((task) => task.id === id)
      if (!result) {
        throw new NotFoundError('タスクが見つかりません')
      }
      return result
    } finally {
      isLoading.value = false
    }
  }

  /**
   * タスク登録
   * @param input 登録情報
   */
  const registTask = async (input: TaskForm) => {
    await taskApi.regist(input)
    getTasks()
  }

  /**
   * タスク更新
   * @param input 更新情報
   */
  const updateTask = async (input: Task) => {
    await taskApi.update(input)
    getTasks()
  }

  /**
   * タスク削除
   * @param id タスクID
   */
  const deleteTask = async (id: number) => {
    await taskApi.delete(id)
    await getTasks()
  }

  /**
   * ローディング中かの設定
   * @param flg 設定値
   */
  const setIsLoading = (flg: boolean) => {
    isLoading.value = flg
  }

  /**
   * ドラッグ中かの設定
   * @param flg 設定値
   */
  const setIsDragging = (flg: boolean) => {
    isDragging.value = flg
  }

  return {
    tasks,
    isLoading,
    isDragging,
    getTasks,
    byStatus,
    moveTask,
    getTaskFormById: findTaskById,
    registTask,
    updateTask,
    deleteTask,
    setIsLoading,
    setIsDragging,
  }
})
