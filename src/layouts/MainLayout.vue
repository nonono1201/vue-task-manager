<template>
  <base-header :title="pageTitle" />
  <router-view />
</template>

<script setup lang="ts">

import BaseHeader from '@/components/BaseHeader.vue';
import { computed, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 現在のルートの meta.title を取得
const pageTitle = computed(() => route.meta.title.toString() ?? '')
</script>

<style lang="scss" scoped></style>
