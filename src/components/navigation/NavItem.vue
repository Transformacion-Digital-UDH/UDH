<template>
    <li class="relative group">
        <button 
            class="flex items-center gap-1 px-4 py-6 hover:text-green-custom transition-colors"
            @mouseenter="isOpen = true"
            @mouseleave="isOpen = false"
        >
            {{ title }}
            <IconChevronDown class="w-4 h-4" />
        </button>
        
        <div 
            v-show="isOpen"
            :class="['absolute top-full  bg-gray-custom border-t-4 border-green-custom shadow-lg z-50', position]"
            @mouseenter="isOpen = true"
            @mouseleave="isOpen = false"
        >
            <slot name="dropdown" />
        </div>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import { IconChevronDown } from '@tabler/icons-vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    position: {
        type: String,
        default: 'left-0'
    }

});

const isOpen = ref(false);
</script>