<script setup>
import VideoCareer from "@/components/Carreras/videoCareer.vue";
import courseRequirement from "@/components/Carreras/courseRequirement.vue";
import characterCareer from "@/components/Carreras/characterCareer.vue";
import InfoCareer from "@/components/Carreras/infoCareer.vue";
import DocumentsCareer from "@/components/Carreras/DocumentsCareer.vue";
import DataLogoCareer from "./dataLogoCareer.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto p-4 lg:grid lg:grid-cols-3 gap-4 mb-10">
    <!-- Tarjeta logo responsive -->
    <div class="min-h-[120px] rounded-xl shadow-custom-card bg-white mb-4 block lg:hidden">
      <DataLogoCareer/>
    </div>

    <!-- Columna Izquierda (Contenido Principal) -->
    <div class="lg:col-span-2 min-h-[1200px] rounded-xl shadow-custom-card bg-white">
      <VideoCareer />
      <courseRequirement />
    </div>

    <!-- Columna Derecha (Tarjetas de Información) -->
    <div class="space-y-4 md:mt-4 lg:mt-0 sm:mt-4 xs:mt-4 xl:mt-0">
      <!-- Tarjeta logo -->
      <div class="min-h-[120px] rounded-xl shadow-custom-card bg-white hidden lg:block">
        <DataLogoCareer/>
      </div>

      <!-- Tarjeta info carrera -->
      <div class="min-h-[450px] rounded-xl shadow-custom-card bg-white">
        <InfoCareer />
      </div>

      <!-- Tarjeta caracteristicas -->
      <div class="min-h-auto rounded-xl shadow-custom-card bg-white">
        <characterCareer />
      </div>

      <!-- Tarjeta documentos -->
      <div class="min-h-[200px] h-auto rounded-xl shadow-custom-card bg-white">
        <DocumentsCareer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
