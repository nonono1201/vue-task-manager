<template>
  <div class="relative">
    <slot />

    <div
      v-if="loading"
      class="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-[1px]"
    >
      <div
        class="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>