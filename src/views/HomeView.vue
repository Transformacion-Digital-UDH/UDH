<script setup>
import MainLayout from "@/layout/MainLayout.vue";
import DatosUniversidad from "@/components/DatosUniversidad.vue";
import Carousel from "@/components/Carousel.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
import CardEvent from "@/components/CardEvent.vue";
import VideoUniversidad from "@/components/videoUniversidad.vue";
import CardRelease from "@/components/CardRelease.vue";
import FriendPagesCarousel from "@/components/FriendPagesCarousel.vue";
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center md:mb-20 lg:mb-5 relative">
      <Carousel carouselHeight="large" />
      <mainFeatures class="w-[90%] max-w-[1200px] my-6 md:my-[-40px] lg:my-[-40px] z-20 relative top-[-20px]" />
    </div>
    <aboutUs />
    <DatosUniversidad />
    <VideoUniversidad
      image-url="https://placehold.co/1920x1080"
      videoUrl="https://www.youtube.com/embed/K0aKgIyU0qs?si=-nwGr1FyivhKClxj"
    />
    <CardEvent />
    <CardRelease />
    <FriendPagesCarousel :pages="[]" />
  </MainLayout>
</template>

<style scoped></style>
