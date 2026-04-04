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
                    <Button icon="visibility" :name="BUTTON_LABEL.DETAIL" @on-click="onDetail(row.id)" />
                    <Button icon="edit" :name="BUTTON_LABEL.EDIT" @on-click="onEdit(row.id)" />
                    <Button icon="delete" :name="BUTTON_LABEL.DELETE" @on-click="onDelete(row.id)" />
                </td>
                <td>{{ row.title }}</td>
                <td>
                    {{ row.completed ? STATUS.COMPLETED : STATUS.PENDING }}
                </td>
                <td>{{ row.dueDate.toLocaleDateString('ja-JP') }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import type { Task } from '@/features/tasks/types/task';
import { computed, onBeforeMount, ref, type Ref } from 'vue';
import { BUTTON_LABEL, HEADERS, STATUS } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import { useTaskStore } from '../store/taskStore';

const store = useTaskStore();

// タスク一覧
const tasks: Ref<Task[]> = computed(() => store.tasks);


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

onBeforeMount(() => {
    // 一覧情報を取得
    store.getTasks();
})
</script>

<style lang="sass"></style>
