
import type { ListHeader, Status, TaskForm } from '../types/task'

/** フォームのラベル */
export const FORM_LABEL = {
  TITLE: 'タスク名',
  COMPLETED: 'ステータス',
  DUE_DATE: '期日',
}
/** ボタンラベル */
export const BUTTON_LABEL = {
  ADD: '追加',
  DETAIL: '詳細',
  EDIT: '編集',
  DELETE: '削除',
  BACK: '戻る',
  SAVE: '保存',
  CLOSE: '閉じる'
}

/** タスク初期値 */
export const TASK_INIT: TaskForm = {
  title: '',
  dueDate: '',
  status: 'todo'
}

/** ステータスラベル */
export const STATUS_LABEL: Record<Status, string> = {
  todo: '未着手',
  doing: '着手',
  done: '完了'
}
