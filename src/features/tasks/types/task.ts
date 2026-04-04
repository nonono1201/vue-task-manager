/**
 * タスク(フォーム用)
 */
export interface TaskFormModel {
  title: string
  dueDate: Date
  completed: boolean
}

/**
 * タスク
 */
export interface TaskModel extends TaskFormModel {
  id: number
}
