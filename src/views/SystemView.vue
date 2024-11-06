<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";

// Array de contenido para el carrusel
const carouselSlides = [
  {
    backgroundImage: "/imagesSlider/1.jpg",
    title: "Transforma tu vida con una",
    highlightedText: "educación de calidad",
    description:
      "En la UDH, creemos en el poder de alcanzar tus metas y a convertirte en un líder en tu campo.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/2.jpg",
    title: "Impulsa el futuro con",
    highlightedText: "investigación pionera",
    description:
      "En la Universidad de Innovación, nos dedicamos a desarrollar investigaciones que cambian el mundo.",
    buttonLabel: "Conoce más",
  },
];
</script>

<template>
  <MainLayout>
    <!-- Carrusel separado de GridInformation -->
    <Carousel :slides="carouselSlides" carouselHeight="medium" />

    <!-- GridInformation componente separado -->
    <GridInformation />
  </MainLayout>
</template>
