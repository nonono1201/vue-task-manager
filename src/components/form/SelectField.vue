<template>
  <div :class="sizeClasses[props.size]">
    <Listbox v-model="model">
      <ListboxButton class="border border-secondary text-left w-full p-2">
        <div class="relative h-6">
          {{ selected?.label }}
          <span class="absolute right-0 material-icons text-secondary">arrow_drop_down</span>
        </div>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute max-h-60 w-80 overflow-auto bg-background-base py-1 text-base shadow-lg z-50 focus:outline-none"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option.key"
            :value="option.key"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-primary/30' : '',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
              >
                <span class="material-icons">check</span>
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>
<script lang="ts">
export type Option = {
  key: string
  label: string
}
export const INPUT_SIZE = {
  SM: 'sm',
  MD: 'md',
} as const
export type InputSize = (typeof INPUT_SIZE)[keyof typeof INPUT_SIZE]
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const model = defineModel<string>()
const props = withDefaults(
  defineProps<{
    options: readonly Option[]
    size?: InputSize
  }>(),
  {
    size: INPUT_SIZE.MD,
  },
)

const selected = computed(() => props.options.find((option) => option.key === model.value))

const sizeClasses: Record<InputSize, string> = {
  sm: 'w-30',
  md: 'w-80',
}
</script>
