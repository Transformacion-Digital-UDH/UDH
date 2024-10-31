<!-- Carousel.vue -->
<template>
  <Splide :options="splideOptions" class="carousel-wrapper">
    <!-- Slide 1 -->
    <CarouselSlide
      backgroundImage="/imagesSlider/1.jpg"
      subtitle="Bienvenido a la UDH"
      title="Transforma tu vida con una"
      highlightedText="educación de calidad"
      description="En la UDH, creemos en el poder transformador de la educación. Ofrecemos programas académicos diseñados para prepararte para los desafíos del mundo real, ayudándote a alcanzar tus metas y a convertirte en un líder en tu campo."
      buttonLabel="Conoce más"
      minheight="min-h-[90dvh]"
    />

    <!-- Slide 2 -->
    <CarouselSlide
      backgroundImage="/imagesSlider/2.jpg"
      subtitle="Bienvenido a la UDH"
      title="Impulsa el futuro con"
      highlightedText="investigación pionera"
      description="En la Universidad de Innovación, nos dedicamos a explorar nuevos horizontes y a liderar el camino en investigación avanzada. Nuestros programas están diseñados para fomentar la creatividad y el pensamiento crítico, preparando a nuestros estudiantes para ser los innovadores del mañana y enfrentar los retos más complejos del mundo."
      buttonLabel="Conoce más"
      minheight="min-h-[90dvh]"
    />
  </Splide>
</template>

<script setup>
import { Splide } from "@splidejs/vue-splide";
import CarouselSlide from "@/components/CarouselSlide.vue";
import "@splidejs/vue-splide/css";

// Opciones del carrusel
const splideOptions = {
  type: "loop",
  autoplay: true,
  interval: 3000,
  speed: 800,
  pauseOnHover: false,
  perPage: 1,
  arrows: false,
  pagination: true,
};
</script>

<style scoped>
/* Mantener las animaciones y estilos de Carousel.vue */
</style>
