<template>
    <div class="border rounded-md overflow-hidden">
        <button 
            class="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 transition-colors"
            @click="isOpen = !isOpen"
        >
            <span class="font-medium">{{ title }}</span>
            <IconChevronDown 
                class="w-5 h-5 transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
            />
        </button>

        <TransitionRoot appear :show="isOpen">
            <div class="border-t bg-gray-50">
                <TransitionChild
                    enter="transition-all duration-300 ease-out"
                    enter-from="opacity-0 -translate-y-4"
                    enter-to="opacity-100 translate-y-0"
                    leave="transition-all duration-300 ease-in"
                    leave-from="opacity-100 translate-y-0"
                    leave-to="opacity-0 -translate-y-4"
                >
                    <template v-for="(item, index) in items" :key="index">
                        <!-- Nested Menu -->
                        <div v-if="item.items" class="pl-4">
                            <button 
                                class="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 transition-colors"
                                @click="toggleSubMenu(index)"
                            >
                                <span>{{ item.title }}</span>
                                <IconChevronDown 
                                    class="w-4 h-4 transition-transform duration-300"
                                    :class="{ 'rotate-180': openSubMenus[index] }"
                                />
                            </button>
                            
                            <TransitionRoot appear :show="openSubMenus[index]">
                                <TransitionChild
                                    enter="transition-all duration-300 ease-out"
                                    enter-from="opacity-0 -translate-y-2"
                                    enter-to="opacity-100 translate-y-0"
                                    leave="transition-all duration-300 ease-in"
                                    leave-from="opacity-100 translate-y-0"
                                    leave-to="opacity-0 -translate-y-2"
                                >
                                    <div class="pl-4 pb-2">
                                        <a 
                                            v-for="(subItem, subIndex) in item.items"
                                            :key="subIndex"
                                            :href="subItem.href"
                                            class="block p-2 hover:bg-gray-100 rounded-md transition-colors text-sm"
                                        >
                                            {{ subItem.title }}
                                        </a>
                                    </div>
                                </TransitionChild>
                            </TransitionRoot>
                        </div>

                        <!-- Regular Link -->
                        <a 
                            v-else
                            :href="item.href"
                            class="block p-3 hover:bg-gray-100 transition-colors"
                        >
                            {{ item.title }}
                        </a>
                    </template>
                </TransitionChild>
            </div>
        </TransitionRoot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { TransitionRoot, TransitionChild } from '@headlessui/vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        default: () => []
    }
});

const isOpen = ref(false);
const openSubMenus = ref({});

const toggleSubMenu = (index) => {
    openSubMenus.value = {
        ...openSubMenus.value,
        [index]: !openSubMenus.value[index]
    };
};
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
    transition: all 0.3s ease-out;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>