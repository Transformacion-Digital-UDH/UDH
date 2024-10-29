<template>
    <a 
        :href="href"
        class="block px-4 py-2 text-white hover:text-green-custom transition-colors border-b border-gray-800 last:border-0"
    >
        <slot />
    </a>
</template>

<script setup>
defineProps({
    href: {
        type: String,
        default: '#'
    }
});
</script>