<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonMultiple from "@/components/ButtonMultiple.vue";
import { getSettingsPage } from "@/lib/get-settings-page";
import { onMounted, ref } from "vue";

const redes_sociales = ref([]);
const contactos = ref([]);
const logoudh = ref(null);
const link_login = ref(null);

const fetchSettings = async () => {
    try {
        const settingsPage = await getSettingsPage();

        redes_sociales.value = settingsPage.redes_sociales || [];
        contactos.value = settingsPage.contactos || [];
        logoudh.value = settingsPage.logoudh || null;
        link_login.value = settingsPage.link_login || null;
    } catch (error) {
        console.error("Error fetching settings data:", error);
    }
};

onMounted(fetchSettings);

</script>
<template>
    <Header 
        :redes_sociales="redes_sociales"
        :logoudh="logoudh!"
        :link_login="link_login!"
    />
    <slot />
    <Footer />
    <ButtonMultiple />
</template>