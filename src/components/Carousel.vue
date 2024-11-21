<script setup lang="ts">
import { ref, onMounted, computed, type PropType } from "vue";
import { Splide } from "@splidejs/vue-splide";
import CarouselSlide from "@/components/CarouselSlide.vue";
import "@splidejs/vue-splide/css";

interface Slide {
  titulo: string;
  subtitulo_1: string;
  subtitulo_2: string;
  descripcion: string;
  imagen: {
    url: string;
  };
}

// Props
const props = defineProps({
  fetchSlides: {
    type: Function as PropType<() => Promise<{ imagenes_carousel: Slide[] }>>,
    required: true, 
  },
  carouselHeight: {
    type: String,
    default: "medium",
  },
});

// Estado
const slides = ref<{
  backgroundImage: string;
  subtitle: string;
  title: string;
  highlightedText: string;
  description: string;
  buttonLabel: string;
}[]>([]);

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
  arrows: true,
  pagination: false,
  rewind: true,
  lazyLoad: true,
  width: "100%",
  height: "100%",
};

onMounted(async () => {
  try {
    const data = await props.fetchSlides();
    slides.value = data.imagenes_carousel.map((item) => ({
      backgroundImage: `https://udhback.sistemasudh.com${item.imagen.url || ""}`,
      subtitle: item.subtitulo_1 || "",
      title: item.titulo || "",
      highlightedText: item.subtitulo_2 || "",
      description: item.descripcion || "",
      buttonLabel: "Conoce más",
    }));
  } catch (error) {
    console.error("Error fetching carousel slides:", error);
  }
});
</script>

<template>
  <Splide
    :options="splideOptions"
    :class="['carousel-wrapper', heightClass]"
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
