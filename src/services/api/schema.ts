import type { Status } from "@/features/task/types/task"

/**
 * タスク(新規登録)
 */
export interface TaskRegistSchema {
  title: string
  dueDate: string
  status: Status
}

/**
 * タスク
 */
export interface TaskSchema extends TaskRegistSchema {
  id: number
}