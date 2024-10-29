<!-- App.vue -->
<script setup lang="ts">

import Header from "@/components/Header.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import aboutUs from "@/components/aboutUs.vue";
</script>

<template>
  <Header />
  <div class="mt-5">
      <mainFeatures />
  </div>
  <div class="mt-5">
      <aboutUs />
  </div>
</template>

<style scoped></style>
