<!-- Carousel.vue -->
<template>
  <Splide :options="splideOptions" :class="['carousel-wrapper', heightClass]" ref="splideRef">
    <CarouselSlide
      v-for="(slide, index) in slides"
      :key="index"
      :backgroundImage="slide.backgroundImage"
      :subtitle="slide.subtitle"
      :title="slide.title"
      :highlightedText="slide.highlightedText"
      :description="slide.description"
      :buttonLabel="slide.buttonLabel"
    />
  </Splide>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Splide } from "@splidejs/vue-splide";
import CarouselSlide from "@/components/CarouselSlide.vue";
import "@splidejs/vue-splide/css";

const splideRef = ref(null);

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (value) => 
      value.every(slide => 
        slide.backgroundImage && 
        slide.subtitle && 
        slide.title && 
        slide.highlightedText && 
        slide.description
      ),
  },
  carouselHeight: {
    type: String,
    default: 'medium', // Puede ser 'small', 'medium', 'large'
  }
});

// Computed property para determinar la clase de altura
const heightClass = computed(() => {
  switch (props.carouselHeight) {
    case 'small':
      return 'h-[50dvh]';
    case 'medium':
      return 'h-[75dvh]';
    case 'large':
      return 'h-[105dvh]';
    default:
      return 'h-[75dvh]';
  }
});

const splideOptions = {
  type: "loop",
  autoplay: true,
  interval: 5000,
  speed: 1000,
  pauseOnHover: true,
  perPage: 1,
  perMove: 1,
  arrows: true,
  pagination: true,
  rewind: true,
  gap: '1rem',
  resetProgress: false,
  lazyLoad: true,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  drag: 'free',
  snap: true,
  width: '100%',
  height: '100%', // Ajustado para usar altura relativa
  transition: 'slide',
  breakpoints: {
    640: {
      arrows: false,
    }
  }
};

onMounted(() => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) {
    splideInstance.Components.Autoplay.play();
  }
});
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  position: relative;
}

:deep(.splide__track),
:deep(.splide__list),
:deep(.splide__slide) {
  height: 100% !important;
}

:deep(.splide__pagination) {
  bottom: 2rem;
}

:deep(.splide__pagination__page) {
  background: #ffffff;
  opacity: 0.7;
  margin: 0 5px;
}

:deep(.splide__pagination__page.is-active) {
  background: #22c55e;
  opacity: 1;
  transform: scale(1.2);
}

:deep(.splide__track) {
  overflow: visible;
}

:deep(.splide__arrow) {
  background: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
}

:deep(.splide__arrow svg) {
  width: 1.2rem;
  height: 1.2rem;
}

:deep(.splide__arrow:hover) {
  background: rgba(255, 255, 255, 0.95);
}
</style>