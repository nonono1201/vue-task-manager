<template>
  <Form
    ref="formRef"
    id="task-form"
    :initial-values="store.taskForm"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <div class="task-form__item">
      <div class="task-form__item-label">
        <label class="task-form__required">必須</label>
        <label>{{ FORM_LABEL.TITLE }}：</label>
      </div>
      <Field name="title" :label="FORM_LABEL.TITLE" type="text" />
      <ErrorMessage name="title" />
    </div>
    <div class="task-form__item">
      <div class="task-form__item-label">
        <label>{{ FORM_LABEL.CPMPLETED }}：</label>
      </div>
      <Field
        name="completed"
        :label="FORM_LABEL.CPMPLETED"
        type="checkbox"
        :value="true"
        :unchecked-value="false"
      />
      <Field name="completed" v-slot="{ value }">
        {{ value ? STATUS.COMPLETED : STATUS.PENDING }}
      </Field>
      <ErrorMessage name=" completed" />
    </div>
    <div class="task-form__item">
      <div class="task-form__item-label">
        <label>{{ FORM_LABEL.DUE_DATE }}：</label>
      </div>
      <Field name="dueDate" :label="FORM_LABEL.DUE_DATE" v-slot="{ value, handleChange }">
        <VueDatePicker
          :enable-time-picker="false"
          :model-value="value"
          @update:model-value="handleChange"
          model-type="yyyy-MM-dd"
          :formats="{ input: 'yyyy/MM/dd - HH:mm' }"
          :time-config="{ enableTimePicker: false }"
          auto-apply
        />
        <ErrorMessage name="dueDate" />
      </Field>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { FORM_LABEL, STATUS } from '../constants/task'
import { useTaskStore } from '../store/taskStore'
import type { TaskFormType } from '../types/task'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref, watch } from 'vue'

const formRef = ref()
const store = useTaskStore()
const emit = defineEmits<{
  (e: 'onSubmit', value: TaskFormType): void
  (e: 'hasError', value: boolean): void
}>()

// バリデーションスキーマ
const schema = {
  title: 'required',
}

// Formのバリデーション状態を監視
watch(
  () => !formRef.value?.meta.valid,
  (isValid) => {
    // マウント前(undefined)の場合は false として親に伝える
    emit('hasError', isValid || false)
  },
)

// フォーム送信が成功した場合の処理（親へデータを渡すなど）
const onSubmit = (values: Record<string, any>) => {
  emit('onSubmit', values as TaskFormType)
}

watch(
  () => store.taskForm,
  (newTask) => {
    if (newTask && formRef.value) {
      // resetFormを使うと、Propsの値を新しい「初期値」としてセットし、
      // 編集済みフラグ(meta.dirty)もリセットされます。
      formRef.value.resetForm({
        values: { ...newTask }
      });
    }
  },
  { deep: true},
);
</script>

<style lang="sass" scoped></style>
