<template>
    <h1>タスク登録</h1>
    <TaskForm :initialValues="TASK_INIT" @hasError="onFormErrorChange" @onSubmit="onSubmit" />
    <Button icon="arrow_back" :name="BUTTON_LABEL.BACK" @on-click="onBack()" />
    <Button icon="save" form="task-form" :name="BUTTON_LABEL.SAVE" :disabled="saveButtonDisabled" type="submit"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTaskStore } from '../store/taskStore';
import { useRouter } from 'vue-router';
import { BUTTON_LABEL, TASK_INIT } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import type { TaskFormType } from '../types/task';

const router = useRouter();
const store = useTaskStore();

// 更新ボタン活性・非活性
const saveButtonDisabled = ref(false)

// formのエラー状態が変わったとき
const onFormErrorChange = (isFormError: boolean) => {
    saveButtonDisabled.value = isFormError;
}

// 戻る
const onBack = () => {
    router.push({ name: 'task.list' })
}

// 更新
const onSubmit = (value: TaskFormType) => {
    store.registTask(value);
    router.push({ name: 'task.list' })
}
</script>