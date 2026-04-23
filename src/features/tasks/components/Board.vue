<template>
  <div :class="boardClass">
    <div class="text-center text-text-inverse">
      {{ STATUS_LABEL[props.status] }}
    </div>
    <div v-if="isEmpty" class="text-text-secondary text-center bg-background-subtle/50 p-8 rounded-xl">
      {{ STATUS_LABEL[props.status] }}のタスクはありません
    </div>
    <div v-else v-for="task in props.tasks">
        <Card :title="task.title" :due-date="task.dueDate"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import type { Status, Task } from '../types/task';
import { computed } from 'vue';
import { STATUS_LABEL } from '../constants/task';

const props = defineProps<{ 
    status: Status;
    tasks: Task[]
}>()

const boardClass = computed(() => [
  'w-88 px-4 py-6 flex flex-col gap-4 rounded-tl-2xl rounded-tr-2xl',
  statusClass[props.status]
])
const statusClass: Record<Status, string> = {
  todo: 'bg-status-todo',
  doing: 'bg-status-doing',
  done: 'bg-status-done',
}

const isEmpty = computed(() => props.tasks.length === 0)


</script>
