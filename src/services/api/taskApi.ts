import { TasksSchema, type Task } from './schema'

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
  getTasks: async (): Promise<Task[]> => {
    // 疑似API呼び出し：mockTasksを返す
    await new Promise((r) => setTimeout(r, 200))
    return TasksSchema.parse(mockTasks)
  },
}
