<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";

const carouselSlides = [
  {
    backgroundImage: "/imagesSlider/proyecto1.jpg",
    title: "Optimiza tu vida con nuestras soluciones de ",
    highlightedText: "Internet de las Cosas(IoT)",
    description:
      "En la UDH, creemos en el poder de alcanzar tus metas y a convertirte en un líder en tu campo.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto2.jpg",
    title: "Impulsa el futuro con",
    highlightedText: "investigación pionera",
    description:
      "En la Universidad de Innovación, nos dedicamos a desarrollar investigaciones que cambian el mundo.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto3.jpg",
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
    <Carousel :slides="carouselSlides" carouselHeight="medium" />

    <GridInformation />
  </MainLayout>
</template>
