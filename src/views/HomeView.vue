<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import DatosUniversidad from "@/components/DatosUniversidad.vue";
import Carousel from "@/components/Carousel.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
import CardEvent from "@/components/CardEvent.vue";
import CardRelease from "@/components/CardRelease.vue";
import FriendPagesCarousel from "@/components/FriendPagesCarousel.vue";
import VideoUniversidad from "@/components/videoUniversidad.vue";
import { getCarouselInfo } from "@/lib/get-carousel-info"; 
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center md:mb-20 lg:mb-5 relative">
      <Carousel :fetchSlides="getCarouselInfo" carouselHeight="large" />
      <mainFeatures class="w-[90%] max-w-[1200px] my-6 md:my-[-40px] lg:my-[-40px] z-10 relative top-[-20px]" />
    </div>
    <aboutUs />
    <DatosUniversidad />
    <VideoUniversidad />
    <CardEvent />
    <CardRelease />
    <FriendPagesCarousel />
  </MainLayout>
</template>

<style scoped></style>
