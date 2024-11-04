<script setup>
import videoSistemas from "@/components/CarreraSistemas/videoSistemas.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto p-4 lg:grid lg:grid-cols-3 gap-4 mb-10">
    <!-- Tarjeta logo responsive -->
    <div
      class="min-h-[120px] rounded-xl shadow-custom-card bg-red-100 mb-4 block lg:hidden"
    ></div>

    <!-- Columna Izquierda (Contenido Principal) -->
    <div
      class="lg:col-span-2 min-h-[1200px] rounded-xl shadow-custom-card bg-white"
    >
      <!--ACA IRA MI VIDEO SISTEMAS-->
      <videoSistemas />
    </div>

    <!-- Columna Derecha (Tarjetas de Información) -->
    <div class="space-y-4 md:mt-4 lg:mt-0 sm:mt-4 xs:mt-4 xl:mt-0">
      <!-- Tarjeta logo -->
      <div
        class="min-h-[120px] rounded-xl shadow-custom-card bg-red-100 hidden lg:block"
      ></div>

      <!-- Tarjeta info carrera -->
      <div class="min-h-[450px] rounded-xl shadow-custom-card bg-white"></div>

      <!-- Tarjeta caracteristicas -->
      <div class="min-h-[400px] rounded-xl shadow-custom-card bg-white"></div>

      <!-- Tarjeta documentos -->
      <div class="min-h-[200px] rounded-xl shadow-custom-card bg-white"></div>
    </div>
  </div>
</template>

<style scoped></style>
