<template>
    <div class="task-form__title">
        <label>{{ FORM_LABEL.TITLE }}：</label>
        <input type="text" v-model="model.title" :disabled="props.disabled" />
    </div>
    <div class="task-form__title">
        <label>{{ FORM_LABEL.STATUS }}：</label>
        <input type="checkbox" v-model="model.completed" :disabled="props.disabled" />
        {{ model.completed ? STATUS.COMPLETED : STATUS.PENDING }}
    </div>
    <div class="task-form__title">
        <label>{{ FORM_LABEL.DUE_DATE }}：</label>
        <VueDatePicker v-model="model.dueDate" :disabled="props.disabled"/>
    </div>
</template>

<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker';
import { FORM_LABEL, STATUS } from '../constants/task';
import type { TaskFormModel } from '../types/task';

const model = defineModel<TaskFormModel>({ required: true })
const props = defineProps({
    // 活性・非活性
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="sass" scoped>
</style>