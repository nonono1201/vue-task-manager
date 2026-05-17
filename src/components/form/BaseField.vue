<template>
  <div class="flex">
    <div class="w-30 flex items-center">
      <label>
        {{ props.label }}
      </label>
      <div v-if="props.required" class="text-xs">(必須)</div>
    </div>
    <!-- input item -->
     <div>
    <slot />
    <div class="text-accent">{{ props.errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  required?: boolean
  errorMessage?: string
}>()
</script>
