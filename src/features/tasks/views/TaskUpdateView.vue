<template>
    <h1>タスク更新</h1>
    <TaskForm v-model="task" :disabled="false" />
    <Button icon="arrow_back" :name="BUTTON_LABEL.BACK" @on-click="onBack()" />
    <Button icon="save" :name="BUTTON_LABEL.SAVE" @on-click="onSave()" />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, type Ref } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTaskStore } from '../store/taskStore';
import { useRoute, useRouter } from 'vue-router';
import { BUTTON_LABEL, TASK_INIT } from '../constants/task';
import Button from '@/components/ui/Button.vue';
import type { TaskFormModel } from '../types/task';

const route = useRoute();
const router = useRouter();

const store = useTaskStore();
const id = route.params.id;
const task: Ref<TaskFormModel> = ref(TASK_INIT);

// 戻る
const onBack = () => {
    router.push({ name: 'task' })
}

// 更新
const onSave = () => {
    // TODO 更新処理
    router.push({ name: 'task' })
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