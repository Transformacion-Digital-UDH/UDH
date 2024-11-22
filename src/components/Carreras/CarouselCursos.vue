<template>
  <div class="text-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8 text-center text-green-custom">Cursos de la carrera</h2>
      <Splide
        ref="splide"
        :options="carouselOptions"
        aria-label="Ciclos Académicos"
        class="courses-carousel"
      >
        <SplideSlide v-for="(curso, index) in cursos" :key="index" class="p-4">
          <div class="bg-white rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <div class="bg-green-custom text-white p-4 rounded-t-2xl">
              <h3 class="text-2xl font-bold text-center">{{ curso.titulo }}</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li 
                  v-for="(course, courseIndex) in curso.courses" 
                  :key="courseIndex"
                  class="flex items-center text-gray-custom"
                >
                  <svg class="w-5 h-5 mr-3 text-green-custom" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ course }}
                </li>
              </ul>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    cursos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      carouselOptions: {
        type: "loop",
        autoplay: true,
        arrows: false,
        interval: 3000,
        pauseOnHover: true,
        pagination: true,
        perPage: 3,
        gap: '1rem',
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 }
        }
      }
    };
  },
  mounted() {
    const splideInstance = this.$refs.splide?.splide;
    if (splideInstance) {
      splideInstance.Components.Autoplay.play();
    }
  }
};
</script>

<style>

.courses-carousel .splide__pagination__page {
  background: #2EBAA1;
  opacity: 0.4;
}
.courses-carousel .splide__pagination__page.is-active {
  opacity: 1;
}
</style>