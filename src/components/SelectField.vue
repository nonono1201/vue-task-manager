<template>
  <div class="w-80">
    <Listbox v-model="model">
      <ListboxButton class="border border-secondary text-left w-full p-2 flex justify-between">
        {{ selected?.label }}
        <span class="material-icons text-secondary">arrow_drop_down</span>
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
                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
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
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const model = defineModel<string>()
const props = defineProps<{
  options: readonly Option[]
}>()

const selected = computed(() => props.options.find((option) => option.key === model.value))
</script>
