<template>
<dialog :isOpen="isOpen">
  <slot />
</dialog>
</template>
<script setup lang="ts">
const { isOpen } = defineProps<{ isOpen: boolean }>();
</script>
