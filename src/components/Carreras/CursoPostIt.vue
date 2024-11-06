<template>
    <div class="flex flex-col p-4 bg-white shadow-lg rounded-lg text-left border border-gray-200 relative h-80 w-80 mx-5">
      <div class="text-green-custom text-5xl font-bold absolute top-2 left-2">
        {{ curso.numero }}
      </div>
      <div class="mt-8">
        <h3 class="text-xl font-semibold text-gray-900">{{ curso.titulo }}</h3>
        <p class="text-gray-600 font-semibold mt-2">CURSOS</p>
        <ul class="text-gray-700 mt-1 space-y-1">
          <li v-for="(item, index) in curso.courses" :key="index">
            > {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      curso: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  