<template>
    <button :disabled="props.disabled" @click="onClick">
        <span class="material-icons">{{ props.icon }}</span>
        {{ props.name }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit= defineEmits(["onClick"])

const onClick = () => {
    emit("onClick");
}
</script>

<style lang="css" scoped>
</style>