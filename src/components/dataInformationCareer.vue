<script setup>
const props = defineProps({
    datas: {
        type: Object,
        required: true,
        default: () => [
            { icono: '', titulo: '', descripcion: '', titulo:'' }
        ],
    },
});
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;
</script>

<template>
    <div class="m-6 pt-10 pb-10 font-epilogue">
        <h4 class="section-title mb-10 font-black text-sm xs:text-sm sm:text-lg xl:text-xl">
            Información de la carrera
        </h4>
        <div class="flex mt-4 text-xs xs:text-sm sm:text-sm xl:text-lg" v-for="(data, index) in datas" :key="index">
            <div class="circle-border p-2 ">
                <img :src="`${baseApiUrl}${data.icono.url}`" :alt="data.icono.name" class="w-[250px]">
            </div>
            <div class="ml-4 mt-3.5 xs:mt-3 sm:mt-2 lg:mt-3 xl:mt-1">
                <h6 class="font-bold">{{ data.titulo }}</h6>
                <span>{{ data.descripcion }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
}

#flex-container>.flex-item {
    -webkit-flex: auto;
    flex: auto;
}

#flex-container>.raw-item {
    width: 5rem;
}

.section-title {
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 3px;
    border-bottom: 3px solid #2ebaa1;
}

.circle-border {
    width: 60px;
    height: 60px;
    border: 2px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    background: white;
    /* Degradado en el borde */
    color: #2ebaa1;
    /* Color del icono */
}

.circle-border i {
    background: #2ebaa1;
    /* Fondo blanco para ícono */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1em;
}
</style>
