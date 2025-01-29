<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto z-50 font-epilogue">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">

                        <DialogPanel
                            class="space-y-5 sm:space-y-10 w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div class="">
                                <DialogTitle as="h3"
                                    class="text-lg sm:text-xl leading-6 text-gray-900 text-center uppercase font-epilogue font-semibold">
                                    ¡Nuestro bot DEACHE ya está aqui!
                                </DialogTitle>
                                <button @click="closeModal" class="hover:scale-105 absolute top-4 right-4">
                                    <IconX class="w-6 h-6 " />
                                </button>
                            </div>

                            <div class="flex sm:flex-row flex-col items-center gap-2 sm:gap-4 justify-center h-full">
                                <a type="button" href="https://wa.link/o74ru5" target="_blank"
                                    class="flex content-center items-center justify-center flex-col rounded-lg border border-transparent bg-green-custom px-4 py-2 text-lg text-white hover:bg-green-custom-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-green-custom focus-visible:ring-offset-2 text-center w-[250px] sm:w-full h-auto sm:h-64 font-semibold uppercase space-y-4">
                                    <IconBrandWhatsapp class="w-14 sm:w-20 h-14 sm:h-20" />
                                    <p>
                                        Chatear por Whatsapp
                                    </p>
                                </a>
                                <img src="https://api.qrcode-monkey.com/tmp/6410c1dbcd92382ebf8365039023480c.svg?1738123929650"
                                    alt="" width="250" height="250" class="border-2 border-slate-700/50 rounded-lg">
                            </div>

                            <div class="">
                                <p class="text-lg text-gray-700 font-semibold text-center">
                                    Haz click al siguiente boton para empezar a usarlo, o escanea el QR. Para aclarar
                                    todas las dudas que
                                    tengas. 🫡🤖
                                </p>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { IconBrandWhatsapp, IconX } from '@tabler/icons-vue'


const isOpen = ref(true)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}

onMounted(() => {
    openModal()
})
</script>