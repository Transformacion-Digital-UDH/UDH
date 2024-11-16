<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonMultiple from "@/components/ButtonMultiple.vue";

</script>
<template>
    <Header />
    <slot />
    <Footer />
    <ButtonMultiple />
</template>