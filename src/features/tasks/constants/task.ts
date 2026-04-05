import type { TaskFormType } from "../types/task";

/** フォームのラベル */
export const FORM_LABEL = {
    TITLE: 'タスク名',
    CPMPLETED: 'ステータス',
    DUE_DATE: '期日'
}

/** 一覧のヘッダー */
export const HEADERS:string[] = ['', FORM_LABEL.TITLE, FORM_LABEL.CPMPLETED, FORM_LABEL.DUE_DATE];

/** ボタンラベル */
export const BUTTON_LABEL = {
    ADD: '追加',
    DETAIL: '詳細',
    EDIT: '編集',
    DELETE: '削除',
    BACK: '戻る',
    SAVE: '保存'
};

/** タスクの状態 */
export const STATUS = {
    COMPLETED:'完了',
    PENDING:'未完了'
}

/** タスク初期値 */
export const TASK_INIT:TaskFormType = {
    title: '',
    dueDate: '',
    completed: false
}