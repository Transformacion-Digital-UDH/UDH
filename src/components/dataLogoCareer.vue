<script setup>
const props = defineProps({
    url: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
});

const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;
</script>

<template>
    <div class="faculty-logo">
        <div class="column ml-2 flex-col p-5">
            <img :src="`${baseApiUrl}${url}`" :alt="name">
        </div>
    </div>
</template>

<style scoped></style>