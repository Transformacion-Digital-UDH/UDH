<script setup>
import { ref, onMounted } from 'vue';
import dataInformationCareer from '@/components/dataInformationCareer.vue';
import { getInformationCareer } from '@/lib/carreras/sistemas/get-informationCareer';

// definir variables para los datos referentes de los campos de la API
const informacion = ref([]);


// funcion para obtener los datos de la API y asignarlos a las variables
const fetchInformationData = async () => {
    try {
        const informationData = await getInformationCareer();
        //console.log(informationData)
        informacion.value = informationData.informacion.data || [];
    } catch (error) {
        console.error("Error fetching contact data:", error);
    }
}

// Cargar datos al montar el componente
onMounted(() => {
    fetchInformationData()
})
</script>

<template>
    <dataInformationCareer :datas="informacion" />
</template>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>

