<template>
  <BaseDialog v-model:is-open="isOpen" :title="props.title">
    <template #default>
      <form @submit="onSubmit">
        <div class="flex flex-col justify-center gap-8">
          <BaseField :label="FORM_LABEL.TITLE" required :error-message="title.errorMessage.value">
            <TextareaField v-model="title.value.value" />
          </BaseField>
          <BaseField :label="FORM_LABEL.STATUS">
            <SelectField v-model="status.value.value" :options="STATUSES" />
          </BaseField>
          <BaseField :label="FORM_LABEL.DUE_DATE">
            <DateField v-model="dueDate.value.value" />
          </BaseField>
        </div>
      </form>
    </template>
    <template #footer>
      <BaseButton :disabled="false" :variant="BUTTON_VARIANT.SECONDARY" @click="isOpen = false">
        キャンセル
      </BaseButton>
      <BaseButton :disabled="false" :variant="BUTTON_VARIANT.PRIMARY" @click="onSubmit">
        保存
      </BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseField from '@/components/BaseField.vue'
import { FORM_LABEL } from '../constants/task'
import { STATUSES, type TaskForm } from '../types/task'
import { useForm, useField } from 'vee-validate'
import { watch } from 'vue'
import BaseDialog from '@/components/BaseDialog.vue'
import SelectField from '@/components/input/SelectField.vue'
import DateField from '@/components/DateField.vue'
import BaseButton, { BUTTON_VARIANT } from '@/components/BaseButton.vue'
import TextareaField from '@/components/TextareaField.vue'

const isOpen = defineModel<boolean>('isOpen')
const model = defineModel<TaskForm>()
const props = defineProps<{
  title: string
}>()
const emit = defineEmits<{
  (e: 'onSubmit', value: TaskForm): void
  (e: 'hasError', value: boolean): void
}>()

const { handleSubmit, resetForm, meta } = useForm({
  initialValues: model.value,
})
const title = useField<string>('title', 'required|max:50', {
  label: FORM_LABEL.TITLE,
})
const status = useField<string>('status')
const dueDate = useField<string>('dueDate')

// フォーム送信が成功した場合の処理
const onSubmit = handleSubmit((values) => {
  emit('onSubmit', values as TaskForm)
  
  // モーダルを閉じる
  isOpen.value = false
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
  () => model.value,
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
