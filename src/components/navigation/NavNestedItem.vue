<template>
    <div 
        class="relative group/nested"
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false"
    >
        <a 
            href="#"
            class="flex items-center justify-between px-4 py-2 text-white hover:text-green-custom transition-colors"
        >
            {{ title }}
            <IconChevronRight class="w-4 h-4" />
        </a>
        
        <div 
            v-show="isOpen"
            class="absolute top-0 left-full bg-gray-custom border-t-4 border-green-custom shadow-lg min-w-[200px]"
        >
            <div class="py-2">
                <slot name="submenu" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { IconChevronRight } from '@tabler/icons-vue';

defineProps({
    title: {
        type: String,
        required: true
    }
});

const isOpen = ref(false);
</script>