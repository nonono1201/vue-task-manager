/**
 * タスク(フォーム用)
 */
export type TaskFormType = {
  title: string
  dueDate: Date
  completed: boolean
}

/**
 * タスク
 */
export type TaskType = TaskFormType & {
  id: number
}
