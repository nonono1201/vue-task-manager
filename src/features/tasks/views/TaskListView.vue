<template>
    <h1>タスク一覧</h1>
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
import type { TaskModel } from '@/features/tasks/types/task';
import { computed, onBeforeMount, ref, type Ref } from 'vue';
import { BUTTON_LABEL, HEADERS, STATUS } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import { useTaskStore } from '../store/taskStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useTaskStore();

// タスク一覧
const tasks: Ref<TaskModel[]> = computed(() => store.tasks);


// 詳細
const onDetail = (id: number) => {
    router.push({ name: 'task.detail', params: { id: id } })
}

// 編集
const onEdit = (id: number) => {
    router.push({ name: 'task.update', params: { id: id } })
}

// 削除
const onDelete = (id: number) => {
    // TODO 削除処理
}

// 追加
const onAdd = () => {
    router.push({ name: 'task.regist' })

}

onBeforeMount(() => {
    // 一覧情報を取得
    store.getTasks();
})
</script>

<style lang="sass"></style>
