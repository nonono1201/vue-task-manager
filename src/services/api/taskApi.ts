import { max } from 'date-fns'
import { TaskSchema, TasksSchema, type Task, type TaskRegist } from './schema'

/**
 * タスク一覧(mock)
 */
let mockTasks: Task[] = [
  {
    id: 1,
    title: 'タスク名1',
    dueDate: new Date('2026-04-01'),
    completed: true,
  },
  {
    id: 2,
    title: 'タスク名2',
    dueDate: new Date('2026-04-04'),
    completed: false,
  },
]

export const taskApi = {
  /**
   * 一覧情報取得
   * @returns タスク一覧
   */
  getTasks: async (): Promise<Task[]> => {
    // 疑似API呼び出し：mockTasksを返す
    await new Promise((r) => setTimeout(r, 200))
    return TasksSchema.parse(mockTasks)
  },

  /**
   * 詳細情報取得
   * @param id タスクID
   * @returns タスク
   */
  getTaskById: async (id: number): Promise<Task> => {
    // 疑似API呼び出し：mockTasksから一致するidの情報を返す
    await new Promise((r) => setTimeout(r, 200))
    return TaskSchema.parse(mockTasks[0])
  },

  /**
   * 登録
   * @param input 登録情報
   */
  regist: async (input: TaskRegist) => {
    // 疑似API呼び出し：mockTasksに追加する
    await new Promise((r) => setTimeout(r, 200))
    const maxId = mockTasks.reduce((max, task) => Math.max(max, task.id), -Infinity)
    const newTask: Task = {
      ...input,
      id: maxId + 1,
    }
    mockTasks = [...mockTasks, newTask]
  },

  /**
   * 更新
   * @param input 更新情報
   */
  update: async (input: Task) => {
    // 疑似API呼び出し：一致するidのtaskを更新
    await new Promise((r) => setTimeout(r, 200))
    const taskIndex = mockTasks.findIndex((task) => task.id === input.id)
    if (taskIndex === -1) {
      // TODO エラー処理
    }
    mockTasks = mockTasks.map((task) => (task.id === input.id ? input : task))
  },

  /**
   * 削除
   * @param id タスクID
   */
  delete: async (id: number) => {
    // 疑似API呼び出し：一致するidのtaskを削除
    await new Promise((r) => setTimeout(r, 200))
        const taskIndex = mockTasks.findIndex((task) => task.id === id)
    if (taskIndex === -1) {
      // TODO エラー処理
    }
    mockTasks.splice(taskIndex, 1);
  },
}
