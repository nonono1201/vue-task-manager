import { TaskSchema, TasksSchema, type Task } from './schema'

/**
 * タスク一覧(mock)
 */
const mockTasks: Task[] = [
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
}
