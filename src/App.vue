<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useCommonStore } from './stores/commonStore'
import { BusinessError, NotFoundError } from './errors';
import { useRouter } from 'vue-router';

const commonStore = useCommonStore();
const router = useRouter();

const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  const error = event.reason;
  if (error instanceof NotFoundError) {
    // NotFoundError が投げられたら、一律で404ページへ飛ばす
    router.replace({ name: 'error.notfound' });
    event.preventDefault(); 
  } else if (error instanceof BusinessError){
    const msg = error.message??  '予期せぬエラーが発生しました。'
    commonStore.setMessage(msg)
  }
}

onMounted(() => {
  window.addEventListener('unhandledrejection', handleUnhandledRejection)
})

onUnmounted(() => {
  window.removeEventListener('unhandledrejection', handleUnhandledRejection)
})
</script>

<template>
  <div v-if="commonStore.errorMessage" v-for="message in commonStore.errorMessage" class="error-toast">
    {{ message }}
  </div>
  <router-view />
</template>

<style scoped></style>
