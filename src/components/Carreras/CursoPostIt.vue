<template>
  <div class="flex flex-col p-4 bg-white shadow-lg rounded-lg text-left border-[3px] border-black relative h-80 w-80">
    <div class="text-green-custom text-5xl font-bold absolute top-0 left-2">
      {{ curso.numero }}
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-gray-900">{{ curso.titulo }}</h3>
      <p class="text-gray-600 font-semibold mt-2">CURSOS</p>
      <ul class="text-gray-700 mt-1 space-y-1">
        <li v-for="(item, index) in curso.courses" :key="index" class="flex items-center">
          <IconPoint class="mr-2" /> 
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { IconPoint } from '@tabler/icons-vue';

defineProps({
  curso: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>
