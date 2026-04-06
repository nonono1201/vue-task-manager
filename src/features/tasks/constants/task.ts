import type { DataTableHeader } from 'vuetify'
import type { ListHeader, TaskFormType } from '../types/task'

/** フォームのラベル */
export const FORM_LABEL = {
  TITLE: 'タスク名',
  COMPLETED: 'ステータス',
  DUE_DATE: '期日',
}

/** 一覧のヘッダー */
export const TABLE_HEADERS: DataTableHeader[] = [
  {
    title: 'FORM_LABEL.TITLE',
    key: 'title',
    align: 'start',
  },
  {
    title: 'FORM_LABEL.COMPLETED',
    key: 'completed',
  },
  {
    title: 'FORM_LABEL.DUE_DATE',
    key: 'dueDate',
  },
  {
    title: 'アクション',
    key: 'actions',
    align: 'end',
    sortable: false,
  },
]

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

/** タスクの状態 */
export const STATUS = {
  COMPLETED: '完了',
  PENDING: '未完了',
}

/** タスク初期値 */
export const TASK_INIT: TaskFormType = {
  title: '',
  dueDate: '',
  completed: false,
}
