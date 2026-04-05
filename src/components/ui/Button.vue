<template>
    <button :disabled="disabled" :type="type" :form="form" @click="onClick">
        <span class="material-icons">{{ icon }}</span>
        {{ name }}
    </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

const {
    icon = '',
    name = '',
    disabled = false,
    type = 'button',
    form = ''
} = defineProps<{
    icon?: string
    name?: string
    disabled?: boolean
    type?: ButtonHTMLAttributes['type']
    form?: string
}>();

const emit = defineEmits(["onClick"])

const onClick = () => {
    emit("onClick");
}
</script>

<style lang="css" scoped></style>