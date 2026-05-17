import dayjs from 'dayjs'
import type { Status, Task } from '../types/task'

export const taskLogic = {
  /**
   * 期限切れでないか
   * @param dueDate 期限
   * @returns 期限切れ：true, 切れていない：false
   */
  isOverdue(dueDate: string) {
    return dayjs(dueDate).isBefore(dayjs())
  },

  byStatus(status: Status, tasks: Task[]) {
 return tasks.filter((task) => task.status === status)
  }

}
