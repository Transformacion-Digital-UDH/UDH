<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonMultiple from "@/components/ButtonMultiple.vue";
import { getSettingsPage } from "@/lib/get-settings-page";
import { onMounted } from "vue";

onMounted(async() => {
    const settingsPage = await getSettingsPage();
})
</script>
<template>
    <Header />
    <slot />
    <Footer />
    <ButtonMultiple />
</template>