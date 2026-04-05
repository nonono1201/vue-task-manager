/**
 * タスク(新規登録)
 */
export interface TaskRegistSchema {
  title: string
  dueDate: Date
  completed: boolean
}

/**
 * タスク
 */
export interface TaskSchema extends TaskRegistSchema {
  id: number
}