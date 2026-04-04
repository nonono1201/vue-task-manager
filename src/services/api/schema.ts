import { z } from 'zod'

/**
 * タスク(新規登録)
 */
export const TaskRegistSchema = z.object({
  title: z.string(),
  dueDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  completed: z.boolean(),
})
export type TaskRegist = z.infer<typeof TaskRegistSchema>

/**
 * タスク
 */
export const TaskSchema = TaskRegistSchema.extend({
  id: z.number(),
})
export type Task = z.infer<typeof TaskSchema>

/**
 * タスク一覧
 */
export const TasksSchema = z.array(TaskSchema)
