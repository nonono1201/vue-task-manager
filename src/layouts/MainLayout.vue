<template>
  <v-app-bar color="primary">
    <v-app-bar-title>{{ pageTitle }}</v-app-bar-title>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 現在のルートの meta.title を取得
const pageTitle = computed(() => route.meta.title ?? '')
</script>

<style lang="scss" scoped></style>
