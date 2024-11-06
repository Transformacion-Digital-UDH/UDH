<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import DatosUniversidad from "@/components/DatosUniversidad.vue";
import Carousel from "@/components/Carousel.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
import CardEvent from "@/components/CardEvent.vue";
import VideoUniversidad from "@/components/videoUniversidad.vue";
import CardRelease from "@/components/CardRelease.vue";
import FriendPagesCarousel from "@/components/FriendPagesCarousel.vue";

const carouselSlides = [
  {
    backgroundImage: "/imagesSlider/1.jpg",
    subtitle: "Bienvenido a la UDH",
    title: "Transforma tu vida con una",
    highlightedText: "educación de calidad",
    description:
      "En la UDH, creemos en el poder transformador de la educación. Ofrecemos programas académicos diseñados para prepararte para los desafíos del mundo real, ayudándote a alcanzar tus metas y a convertirte en un líder en tu campo.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/2.jpg",
    subtitle: "Bienvenido a la UDH",
    title: "Impulsa el futuro con",
    highlightedText: "investigación pionera",
    description:
      "En la Universidad de Innovación, nos dedicamos a explorar nuevos horizontes y a liderar el camino en investigación avanzada. Nuestros programas están diseñados para fomentar la creatividad y el pensamiento crítico, preparando a nuestros estudiantes para ser los innovadores del mañana y enfrentar los retos más complejos del mundo.",
    buttonLabel: "Conoce más",
  },
];

const friendPages = [
  {
    name: "Página 1",
    url: "https://pagina1.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 2",
    url: "https://pagina2.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 3",
    url: "https://pagina3.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 4",
    url: "https://pagina4.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 5",
    url: "https://pagina5.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 6",
    url: "https://pagina6.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 7",
    url: "https://pagina7.com",
    image: "https://via.placeholder.com/150x80",
  },
  {
    name: "Página 8",
    url: "https://pagina8.com",
    image: "https://via.placeholder.com/150x80",
  },
];
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center md:mb-20 lg:mb-5 relative">
      <!-- Carrusel ocupando toda la anchura -->
      <Carousel :slides="carouselSlides" carouselHeight="large" />
      <!-- Ajustamos mainFeatures para una superposición sutil -->
      <mainFeatures
        class="w-[90%] max-w-[1200px] my-6 md:my-[-40px] lg:my-[-40px] z-20 relative top-[-20px]"
      />
    </div>
    <aboutUs />
    <DatosUniversidad />
    <VideoUniversidad />
    <CardEvent />
    <CardRelease />
    <FriendPagesCarousel :pages="friendPages" />
  </MainLayout>
</template>

<style scoped></style>
