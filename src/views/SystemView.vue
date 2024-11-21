<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";
import CarouselCursos from "@/components/Carreras/CarouselCursos.vue";
import { getCarreraCarousel } from "@/lib/carreras/sistemas/get-sistemas-carousel";

// Datos estáticos para cursos
const cursos = [
  {
    numero: "1",
    titulo: "Sexto Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  {
    numero: "2",
    titulo: "Séptimo Ciclo",
    courses: [
      "Seguridad Informática",
      "Inteligencia Artificial",
      "Arquitectura de Software",
      "Gestión de Proyectos",
      "Redes Avanzadas",
    ],
  },
  {
    numero: "3",
    titulo: "Octavo Ciclo",
    courses: [
      "Ingeniería de Requisitos",
      "Desarrollo de Aplicaciones Móviles",
      "Big Data",
      "Gestión Empresarial",
      "Ciberseguridad",
    ],
  },
];
</script>

<template>
  <MainLayout>
    <Carousel :fetchSlides="getCarreraCarousel" carouselHeight="medium" />
    <GridInformation />
    <CarouselCursos :cursos="cursos" />
  </MainLayout>
</template>

<style scoped></style>
