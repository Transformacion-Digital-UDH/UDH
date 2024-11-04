<template>
    <div class="p-2 text-gray-custom hover:text-green-custom">
        <button type="button" @click="openModal"
            class="p-2 text-gray-custom hover:text-green-custom">
            <IconSearch class="w-5 h-5" />
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/55 backdrop-blur-sm bg-blacktransition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <input type="email" required placeholder="Ingresa tu correo electrónico"
                            class="xs:w-5/6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-3/4 my-3 border border-gray-500 p-4 rounded-md text-gray-custom placeholder:text-gray-500 border-none focus:outline-none">

                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { IconSearch} from '@tabler/icons-vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>