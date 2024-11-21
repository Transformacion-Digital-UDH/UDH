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
    titulo: "Primer Ciclo",
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
    titulo: "Segundo Ciclo",
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
    numero: "3",
    titulo: "Tercer Ciclo",
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
    numero: "4",
    titulo: "Cuarto Ciclo",
    courses: [
      "Probabilidad y Estadística",
      "Estructura de Datos",
      "Optimización y Simulación",
      "Cálculo 2",
      "Electrónica Digital",
    ],
  },
  {
    numero: "5",
    titulo: "Quinto Ciclo",
    courses: [
      "Análisis de Algoritmos y Estrategias de Programación",
      "Comunicación 3",
      "Base de Datos",
      "Responsabilidad Social",
      "Técnicas de Programación Orientada a Objetos",
    ],
  },
  {
    numero: "6",
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
    numero: "7",
    titulo: "Septimo Ciclo",
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
    numero: "8",
    titulo: "Octavo Ciclo",
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
    numero: "9",
    titulo: "Noveno Ciclo",
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
    numero: "10",
    titulo: "Decimo ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
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
