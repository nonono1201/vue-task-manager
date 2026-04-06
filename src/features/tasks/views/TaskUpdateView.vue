<template>
  <ErrorMessage />
  <v-container>
    <v-card class="pa-5">
      <div v-if="store.isLoading" class="text-center">
        <v-progress-circular color="primary" indeterminate />
      </div>
      <div v-else>
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
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/taskStore'
import { useRoute, useRouter } from 'vue-router'
import { BUTTON_LABEL } from '../constants/task'
import type { TaskFormType } from '../types/task'

const route = useRoute()
const router = useRouter()
const store = useTaskStore()

// タスクID
const id = route.params.id

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
  store.updateTask({ ...value, id: Number(id) })
  router.push({ name: 'task.list' })
}

onBeforeMount(() => {
  if (Number.isNaN(id)) {
    router.push({ name: 'error.notfound' })
    return
  }
  store.getTaskFormById(Number(id))
})
</script>
<style lang="scss" scoped></style>
