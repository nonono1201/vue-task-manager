<template>
  <ErrorMessage />
  <v-container>
    <v-card class="pa-5">
      <TaskForm @hasError="onFormErrorChange" @onSubmit="submit" />
      <div class="d-flex justify-space-between">
        <v-btn prepend-icon="mdi-undo" @click="back">
          {{ BUTTON_LABEL.BACK }}
        </v-btn>
        <v-btn
          prepend-icon="mdi-archive"
          :disabled="saveButtonDisabled"
          type="submit"
          form="task-form"
          color="primary"
        >
          {{ BUTTON_LABEL.SAVE }}
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/taskStore'
import { useRouter } from 'vue-router'
import { BUTTON_LABEL, TASK_INIT } from '../constants/task'
import type { TaskFormType } from '../types/task'

const router = useRouter()
const store = useTaskStore()

// 更新ボタン活性・非活性
const saveButtonDisabled = ref(false)

// formのエラー状態が変わったとき
const onFormErrorChange = (isFormError: boolean) => {
  saveButtonDisabled.value = isFormError
}

// 戻る
const back = () => {
  router.push({ name: 'task.list' })
}

// 更新
const submit = (value: TaskFormType) => {
  store.registTask(value)
  router.push({ name: 'task.list' })
}
onBeforeMount(() => {
  store.setTaskForm(TASK_INIT)
})
</script>
<style lang="scss" scoped></style>
