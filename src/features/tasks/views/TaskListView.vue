<template>
  <ErrorMessage/>
  <v-container>
    <v-container>
      <v-btn prepend-icon="mdi-plus" color="primary" @click="add">
        {{ BUTTON_LABEL.ADD }}
      </v-btn>
    </v-container>
    <v-container>
      <v-card>
        {{ store.tasks }}
        <v-data-table :headers="TABLE_HEADERS" :items="tasks">
          <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-end">
              <v-icon
                color="medium-emphasis"
                icon="mdi-pencil"
                size="small"
                @click="edit(item.id)"
              ></v-icon>
              <v-icon
                color="medium-emphasis"
                icon="mdi-delete"
                size="small"
                @click="removeConfirm(item.id)"
              ></v-icon>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </v-container>
  <v-dialog v-model="removeDialog" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update" text="本当に削除してもよろしいですか？">
      <v-card-actions>
        <v-spacer />
        <v-btn class="ms-auto" :text="BUTTON_LABEL.CLOSE" @click="removeDialog = false" />
        <v-btn class="ms-auto" color="primary" :text="BUTTON_LABEL.DELETE" @click="remove" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { BUTTON_LABEL, STATUS, TABLE_HEADERS } from '../constants/task'
import { useTaskStore } from '../store/taskStore'
import { useRouter } from 'vue-router'
import ErrorMessage from '@/components/ErrorMessage.vue'

const router = useRouter()
const store = useTaskStore()

// タスク一覧(表示用)
const tasks = computed(() =>
  store.tasks.map((task) => ({
    ...task,
    completed: task.completed ? STATUS.COMPLETED : STATUS.PENDING,
    dueDate: task.dueDate.replace(/-/g, '/'),
  })),
)

// 削除ダイアログ
const removeDialog = ref(false)

// 編集
const edit = (id: number) => {
  router.push({ name: 'task.update', params: { id: id } })
}

// 削除
const removeTaskId = ref()
const removeConfirm = (id: number) => {
  removeDialog.value = true
  removeTaskId.value = id
}
const remove = () => {
  store.deleteTask(Number(removeTaskId.value))
  removeDialog.value = false
}

// 追加
const add = () => {
  router.push({ name: 'task.regist' })
}

onBeforeMount(() => {
  store.getTasks();
})
</script>

<style lang="scss" scoped></style>
