<script setup>
import { defineProps } from "vue";

const props = defineProps({
  Requisitos: {
    type: Array,
    required: false,
    default: () => [],
  },
  Obtendra: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<template>
  <div class="m-8 font-epilogue">
    <div class="mb-8">
      <h4 class="font-black text-lg lg:text-lg xl:text-xl mb-4">Requisitos del Curso</h4>
      <ul class="text-[#757F95]">
        <li
          v-for="(requisito, index) in Requisitos"
          :key="index"
          class="my-2 flex"
        >
          <i class="fas fa-check mr-2 text-[#2ac5a9]"> </i>{{ requisito }}
        </li>
      </ul>
    </div>
    <div>
      <h4 class="font-black text-lg lg:text-lg xl:text-xl mb-4">Se obtendrá</h4>
      <ul class="text-[#757F95]">
        <li v-for="(item, index) in Obtendra" :key="index" class="my-2 flex">
          <i class="fas fa-check mr-2 text-[#2ac5a9]"> </i>{{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
