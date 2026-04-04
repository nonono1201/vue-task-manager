<template>
    <title>タスク一覧</title>
    <Button icon="add" :name="BUTTON_LABEL.ADD" @on-click="onAdd" />
    <table>
        <thead>
            <th v-for="header in HEADERS">
                {{ header }}
            </th>
        </thead>
        <tbody>
            <tr v-for="row in tasks">
                <td>
                    <Button icon="visibility" :name="BUTTON_LABEL.DETAIL" :disabled="buttonDisabled" @on-click="onDetail(row.id)" />
                    <Button icon="edit" :name="BUTTON_LABEL.EDIT"  :disabled="buttonDisabled" @on-click="onEdit(row.id)" />
                    <Button icon="delete"  :name="BUTTON_LABEL.DELETE"  :disabled="buttonDisabled" @on-click="onDelete(row.id)" />
                </td>
                <td>{{ row.title }}</td>
                <td>
                    {{ row.completed ? STATUS.COMPLETED : STATUS.PENDING }}
                </td>
                <td>{{ row.dueDate }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import type { Task } from '@/features/tasks/types/task';
import { computed, ref, type Ref } from 'vue';
import { BUTTON_LABEL, HEADERS, STATUS } from '../constants/task';
import Button from '@/components/ui/Button.vue';

const buttonDisabled: Ref<boolean> = ref(false);

const tasks: Ref<Task[]> = computed(() =>
    [{
        id: 1,
        title: 'タスク名',
        completed: false,
        dueDate: '2026-12-12',
    }]
)


// 詳細
const onDetail = (id: number) => {
    // TODO 詳細画面へ遷移
}

// 編集
const onEdit = (id: number) => {
    // TODO 編集画面へ遷移
}

// 削除
const onDelete = (id: number) => {
    // TODO 削除処理
}

// 追加
const onAdd = (id: number) => {
    // TODO 登録画面へ遷移

}
</script>

<style></style>
