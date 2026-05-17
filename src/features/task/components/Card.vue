<template>
  <div class="bg-background-subtle w-80 px-4 py-8 rounded-xl">
    <div class="w-72 mb-8 flex justify-between">
      <div class="w-64 line-clamp-3 leading-6 h-[4.5rem]">{{ props.title }}</div>
      <Dropdown :dropdown-menu="dropdownMenu" @on-menu-click="onMenuClick">
        <span>
          <BaseButton :disabled="false" :variant="BUTTON_VARIANT.GHOST" :size="BUTTON_SIZE.SM">
            <span class="material-icons">more_vert</span>
          </BaseButton>
        </span>
      </Dropdown>
    </div>
    <div>
      <div :class="['text-xs', isOverdue ? 'text-accent' : 'text-text-secondary']">
        期限: {{ formatDisplayDate(props.dueDate) }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
</script>
<script setup lang="ts">
import BaseButton, { BUTTON_SIZE, BUTTON_VARIANT } from '@/components/button/BaseButton.vue'
import Dropdown, { type DropdownMenu } from '@/components/overlay/Dropdown.vue'
import { formatDisplayDate } from '@/utils/date'
import { computed } from 'vue'
import { taskLogic } from '../logic/taskLogic'

const props = defineProps<{
  title: string
  dueDate: string
}>()

const emit = defineEmits<{
  (e: 'onUpdate'): void
  (e: 'onDelete'): void
}>()

const dropdownMenu: DropdownMenu[] = [
  {
    id: 1,
    label: '更新',
    icon: 'edit'
  },
  {
    id: 2,
    label: '削除',
    icon: 'delete'
  },
]

const onMenuClick = (id: number) => {
  switch (id) {
    case 1:
      emit('onUpdate')
      break
    case 2:
      emit('onDelete')
      break
    default:
      break
  }
}

const isOverdue = computed(() => taskLogic.isOverdue(props.dueDate))
</script>
