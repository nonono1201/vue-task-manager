
import type { Option } from '@/components/form/SelectField.vue'
import { TASK_FILTER_STATUS, type TaskForm } from '../types/task'

/** フォームのラベル */
export const FORM_LABEL = {
  TITLE: 'タスク名',
  STATUS: 'ステータス',
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

export const STATUS_OPTIONS: Option[] = [
  { key: TASK_FILTER_STATUS.TODO, label: '未着手' },
  { key: TASK_FILTER_STATUS.DOING, label: '着手' },
  { key: TASK_FILTER_STATUS.DONE, label: '完了' },
] as const

export const TASK_FILTER_STATUS_OPTIONS: Option[] = [
  { key: TASK_FILTER_STATUS.ALL, label: '全部' },
  ...STATUS_OPTIONS
] as const

