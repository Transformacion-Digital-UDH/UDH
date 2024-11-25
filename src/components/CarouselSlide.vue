<template>
  <SplideSlide>
    <div
      :class="[
        'hero-single relative flex items-center justify-center bg-cover bg-center',
        minheight,
      ]"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-70"></div>

      <div class="container relative z-10 mx-auto px-4">
        <div
          class="text-left text-white max-w-2xl space-y-4 md:space-y-6 lg:space-y-8 p-4"
        >
          <h6
            class="text-lg md:text-xl text-green-custom lg:text-2xl font-semibold animate-fadeInDown"
            style="animation-delay: 0.25s"
          >
            {{ subtitle }}
          </h6>
          <h1
            class="text-2xl md:text-4xl lg:text-5xl font-bold animate-fadeInRight"
            style="animation-delay: 0.5s"
          >
            {{ title }}
            <span class="text-green-custom">{{ highlightedText }}</span>
          </h1>
          <p
            class="text-base md:text-lg lg:text-xl animate-fadeInLeft"
            style="animation-delay: 0.75s"
          >
            {{ description }}
          </p>
          <LinkPrimarySecondEffect
            :label="buttonLabel"
            class="px-7 py-[10px] w-[110px]"
          />
        </div>
      </div>
    </div>
  </SplideSlide>
</template>

<script setup>
import { SplideSlide } from "@splidejs/vue-splide";
import LinkPrimarySecondEffect from "@/components/LinkPrimarySecondEffect.vue";

defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  highlightedText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
    default: "Conoce más",
  },
  minheight: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
