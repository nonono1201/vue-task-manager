<template>
<button :disabled="props.disabled" :class="buttonClass">
  <slot />
</button>
</template>

<script lang="ts">
export const BUTTON_SIZE = {
  SM: 'sm',
  MD: 'md',
} as const
export type ButtonSize =
  typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE]
export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost'
} as const
export type ButtonVariant =
  typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT]

</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ 
  disabled: boolean,
  size?: ButtonSize,
  variant?: ButtonVariant,
}>(),{
  size: BUTTON_SIZE.MD,
  variant: BUTTON_VARIANT.PRIMARY
});

const buttonClass = computed(() => [
  'font-medium flex items-center justify-center',
  variantClasses[props.variant],
  sizeClasses[props.size],
])

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-text-inverse',
  secondary: 'bg-secondary text-text-inverse',
  ghost:'text-text-secondary',
}
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-6 w-6 px-2 text-lg rounded',
  md: 'h-12 w-38 px-4 text-lg rounded-2xl',
}


</script>
