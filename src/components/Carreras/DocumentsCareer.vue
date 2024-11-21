<template>
    <DataDocuments :datas="documentos" />
</template>

<script setup>
import DataDocuments from './DataDocuments.vue';
import { ref, onMounted } from 'vue';
import { getDocumentsSystem } from '@/lib/carreras/get-documentsSystem';
// definir variables para los datos referentes de los campos de la API
const documentos = ref([]);


// funcion para obtener los datos de la API y asignarlos a las variables
const fetchInformationDocumentss = async () => {
    try {
        const documentsData = await getDocumentsSystem();
        console.log(documentos)
        documentos.value = documentsData.documentos || [];
    } catch (error) {
        console.error("Error fetching contact data:", error);
    }
}

// Cargar datos al montar el componente
onMounted(() => {
    fetchInformationDocumentss()
})
</script>