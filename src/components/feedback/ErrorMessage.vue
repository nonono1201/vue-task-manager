<template>
  <div v-for="message in commonStore.errorMessage">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/commonStore'

const commonStore = useCommonStore()
</script>
