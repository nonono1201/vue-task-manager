<template>
  <div class="w-80">
    <VueDatePicker
      v-model="model"
      model-type="yyyy-MM-dd"
      :formats="{ input: 'yyyy/MM/dd' }"
      :time-config="{ enableTimePicker: false }"
      auto-apply
      :locale="ja"
    >
      <template #dp-input="{ value }">
        <div class="relative flex">
          <input
            type="text"
            class="w-full p-2 h-auto border border-secondary"
            :value="value"
            readonly
          />
          <span
            class="absolute top-1/2 -translate-y-1/2 right-0 pr-3 material-icons text-secondary"
            v-if="value === ''"
          >
            calendar_month
          </span>
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>

<script setup lang="ts">
import { ja } from 'date-fns/locale'

const model = defineModel<string>()
</script>
