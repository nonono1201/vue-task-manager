<template>
    <Form ref="formRef" id="task-form" :initial-values="props.initialValues" :validation-schema="schema"
        @submit="onSubmit">
        <div class="task-form__item">
            <label class="task-form__item-label">{{ FORM_LABEL.TITLE }}：</label>
            <Field name="title" :label="FORM_LABEL.TITLE" type="text" />
            <ErrorMessage name="title" />
        </div>
        <div class="task-form__item">
            <label class="task-form__item-label">{{ FORM_LABEL.CPMPLETED }}：</label>
            <Field name="completed" :label="FORM_LABEL.CPMPLETED" type="checkbox"  :value="true" :unchecked-value="false" />
            <Field name="completed" v-slot="{ value }">
                {{ value ? STATUS.COMPLETED : STATUS.PENDING }}
            </Field>
            <ErrorMessage name=" completed" />
        </div>
        <div class="task-form__item">
            <label class="task-form__item-label">{{ FORM_LABEL.DUE_DATE }}：</label>
            <Field name="dueDate" :label="FORM_LABEL.DUE_DATE" v-slot="{ field }">
                <VueDatePicker v-model="field.value" @update:model-value="field.onChange" />
                <ErrorMessage name="dueDate" />
            </Field>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker';
import { FORM_LABEL, STATUS } from '../constants/task';
import type { TaskFormType } from '../types/task';
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref, watch } from 'vue';

const formRef = ref();
const props = defineProps<{
    // 初期値
    initialValues: TaskFormType
}>()
const emit = defineEmits<{
    (e: 'onSubmit', value: TaskFormType): void
    (e: 'hasError', value: boolean): void
}>()

// バリデーションスキーマ
const schema = {
    title: 'required',
    dueDate: 'required'
}

// Formのバリデーション状態を監視
watch(
    () => !formRef.value?.meta.valid,
    (isValid) => {
        // マウント前(undefined)の場合は false として親に伝える
        emit('hasError', isValid || false);
    }
);

// フォーム送信が成功した場合の処理（親へデータを渡すなど）
const onSubmit = (values: Record<string, any>) => {
    console.log('実行')
    emit('onSubmit', values as TaskFormType);
};
</script>

<style lang="sass" scoped>
</style>