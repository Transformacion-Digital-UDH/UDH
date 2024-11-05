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

const features = [
  { icon: IconBook, label: "Cursos", value: "67" },
  { icon: IconPencil, label: "Metodología", value: "Teórica y Práctica" },
  { icon: IconMapPin, label: "Location", value: "La esperanza" },
  { icon: IconBuilding, label: "Infraestructura", value: "Si" },
  { icon: IconCircleCheck, label: "Bachiller", value: "Si" },
  { icon: IconSchool, label: "Titulación", value: "Si" },
];
</script>

<template>
  <div
    class="m-6 pt-10 pb-10 font-epilogue"
    style="visibility: visible; animation-name: fadeInDown"
  >
    <h4
      class="section-title mb-10 font-black text-sm xs:text-sm sm:text-lg xl:text-xl"
    >
      Características de la carrera
    </h4>
    <div class="course-feature-list">
      <FeatureItem
        v-for="(feature, index) in features"
        :key="index"
        :icon="feature.icon"
        :label="feature.label"
        :value="feature.value"
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
