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

const friendPages = [
  { name: 'Página 1', url: 'https://pagina1.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 2', url: 'https://pagina2.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 3', url: 'https://pagina3.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 4', url: 'https://pagina4.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 5', url: 'https://pagina5.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 6', url: 'https://pagina6.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 7', url: 'https://pagina7.com', image: 'https://via.placeholder.com/150x80' },
  { name: 'Página 8', url: 'https://pagina8.com', image: 'https://via.placeholder.com/150x80' },
];
</script>

<template>
  <MainLayout>
    <!-- Main content -->
    <div class="flex flex-col items-center md:mb-20 lg:mb-5">
      <Carousel class="w-full" />
      <mainFeatures class="w-[90%] max-w-[1200px] my-8 md:my-[-90px] lg:my-[-90px] z-10" />
    </div>
    <aboutUs />
    <DatosUniversidad />
    <VideoUniversidad />
    <CardEvent />
    <CardRelease />
    <FriendPagesCarousel :pages="friendPages"/>
  </MainLayout>
</template>

<style scoped></style>
