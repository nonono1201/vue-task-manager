import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  dueDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  completed: z.boolean()
})

export const TasksSchema = z.array(TaskSchema)

export type Task = z.infer<typeof TaskSchema>