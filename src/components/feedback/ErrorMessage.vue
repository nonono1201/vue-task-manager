<template>
  <div v-for="message in commonStore.errorMessage">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/store/commonStore'

const commonStore = useCommonStore()
</script>
