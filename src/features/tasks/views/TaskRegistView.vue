<template>
    <h1>タスク登録</h1>
    <TaskForm v-model="task" :disabled="false" />
    <Button icon="arrow_back" :name="BUTTON_LABEL.BACK" @on-click="onBack()" />
    <Button icon="save" :name="BUTTON_LABEL.SAVE" @on-click="onSave()" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTaskStore } from '../store/taskStore';
import { useRouter } from 'vue-router';
import { BUTTON_LABEL, TASK_INIT } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import type { TaskFormModel } from '../types/task';

const router = useRouter();

const store = useTaskStore();
const task: Ref<TaskFormModel> = ref(TASK_INIT);

// 戻る
const onBack = () => {
    router.push({ name: 'task' })
}

// 更新
const onSave = () => {
    // TODO 登録処理
    router.push({ name: 'task' })
}
</script>