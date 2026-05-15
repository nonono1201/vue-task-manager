<template>
  <BaseDialog v-model:is-open="isOpen" title="確認">
    <template #default>
      {{ props.message }}
    </template>
    <template #footer>
      <BaseButton :disabled="false" :variant="BUTTON_VARIANT.SECONDARY" @click="isOpen = false">
        キャンセル
      </BaseButton>
      <BaseButton :disabled="false" :variant="BUTTON_VARIANT.PRIMARY" @click="ok"> OK </BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseButton, { BUTTON_VARIANT } from '../button/BaseButton.vue'; 
import BaseDialog from './BaseDialog.vue';

const isOpen = defineModel<boolean>('isOpen')
const props = defineProps<{
  message: string
}>()
const emit = defineEmits<{
  (e: 'ok'): void
}>()

const ok = () => {
  emit('ok')
}
</script>
