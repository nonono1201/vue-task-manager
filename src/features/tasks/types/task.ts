/**
 * タスク(フォーム用)
 */
export type TaskFormType = {
  title: string
  dueDate: string
  completed: boolean
}

/**
 * タスク
 */
export type TaskType = TaskFormType & {
  id: number
}

/**
 * 一覧のヘッダー
 */
export type ListHeader = {
  align: string,
  label: string,
}
