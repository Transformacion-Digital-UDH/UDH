<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";

const carouselSlides = [
  {
    backgroundImage: "/imagesSlider/proyecto1.jpg",
    title: "Optimiza tu vida con nuestras soluciones de ",
    highlightedText: "Internet de las Cosas(IoT)",
    description: "Conéctate a la era digital con nuestras innovadoras soluciones IoT. Desde casas inteligentes hasta fábricas automatizadas, descubre cómo la integración de dispositivos conectados puede mejorar tu eficiencia y ofrecer una experiencia personalizada en todos los aspectos de tu vida.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto2.jpg",
    title: "Conquista el mundo de las criptomonedas y ",
    highlightedText: "blockchain con nuestra tecnología",
    description: "La tecnología blockchain está redefiniendo la forma en que se manejan las transacciones y se asegura la información. Descubre cómo nuestras soluciones en criptomonedas pueden ofrecer seguridad, transparencia y eficiencia en todos tus proyectos financieros.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto3.jpg",
    title: "Explora el futuro de la computación ",
    highlightedText: "cuántica  con nuestras innovaciones",
    description: "La próxima generación de computadoras está aquí. Nuestra plataforma de computación cuántica está revolucionando el procesamiento de datos con una velocidad sin precedentes. Descubre cómo esta tecnología puede resolver problemas complejos en segundos y transformar industrias enteras .",
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
