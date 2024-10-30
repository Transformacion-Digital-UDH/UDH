<script setup lang="ts">
import Header from "@/components/Header.vue";
import DatosUniversidad from "@/components/DatosUniversidad.vue";
import Carousel from "@/components/Carousel.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
import CardEvent from "./components/CardEvent.vue";
import VideoUniversidad from "./components/videoUniversidad.vue";
import CardRelease from "./components/CardRelease.vue";
</script>

<template>
  <Header />

  <!-- Main content -->
  <Carousel />
  <mainFeatures />
  <aboutUs />
  <DatosUniversidad />
  <VideoUniversidad />
  <CardEvent />
  <CardRelease />

  <!-- Footer content -->
  <footer></footer>
</template>

<style scoped></style>
