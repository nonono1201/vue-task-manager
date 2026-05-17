<template>
  <textarea v-model="model" class="w-80 border border-secondary p-2" />
</template>

<script setup lang="ts">
const model = defineModel<string>()
const props = defineProps<{}>()
</script>
