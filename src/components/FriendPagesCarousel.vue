<template>
    <section class="w-full h-auto bg-gray-100 py-10">
      <Splide :options="carouselOptions" class="overflow-hidden xl:mx-60 lg:mx-60 md:mx-32 sm:mx-20 mx-6 ">
        <SplideSlide v-for="(page, index) in pages" :key="index" class="!w-[150px]">
          <a :href="page.url" target="_blank" rel="noopener noreferrer">
            <img :src="page.image" :alt="page.name" class="rounded-lg shadow-lg" />
          </a>
        </SplideSlide>
      </Splide>
    </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { PropType } from 'vue';

const props = defineProps({
    pages: {
        type: Array as PropType<Array<{ name: string; url: string; image: string }>>,
        required: true,
    },
});

const carouselOptions = {
    type: 'loop',
    autoplay: true,
    arrows: false,
    interval: 1500,
    pauseOnHover: true,
    pagination: false,
    perPage: 5, 
    gap: '1.5rem',
    breakpoints: {
        360: { perPage: 2 },
        640: { perPage: 2 },
        768: { perPage: 2 },
        1024: { perPage: 3 },
        1280: { perPage: 4 },
        1536: { perPage: 4 },
    },
};
</script>

<style scoped>
</style>
