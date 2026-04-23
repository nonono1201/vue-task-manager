<template>
  <ErrorMessage/>
  <div class="h-24 w-272 mx-auto flex items-center justify-between">
    <div>
      <!-- TODO タスク名検索 -->
      <!-- TODO ステータス -->
    </div>
    <div>
      <BaseButton :disabled="false" @click="add" class="bg-primary">
        タスク追加
      </BaseButton>
    </div>
  </div>
  <!-- ステータス毎に列を生成 -->
   <div class="flex gap-4 justify-center">
  <Board :status="STATUS.TODO" :tasks="todoTasks"/>
  <Board :status="STATUS.DOING" :tasks="doingTasks"/>
  <Board :status="STATUS.DONE" :tasks="doneTasks"/>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useTaskStore } from '../store/taskStore'
import { useRouter } from 'vue-router'
import ErrorMessage from '@/components/ErrorMessage.vue'
import Board from '@/features/tasks/components/Board.vue'
import BaseButton from '@/components/BaseButton.vue'
import { STATUS } from '../types/task'

const router = useRouter()
const store = useTaskStore()

const todoTasks = computed(() => store.getTodoTasks());
const doingTasks = computed(() => store.getDoingTasks());
const doneTasks = computed(() => store.getDoneTasks());


// 削除ダイアログ
const removeDialog = ref(false)

// 編集
const edit = (id: number) => {
  // router.push({ name: 'task.update', params: { id: id } })
}

// 削除
const removeTaskId = ref()
const removeConfirm = (id: number) => {
  removeDialog.value = true
  removeTaskId.value = id
}
const remove = () => {
  store.deleteTask(Number(removeTaskId.value))
  removeDialog.value = false
}

// 追加
const add = () => {
  // router.push({ name: 'task.regist' })
}

onBeforeMount(() => {
  store.getTasks();
})
</script>

<style lang="scss" scoped></style>
