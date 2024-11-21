<script setup>
import { ref, onMounted } from 'vue';
import { getSystemLogo } from '@/lib/carreras/sistemas/get-logoSystem';

// definir variables para los datos referentes de los campos de la API
const logo_carrera = ref([]);
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

// funcion para obtener los datos de la API y asignarlos a las variables
const fetchLogoData = async () => {
    try {
        const LogoData = await getSystemLogo();

        logo_carrera.value = LogoData.logo_carrera || [];
    } catch (error) {
        console.error("Error fetching contact data:", error);
    }
}

// Cargar datos al montar el componente
onMounted(() => {
    fetchLogoData()
})
</script>

<template>
        <div class="column ml-2 flex-col p-4">
            <img :src="`${baseApiUrl}${logo_carrera.url}`" :alt="logo_carrera.name">
        </div>
</template>

<style scoped>
.line {
    width: 3px;
    height: 80px;
    background-color: #000;
}

.line2 {
    width: 3px;
    height: 60px;
    background-color: #000;
}

.faculty-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
}

.column {
    flex: 1;
    display: flex;
    align-items: center;
}

.column h2,
.column h3 {
    text-align: left;
    font-family: epilogue;
    font-weight: bold;
}

.column h2 {
    font-size: 1em;
}

.column h3 {
    font-size: 0.9em;
}
</style>