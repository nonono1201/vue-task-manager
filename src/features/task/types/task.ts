/** ステータス */
export const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
} as const

export type Status = typeof STATUS[keyof typeof STATUS]

/** ステータス(フィルター用) */
export const TASK_FILTER_STATUS = {
  ALL: 'all',
  ...STATUS,
} as const

export type TaskFilterStatus =
  typeof TASK_FILTER_STATUS[keyof typeof TASK_FILTER_STATUS]
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
