import { BusinessError, NotFoundError } from '@/errors'
import type { TaskRegistSchema, TaskSchema } from './schema'
import dayjs from 'dayjs'
import { formatStorageDate } from '@/utils/date'

/**
 * タスク一覧(mock)
 */
let defaultTasks: TaskSchema[] = [
  {
    id: 1,
    title: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーで',
    dueDate: formatStorageDate(dayjs().add(1, 'month').toDate()),
    status: 'todo',
  },
  {
    id: 2,
    title: 'タスク名2',
    dueDate: formatStorageDate(dayjs().add(1, 'month').toDate()),
    status: 'doing',
  },
  {
    id: 3,
    title: 'タスク名3',
    dueDate: formatStorageDate(new Date()),
    status: 'doing',
  },
]

const STORAGE_KEY = 'task_v1'

export const taskApi = {
  /**
   * 一覧情報取得
   * @returns タスク一覧
   */
  getTasks: async (): Promise<TaskSchema[]> => {
    // 疑似API呼び出し
    await new Promise((r) => setTimeout(r, 200))

    // localStorageから取得
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    // ない場合は初期値
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTasks))
    return defaultTasks
  },

  /**
   * 登録
   * @param input 登録情報
   */
  regist: async (input: TaskRegistSchema) => {
    // 疑似API呼び出し
    await new Promise((r) => setTimeout(r, 200))

    // 全件取得
    const tasks = await taskApi.getTasks()

    // idに最大値を設定
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0)
    const newTask: TaskSchema = {
      ...input,
      id: maxId + 1,
    }

    // localStorageへ保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...tasks, newTask]))
  },

  /**
   * 更新
   * @param input 更新情報
   */
  update: async (input: TaskSchema) => {
    // 疑似API呼び出し
    await new Promise((r) => setTimeout(r, 200))

    // 全件取得
    const tasks = await taskApi.getTasks()

    // 存在チェック
    const taskIndex = tasks.findIndex((task) => task.id === input.id)
    if (taskIndex === -1) {
      throw new BusinessError('更新対象のタスクが見つかりませんでした。')
    }

    // localStorageへ保存
    const result = tasks.map((task) => (task.id === input.id ? input : task))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result))
  },

  /**
   * 削除
   * @param id タスクID
   */
  delete: async (id: number) => {
    // 疑似API呼び出し
    await new Promise((r) => setTimeout(r, 200))
    // 全件取得
    const tasks = await taskApi.getTasks()

    // 存在チェック
    const taskIndex = tasks.findIndex((task) => task.id === id)
    if (taskIndex === -1) {
      throw new BusinessError('削除対象のタスクが見つかりませんでした。')
    }

    // localStorageへ保存
    const result = tasks.filter((task) => task.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result))
  },
}
