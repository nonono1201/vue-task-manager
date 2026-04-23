<template>
  <div class="bg-background-subtle w-80 px-4 py-8 rounded-xl">
    <div class="w-72 mb-8 flex justify-between">
      <div w-64 line-clamp-3>{{ props.title }}</div>
      <BaseButton :disabled="false" :variant="BUTTON_VARIANT.GHOST" :size="BUTTON_SIZE.SM">
        <span class="material-icons">more_vert</span>
      </BaseButton>
    </div>
    <div>
      <div class="text-xs text-text-secondary">期限: {{ props.dueDate.replace(/-/g, "/") }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton, { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/BaseButton.vue'

const props = defineProps<{ title: string; dueDate: string }>()
</script>
