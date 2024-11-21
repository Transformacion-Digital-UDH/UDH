<script setup>
import { ref, onMounted } from 'vue';
import { getSystemLogo } from '@/lib/carreras/sistemas/get-logoSystem';
import DataLogoCareer from '@/components/dataLogoCareer.vue';

// definir variables para los datos referentes de los campos de la API
const logo_carrera = ref({});
const name = ref("");
const url = ref("");

// funcion para obtener los datos de la API y asignarlos a las variables
const fetchInformationLogo= async () => {
    try {
        const response = await getSystemLogo();
        logo_carrera.value = response.logo_carrera || {};
        name.value = logo_carrera.value.name || "";
        url.value = logo_carrera.value.url || "";
        //console.log(logo_carrera.value)
    } catch (error) {
        console.error("Error fetching contact data:", error);
    }
}

// Cargar datos al montar el componente
onMounted(() => {
    fetchInformationLogo()
})
</script>
<template>
    <DataLogoCareer :carreras="name" :url="url" />
</template>
<style lang="scss" scoped></style>