<script setup lang="ts">
import Header from "@/components/Header.vue";
import DatosUniversidad from "@/components/DatosUniversidad.vue";
import Carousel from "@/components/Carousel.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
import CardEvent from "@/components/CardEvent.vue";
import VideoUniversidad from "@/components/videoUniversidad.vue";
import CardRelease from "@/components/CardRelease.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />

  <!-- Main content -->
  <div class="flex flex-col items-center md:mb-20 lg:mb-5">
    <Carousel class="w-full" />
    <mainFeatures
      class="w-[90%] max-w-[1200px] my-8 md:my-[-90px] lg:my-[-90px] z-10"
    />
  </div>
  <aboutUs />
  <DatosUniversidad />
  <VideoUniversidad />
  <CardEvent />
  <CardRelease />

  <!-- Footer content -->
  <Footer />
</template>

<style scoped></style>
