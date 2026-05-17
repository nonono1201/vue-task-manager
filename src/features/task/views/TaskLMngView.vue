<template>
  <ErrorMessage />
  <LoadingOverlay :loading="store.isLoading" />
  <div class="h-24 w-272 mx-auto flex items-center justify-between">
    <div class="flex gap-10">
      <BaseField :label="FORM_LABEL.TITLE">
        <InputField v-model="title" type="text" />
      </BaseField>
      <BaseField :label="FORM_LABEL.STATUS">
        <SelectField v-model="status" :options="TASK_FILTER_STATUS_OPTIONS" :size="INPUT_SIZE.SM" />
      </BaseField>
    </div>
    <div>
      <BaseButton :disabled="false" @click="isRegistFormOpen = true" class="bg-primary">
        <span class="material-icons">add</span>タスク追加
      </BaseButton>
    </div>
  </div>
  <!-- ステータス毎に列を生成 -->
  <div class="flex gap-4 justify-center">
    <div v-for="status in STATUS">
      <Board
        :status="status"
        :tasks="filteredTasks.filter(t => t.status === status)"
        @on-update="openUpdateFormModal"
        @on-delete="removeConfirm"
      />
    </div>
  </div>
  <!-- 登録ダイアログ -->
  <TaskFormModal
    v-model="registTaskInfo"
    v-model:is-open="isRegistFormOpen"
    title="登録"
    @on-submit="regist"
  />
  <!-- 更新ダイアログ -->
  <TaskFormModal
    v-model="updateTaskInfo"
    v-model:is-open="isUpdateFormOpen"
    title="更新"
    @on-submit="update"
  />
  <!-- 削除確認 -->
  <ConfirmDialog
    v-model:is-open="isRemoveConfirmOpen"
    message="このタスクを削除しますか？"
    @ok="remove"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useTaskStore } from '../store/taskStore'
import ErrorMessage from '@/components/feedback/ErrorMessage.vue'
import Board from '../components/Board.vue'
import BaseButton from '@/components/button/BaseButton.vue'
import { STATUS, type TaskForm } from '../types/task'
import TaskFormModal from '../components/TaskFormModal.vue'
import { FORM_LABEL, TASK_FILTER_STATUS_OPTIONS, TASK_INIT } from '../constants/task'
import ConfirmDialog from '@/components/overlay/ConfirmDialog.vue'
import LoadingOverlay from '@/components/feedback/LoadingOverlay.vue'
import BaseField from '@/components/form/BaseField.vue'
import SelectField, { INPUT_SIZE } from '@/components/form/SelectField.vue'
import InputField from '@/components/form/InputField.vue'
import { storeToRefs } from 'pinia'
import { useTaskFilter } from '../logic/useTaskFilter'

const store = useTaskStore()

// 更新・削除対象タスクID
const targetTaskId = ref()

// フィルター
const { tasks } = storeToRefs(store)
const { title, status, filteredTasks } = useTaskFilter(tasks)

// 追加
const isRegistFormOpen = ref(false)
const registTaskInfo = ref(TASK_INIT)
const regist = async () => {
  store.setIsLoading(true)
  await store.registTask(registTaskInfo.value)
  store.setIsLoading(false)
}

// 更新
const isUpdateFormOpen = ref(false)
const updateTaskInfo = ref(TASK_INIT)
const openUpdateFormModal = async (taskId: number) => {
  updateTaskInfo.value = await store.getTaskFormById(taskId)
  targetTaskId.value = taskId
  isUpdateFormOpen.value = true
}
const update = async (value: TaskForm) => {
  store.setIsLoading(true)
  await store.updateTask({ ...value, id: targetTaskId.value })
  store.setIsLoading(false)
}

// 削除
const isRemoveConfirmOpen = ref(false)
const removeConfirm = (id: number) => {
  isRemoveConfirmOpen.value = true
  targetTaskId.value = id
}
const remove = async () => {
  store.setIsLoading(true)
  await store.deleteTask(targetTaskId.value)
  isRemoveConfirmOpen.value = false
  store.setIsLoading(false)
}

onBeforeMount(() => {
  store.getTasks()
})
</script>

<style lang="scss" scoped></style>
