<template>
  <Dialog :open="isOpen" @close="onBackdropClick">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex w-screen items-center justify-center">
      <DialogPanel
        class="w-134 rounded bg-background-subtle"
        :class="shake ? 'animate-bounce' : ''"
      >
        <base-header :title="props.title">
          <template #right>
            <base-button
              :disabled="false"
              :size="BUTTON_SIZE.SM"
              :variant="BUTTON_VARIANT.GHOST"
              @click="isOpen = false"
            >
              <span class="material-icons">close</span>
            </base-button>
          </template>
        </base-header>
        <div class="p-12">
          <!-- slot: default -->
          <slot />
        </div>
        <div class="flex justify-between px-12 py-4">
          <!-- slot: footer -->
          <slot name="footer" />
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseButton, { BUTTON_SIZE, BUTTON_VARIANT } from '../button/BaseButton.vue'
import BaseHeader from '../layout/BaseHeader.vue'
import { Dialog, DialogPanel } from '@headlessui/vue'

const props = defineProps<{
  title: string
}>()

const isOpen = defineModel<boolean>('isOpen')

const shake = ref(false)

const onBackdropClick = () => {
  shake.value = true

  setTimeout(() => {
    shake.value = false
  }, 300)
}
</script>
