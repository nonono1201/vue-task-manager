<template>
  <form id="task-form" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-text-field
          v-model="title.value.value"
          :label="FORM_LABEL.TITLE + '(必須)'"
          :error-messages="title.errorMessage.value"
          required
        />
      </v-row>
      <v-row>
        <v-checkbox v-model="completed.value.value" :label="STATUS.COMPLETED"/>
      </v-row>
      <v-row>
        <v-date-input v-model="dueDate.value.value" :label="FORM_LABEL.DUE_DATE" input-format="yyyy/mm/dd"/>
      </v-row>
    </v-container>
  </form>
</template>

<script setup lang="ts">
import { FORM_LABEL, STATUS } from '../constants/task'
import { useTaskStore } from '../store/taskStore'
import type { TaskFormType } from '../types/task'
import { useForm, useField } from 'vee-validate'
import {  watch } from 'vue'
import { VDateInput } from 'vuetify/labs/VDateInput'

const store = useTaskStore()

const emit = defineEmits<{
  (e: 'onSubmit', value: TaskFormType): void
  (e: 'hasError', value: boolean): void
}>()

const { handleSubmit, resetForm, meta } = useForm({
  initialValues: store.taskForm,
})
const title = useField<string>('title','required',{
  label: FORM_LABEL.TITLE,
})
const completed = useField<boolean>('completed')
const dueDate = useField<string>('dueDate')

// フォーム送信が成功した場合の処理
const onSubmit = handleSubmit((values) => {
  emit('onSubmit', values as TaskFormType)
})

// Formのバリデーション状態を監視
watch(
  () => meta.value.valid,
  (isValid) => {
    // マウント前(undefined)の場合は false として親に伝える
    emit('hasError', !isValid)
  },
)

// フォーム初期値の更新
watch(
  () => store.taskForm,
  (newTask) => {
    if (newTask) {
      resetForm({
        values: { ...newTask },
      })
    }
  },
  { deep: true },
)
</script>

<style lang="scss" scoped></style>
