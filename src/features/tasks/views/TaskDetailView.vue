<template>
    <h1>タスク詳細</h1>
    <TaskForm v-model="task" :disabled="true" />
    <Button icon="arrow_back" :name="BUTTON_LABEL.BACK" @on-click="onBack()" />
    <Button icon="edit" :name="BUTTON_LABEL.EDIT" @on-click="onEdit()" />
    <Button icon="delete" :name="BUTTON_LABEL.DELETE" @on-click="onDelete()" />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTaskStore } from '../store/taskStore';
import { useRoute, useRouter } from 'vue-router';
import { BUTTON_LABEL } from '../constants/task';
import Button from '@/components/ui/Button.vue';

const route = useRoute();
const router = useRouter();

const store = useTaskStore();
const id = route.params.id;
const task = computed(() => store.currentTask)

// 編集
const onBack = () => {
    router.push({ name: 'task' })
}

// 編集
const onEdit = () => {
    router.push({ name: 'task.detail', params: { id: id } })
}

// 削除
const onDelete = () => {
    // TODO 削除処理
}

onBeforeMount(() => {
    if (!id || Number.isNaN(id)) {
        // TODO エラーメッセージ
    } else {
        store.getTaskById(Number(id));
    }


})

</script>