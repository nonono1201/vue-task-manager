/** ステータス */
export const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done'
} as const
export type Status =
  typeof STATUS[keyof typeof STATUS]

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

/** 一覧のヘッダー */
export type ListHeader = {
  align: string,
  label: string,
}
