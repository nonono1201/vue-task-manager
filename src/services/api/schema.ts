import { z } from 'zod'

/**
 * タスク
 */
export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  dueDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  completed: z.boolean()
})

/**
 * タスク一覧
 */
export const TasksSchema = z.array(TaskSchema)

export type Task = z.infer<typeof TaskSchema>