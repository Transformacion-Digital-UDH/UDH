<template>
    <div class="mx-6 pt-10 pb-10 font-epilogue">
        <!-- Título con subrayado verde -->
        <h4 class="pb-2 mb-6 font-black text-lg text-gray-800 relative">
            Documentos
            <span class="absolute left-0 bottom-[-6px] w-full h-1 bg-green-custom"></span>
        </h4>

        <!-- Lista de documentos -->
        <div v-for="(data, index) in datas" :key="index"
            class="flex items-center py-3 text-gray-800 text-base border-b border-gray-300 last:border-none">
            <!-- Icono decorativo -->
            <div class="text-green-custom">
                <IconCaretRight />
            </div>

            <!-- Enlace del documento -->
            <div class="ml-2">
                <a :href="data.url" class="font-semibold hover:underline text-gray-900" target="_blank">
                    {{ data.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconCaretRight } from "@tabler/icons-vue";
import { PropType } from 'vue';

const props = defineProps({
    datas: {
        type: Array as PropType<Array<{ name: string; url: string }>>,
        required: true
    },
});
</script>

<style scoped>
</style>
