import dayjs from 'dayjs'

export const taskLogic = {
  /**
   * 期限切れでないか
   * @param dueDate 期限
   * @returns 期限切れ：true, 切れていない：false
   */
  isOverdue(dueDate: string) {
    return dayjs(dueDate).isBefore(dayjs())
  },

}
