<template>
  <input
    type="props.type"
    class="w-80 p-2 h-auto border border-secondary"
    v-model="model"
    :readonly="props.readonly"
  />
</template>
<script setup lang="ts">
const model = defineModel<string>()
const props = defineProps<{
  type: string
  readonly?: boolean
}>()

</script>
