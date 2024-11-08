<script setup>
import dataInformationCareer from '@/components/dataInformationCareer.vue';
</script>

<template>
    <dataInformationCareer :datas="[
        { icon: 'fas fa-graduation-cap', titulo: 'FACULTAD', descripcion: 'Ingenieria' },
        { icon: 'fas fa-users', titulo: 'VACANTES 2025', descripcion: '20 estudiantes' },
        { icon: 'fas fa-clock', titulo: 'DURACION DE LA CARRERA', descripcion: '05 años' },
        { icon: 'fas fa-dollar', titulo: 'Pension', descripcion: 'S/. 468.12' }
    ]" />
</template>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>

