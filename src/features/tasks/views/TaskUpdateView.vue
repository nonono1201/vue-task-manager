<template>
    <h1>タスク更新</h1>
    <TaskForm :initialValues="task" @hasError="onFormErrorChange" @onSubmit="onSubmit"/>
    <Button icon="arrow_back" :name="BUTTON_LABEL.BACK" @on-click="onBack()" />
    <Button icon="save" form="task-form" :name="BUTTON_LABEL.SAVE" :disabled="saveButtonDisabled" type="submit" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTaskStore } from '../store/taskStore';
import { useRoute, useRouter } from 'vue-router';
import { BUTTON_LABEL, TASK_INIT } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import type { TaskFormType } from '../types/task';

const route = useRoute();
const router = useRouter();
const store = useTaskStore();

// タスクID
const id = route.params.id;

// タスク情報
const task = ref(TASK_INIT);

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
    console.log('実行')
    store.updateTask({...value, id: Number(id)});
    router.push({ name: 'task.list' })
}

onBeforeMount(() => {
    if (!id || Number.isNaN(id)) {
        // TODO エラーメッセージ
    } else {
        store.getTaskById(Number(id));
        task.value = store.currentTask;
    }


})

</script>