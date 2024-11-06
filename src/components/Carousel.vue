<template>
  <Splide
    :options="splideOptions"
    :class="['carousel-wrapper', heightClass]"
    ref="splideRef"
  >
    <CarouselSlide
      v-for="(slide, index) in slides"
      :key="index"
      :backgroundImage="slide.backgroundImage"
      :subtitle="slide.subtitle"
      :title="slide.title"
      :highlightedText="slide.highlightedText"
      :description="slide.description"
      :buttonLabel="slide.buttonLabel"
      :minheight="heightClass"
    />
  </Splide>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Splide } from "@splidejs/vue-splide";
import CarouselSlide from "@/components/CarouselSlide.vue";
import "@splidejs/vue-splide/css";

const splideRef = ref(null);

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (slide) =>
          slide.backgroundImage &&
          slide.subtitle &&
          slide.title &&
          slide.highlightedText &&
          slide.description
      ),
  },
  carouselHeight: {
    type: String,
    default: "medium",
  },
});

const heightClass = computed(() => {
  switch (props.carouselHeight) {
    case "small":
      return "h-[50dvh]";
    case "medium":
      return "h-[75dvh]";
    case "large":
      return "h-[105dvh]";
    default:
      return "h-[75dvh]";
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
  pagination: false,
  rewind: true,
  gap: "1rem",
  resetProgress: false,
  lazyLoad: true,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  drag: "free",
  snap: true,
  width: "100%",
  height: "100%",
  transition: "slide",
  breakpoints: {
    640: {
      arrows: false,
    },
  },
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
</style>
