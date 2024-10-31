<template>
    <div class="flex flex-col gap-2">
        <p class="uppercase text-green-custom text-sm">{{ title }}</p>
        <slot />
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>