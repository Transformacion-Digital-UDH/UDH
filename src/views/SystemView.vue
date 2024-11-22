<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";
import CarouselCursos from "@/components/Carreras/CarouselCursos.vue";
import { getSistemasCarousel } from "@/lib/carreras/sistemas/get-sistemas-carousel";
import { getSistemasCursos } from "@/lib/carreras/sistemas/get-sistemascursos-carousel";
import { ref, onMounted } from "vue";

interface Curso {
  titulo: string;
  courses: string[];
}

const cursos = ref<Curso[]>([]);

onMounted(async () => {
  try {
    const data = await getSistemasCursos();
    const malla = data.malla;

    if (!Array.isArray(malla)) {
      console.error("La malla curricular no es un array o no existe:", malla);
      return;
    }

    cursos.value = malla.map((ciclo: any) => ({
      titulo: ciclo.ciclo_escrito || "Ciclo sin nombre",
      courses: Array.isArray(ciclo.cursos)
        ? ciclo.cursos.map((curso: any) => curso.nombre_curso || "Curso sin nombre")
        : [],
    }));
  } catch (error) {
    console.error("Error al cargar la malla curricular:", error);
  }
});
</script>

<template>
  <MainLayout>
    <Carousel :fetchSlides="getSistemasCarousel" carouselHeight="medium" />
    <GridInformation />
    <CarouselCursos :cursos="cursos" v-if="cursos.length > 0" />
    <p v-else class="text-center text-red-500">No se encontraron datos para la malla curricular.</p>
  </MainLayout>
</template>

<style scoped></style>
