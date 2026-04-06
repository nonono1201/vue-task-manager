import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { TaskFormType, TaskType } from '../types/task'
import { taskApi } from '@/services/api/taskApi'
import { TASK_INIT } from '../constants/task'

export const useTaskStore = defineStore('task', () => {

  /** タスク一覧 */
  const tasks: Ref<TaskType[]> = ref([])

  /** タスク(入力情報) */
  const taskForm: Ref<TaskFormType> = ref(TASK_INIT)

  /** ローディング中か */
  const isLoading: Ref<boolean> = ref(false);

  /**
   * タスク一覧取得
   */
  const getTasks = async () => {
    tasks.value = await taskApi.getTasks()
  }

  /**
   * idに紐づくタスク(入力情報)を取得
   * @param id タスクID
   */
  const getTaskFormById = async (id: number) => {
    isLoading.value =true
    taskForm.value = await taskApi.getTaskById(id)
    isLoading.value = false
  }

  /**
   * タスク(入力情報)を設定
   * @param task タスク
   */
  const setTaskForm = (task: TaskFormType) => {
    taskForm.value = task
  }

  /**
   * タスク登録
   * @param input 登録情報
   */
  const registTask = async (input: TaskFormType) => {
    await taskApi.regist(input);
    getTasks();
  }

    /**
   * タスク更新
   * @param input 更新情報
   */
  const updateTask = async (input: TaskType) => {
    await taskApi.update(input)
     getTasks();
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
    isLoading.value = flg;
  }

  return {
    tasks,
    taskForm,
    isLoading,
    getTasks,
    getTaskFormById,
    setTaskForm,
    registTask,
    updateTask,
    deleteTask,
    setIsLoading
  }
})
