/** ステータス */
export const STATUSES = [
  { key: 'todo', label: '未着手' },
  { key: 'doing', label: '着手' },
  { key: 'done', label: '完了' }
] as const
export type Status = typeof STATUSES[number]['key']

/** タスク(フォーム用) */
export type TaskForm = {
  title: string
  dueDate: string
  status: Status
}

/** タスク */
export type Task = TaskForm & {
  id: number
}
