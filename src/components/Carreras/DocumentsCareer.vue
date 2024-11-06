<template>
    <DataDocuments :datas="docs" />
</template>

<script setup lang="ts">
import DataDocuments from "@/components/Carreras/DataDocuments.vue";
const docs = [
    {
        name: "Plan de estudios",
        url: "https://template-udh.onrender.com/carrera/pdf/P06.pdf",
    },
    {
        name: "Malla curricular",
        url: "https://template-udh.onrender.com/carrera/pdf/mallaingsistemas.pdf",
    }
]
</script>