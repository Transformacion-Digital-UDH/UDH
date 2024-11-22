<script setup>
import {
  IconBook,
  IconPencil,
  IconMapPin,
  IconBuilding,
  IconCircleCheck,
  IconSchool,
} from "@tabler/icons-vue";
import FeatureItem from "@/components/FeatureItem.vue";
import { getCharacterSystem } from "@/lib/carreras/sistemas/get-systemCaracteristicas.info";
import { onMounted, ref } from "vue";

const caracteristicas = ref({});
const features = ref([]);
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

const fetchCharacterSystem = async () => {
  try {
    const response = await getCharacterSystem();
    caracteristicas.value = response.caracteristicas || {};
    features.value = caracteristicas.value.data || [];
  } catch (error) {
    console.error(
      "Error al cargar las características de Ing. Sistemas:",
      error
    );
  }
};

onMounted(() => {
  fetchCharacterSystem();
});
</script>

<template>
  <div
    class="m-6 pt-10 pb-10 font-epilogue"
    style="visibility: visible; animation-name: fadeInDown"
  >
    <h4
      class="section-title mb-10 font-black text-sm xs:text-sm sm:text-lg xl:text-xl"
    >
      {{ caracteristicas.titulo }}
    </h4>
    <div class="course-feature-list">
      <FeatureItem
        v-for="(feature, index) in features"
        :key="index"
        :icon="`${baseApiUrl}${feature.icono?.url}`"
        :label="feature.titulo"
        :value="feature.descripcion"
        :name="feature.icono?.name"
      />
    </div>
  </div>
</template>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-bottom: 3px solid #2ebaa1;
}
</style>
