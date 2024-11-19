<script setup>
import { onMounted, ref, computed } from "vue";
import { getCharacter } from '@/lib/get-characters-info';

const caracteristicas = ref([]);
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

const fetchCharacters = async () => {
  try {
    const response = await getCharacter();
    caracteristicas.value = response.caracteristicas || [];
  } catch (error) {
    console.error("Error al cargar las características:", error);
  }
};

const gridColumnsClass = computed(() => {
  const totalItems = caracteristicas.value.length;
  return `grid-cols-${Math.min(totalItems, 4)}`;
});

onMounted(() => {
  fetchCharacters();
});
</script>

<template>
  <div class="bg-[#333333] m-10 rounded-2xl py-10">
    <div class="container mx-auto">
      <div :class="`grid grid-cols-1 md:grid-cols-2 lg:${gridColumnsClass} gap-6`">
        <!--CARD 1-->
        <div v-for="(caracteristica, index) in caracteristicas" :key="caracteristica.id"
          class="bg-[#333333] rounded-lg p-6 text-left text-white relative mt-1">
          <div class="feature-icon transform hover:scale-100 transition-transform duration-700 ease-in-out">
            <div
              class="w-20 h-20 bg-[#2ebaa1] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-700 ease-in-out">
              <img :src="`${baseApiUrl}`+caracteristica.icono.url" :alt="caracteristica.icono.name"
                class="w-10 h-10 filter invert brightness-0" />
            </div>
          </div>
          <div class="mb-5">
            <span class="absolute top-4 right-4 text-5xl font-extrabold block text-transparent" style="
                -webkit-text-stroke: 2px #2ebaa1;
                -webkit-text-fill-color: transparent;
              ">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>
          <div class="font-epilogue">
            <h4 class="text-[22px] font-extrabold mb-2">{{ caracteristica.titulo }}</h4>
            <p class="text-sm leading-[1.8] font-semibold">
              {{ caracteristica.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
