<template>
    <div class="bg-primary h-16 px-20 flex items-center">
        <div class="text-text-inverse text-lg font-medium">
            {{ props.title }}
        </div>
        <div>
            <slot name="right"/>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
