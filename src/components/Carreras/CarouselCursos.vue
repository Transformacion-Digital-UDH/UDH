<template>
  <div class="mb-10">
    <Splide
      ref="splide"
      :options="carouselOptions"
      aria-label="Carrusel de Cursos"
    >
      <SplideSlide v-for="(curso, index) in cursos" :key="index">
        <div class="flex justify-center">
          <CursoPostIt :curso="curso" />
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import CursoPostIt from "./CursoPostIt.vue";

export default {
  components: {
    Splide,
    SplideSlide,
    CursoPostIt,
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
        pagination: false,
        gap: "0.5rem",
        perPage: 5,
        breakpoints: {
          1024: {
            perPage: 4,
          },
          768: {
            perPage: 3,
          },
          640: {
            perPage: 2,
          },
          360: {
            perPage: 1,
          },
        },
      },
    };
  },
  mounted() {
    const splideInstance = this.$refs.splide?.splide;
    if (splideInstance) {
      splideInstance.Components.Autoplay.play();
    }
  },
};
</script>
