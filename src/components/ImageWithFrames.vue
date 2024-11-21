<script setup>
import { ref } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  aboutUs: {
    type: Boolean,
    default: false,
  },
  greenBorderClass: {
    type: String,
    required: false,
  },
  blackBorderClass: {
    type: String,
    required: false,
  },
  altText: {
    type: String,
    required: false,
    default: "Imagen de fondo",
  },
});

const isLoading = ref(false);

const handleImageLoad = () => {
  isLoading.value = true;
};
</script>

<template>
  <div
    v-if="aboutUs"
    class="lg:w-1/2 mb-8 sm:w-[600px] lg:mb-0 relative ml-4 mr-4 lg:ml-12 lg:mr-12"
  >
    <div class="relative">
      <div class="w-full h-full absolute top-0 left-0 z-10"></div>

      <img
        :src="imageUrl"
        alt="Sobre nosotros"
        class="rounded-lg w-full shadow-lg relative z-10"
        @load="handleImageLoad"
      />

      <div v-if="isLoading" :class="greenBorderClass"></div>
      <div v-if="isLoading" :class="blackBorderClass"></div>

      <div
        v-if="aboutUs"
        class="absolute bottom-20 xs:bottom-11 sm:bottom-20 md:bottom-32 lg:bottom-10 xl:bottom-20 -left-4 sm:-left-8 md:-left-10 lg:-left-8 xl:-left-8 bg-[#2ebaa1] p-3 md:p-4 rounded-lg lg:rounded-2xl shadow-lg text-white flex flex-col items-center z-20 h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]"
      >
        <div class="feature-icon flex justify-left mb-2 md:mb-3">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center"
          >
            <img
              src="../assets/images/shareImage.svg"
              alt="Icono de servicio"
              class="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
            />
          </div>
        </div>
        <div class="text-center font-epilogue">
          <b
            class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold"
          >
            {{ description }}
          </b>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="lg:w-2/2 mb-8 lg:mb-0 relative ml-4 mr-4 lg:ml-12 lg:mr-12"
  >
    <div class="relative">
      <div class="w-full h-full absolute top-0 left-0 z-10"></div>

      <img
        :src="imageUrl"
        :alt="altText"
        class="rounded-lg w-full shadow-lg relative z-10"
        @load="handleImageLoad"
      />

      <div v-if="isLoading" :class="greenBorderClass"></div>
      <div v-if="isLoading" :class="blackBorderClass"></div>

      <div
        v-if="aboutUs"
        class="absolute bottom-20 sm:bottom-20 md:bottom-32 lg:bottom-20 -left-4 sm:-left-8 md:-left-10 bg-[#2ebaa1] p-3 md:p-4 rounded-lg lg:rounded-2xl shadow-lg text-white flex flex-col items-center z-20 h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]"
      >
        <div class="feature-icon flex justify-left mb-2 md:mb-3">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center"
          >
            <img
              src="../assets/images/shareImage.svg"
              alt="Icono de servicio"
              class="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
            />
          </div>
        </div>
        <div class="text-center font-epilogue">
          <b
            class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold"
          >
            {{ description }}
          </b>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-path {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
</style>
