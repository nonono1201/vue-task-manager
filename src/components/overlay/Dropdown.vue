<template>
  <div class="relative inline-block">
    <!-- ボタン -->
    <div @click="isButtonClick = true">
      <slot />
    </div>
    <!-- ドロップダウン -->
    <div v-if="isButtonClick" class="absolute right-0 mt-2 w-32 bg-background-base border rounded shadow">
      <div v-for="menu in props.dropdownMenu">
        <button
          @click="onMenuClick(menu.id)"
          class="block w-full text-left px-4 py-2 hover:bg-background-subtle"
        >
          {{ menu.label }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export type DropdownMenu = {
  id: number
  label: string
}
</script>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  dropdownMenu: DropdownMenu[];
}>()

const emit = defineEmits<{
  (e: 'onMenuClick', id: number): void
  (e: 'onButtonClick'): void
}>()

const isButtonClick = ref(false)

const onMenuClick = (id: number) => {
  isButtonClick.value = false
  emit('onMenuClick', id)
}
</script>
