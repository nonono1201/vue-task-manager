<template>
  <div :class="boardClass">
    <div class="text-center text-text-inverse">
      {{ statusLabel }}
    </div>
    <div class="relative">
      <div
        v-if="!store.isDragging && isEmpty"
        class="absolute inset-0 pointer-events-none text-text-secondary text-center bg-background-subtle/50 p-4 h-full rounded-xl"
      >
        {{ statusLabel }}のタスクはありません
      </div>
      <VueDraggable
        :model-value="tasks"
        :animation="150"
        group="task"
        class="flex flex-col gap-4 min-h-32"
        :class="store.isDragging ? 'pb-16' : ''"
        @add="onAdd"
        @start="onStart"
        @end="onEnd"
      >
        <div v-for="task in tasks">
          <Card
            :title="task.title"
            :due-date="task.dueDate"
            @on-update="onUpdate(task.id)"
            @on-delete="onDelete(task.id)"
          />
        </div>
      </VueDraggable>
      <div
        v-if="store.isDragging"
        class="absolute inset-0 pointer-events-none h-full flex items-end justify-center border-2 border-dashed border-blue-400 bg-blue-50/40 rounded-xl py-4 text-center text-blue-500 text-sm transition"
      >
        ここにドロップ
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import { STATUSES, type Status } from '../types/task'
import { computed, ref } from 'vue'
import { VueDraggable, type DraggableEvent, type SortableEvent } from 'vue-draggable-plus'
import { useTaskStore } from '../store/taskStore'

const store = useTaskStore()
const props = defineProps<{
  status: Status
}>()
const emit = defineEmits<{
  (e: 'onUpdate', taskId: number): void
  (e: 'onDelete', taskId: number): void
}>()

const boardClass = computed(() => [
  'w-88 px-4 py-6 flex flex-col gap-4 rounded-tl-2xl rounded-tr-2xl',
  statusClass[props.status],
])
const statusClass: Record<Status, string> = {
  todo: 'bg-status-todo',
  doing: 'bg-status-doing',
  done: 'bg-status-done',
}
const statusLabel = computed(() => STATUSES.find((status) => status.key === props.status)?.label)

// ０件か
const isEmpty = computed(() => tasks.value.length === 0)

// ステータスに紐づくタスク
const tasks = computed(() => store.byStatus(props.status))

// ドラッグ中か
const isDragging = ref(false)

// DraggableEvent
const onStart = () => {
  store.setIsDragging(true)
}
const onEnd = () => {
  store.setIsDragging(false)
}
const onAdd = (event: DraggableEvent) => {
  const task = event.data
  store.moveTask(task.id, props.status)
}

// ボタンイベント
const onUpdate = (taskId: number) => {
  emit('onUpdate', taskId)
}

const onDelete = (taskId: number) => {
  emit('onDelete', taskId)
}
</script>
