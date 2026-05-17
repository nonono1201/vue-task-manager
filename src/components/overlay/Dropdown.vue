<template>
  <div ref="root" class="relative inline-block">
    <!-- ボタン -->
    <div @click="isOpen = true">
      <slot />
    </div>
    <!-- ドロップダウン -->
    <div v-if="isOpen" class="absolute right-0 mt-2 w-32 bg-background-base shadow">
      <div v-for="menu in props.dropdownMenu">
        <button
          @click="onMenuClick(menu.id)"
          class="flex items-center block w-full text-left px-4 py-2 hover:bg-primary/30"
        >
          <span class="material-icons pr-4 text-text-secondary"> {{ menu.icon }} </span>
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
  icon: string
}
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  dropdownMenu: DropdownMenu[]
}>()

const emit = defineEmits<{
  (e: 'onMenuClick', id: number): void
  (e: 'onButtonClick'): void
}>()

const isOpen = ref(false)

const root = ref<HTMLElement | null>(null)

const onMenuClick = (id: number) => {
  isOpen.value = false
  emit('onMenuClick', id)
}

const onClickOutside = (e: MouseEvent) => {
  if (!root.value) return

  if (!root.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
