import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import type { Task } from '../types/task';
import { taskApi } from '@/services/api/taskApi';

export const useTaskStore = defineStore('task', () => {
  const tasks:Ref<Task[]> = ref([]);

  const getTasks = async() => {
    tasks.value = await taskApi.getTasks()
  }

  return {
    tasks,
    getTasks
  };
});