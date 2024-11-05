<script setup>
import { ref } from "vue";
import { IconPlayerPlayFilled } from "@tabler/icons-vue";
import ImageWithFrames from "@/components/ImageWithFrames.vue";

const showVideo = ref(false);
// CLAVITO Y SU CHELA JAAA
const videoUrl = ref("https://www.youtube.com/embed/CcZkn1QMcDI");

function openVideo() {
  showVideo.value = true;
}

function closeVideo() {
  showVideo.value = false;
}
</script>

<template>
  <div class="about-area py-16 bg-white flex justify-center">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div class="about-area py-16 bg-white">
        <div
          class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center"
        >
          <div class="relative">
            <ImageWithFrames
              imageUrl="https://placehold.co/600x400"
              greenBorderClass="absolute -top-2 -left-2 xs:-top-3 xs:-left-3 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 w-[120px] h-[120px] xs:w-[130px] xs:h-[130px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[300px] lg:h-[300px] border-[10px] sm:border-[15px] md:border-[17px] border-[#2ebaa1] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] z-0"
              blackBorderClass="absolute -bottom-2 -right-2 xs:-bottom-3 xs:-right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[280px] lg:h-[280px] bg-[#333333] z-0 clip-path rounded-br-[15px] lg:rounded-br-[17px] sm:rounded-br-[17px]"
            />
            <button
              class="play-button absolute flex items-center justify-center z-20"
              @click="openVideo"
            >
              <IconPlayerPlayFilled />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showVideo"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <button
        @click="closeVideo"
        class="absolute top-4 right-4 text-white text-4xl"
      >
        &times;
      </button>
      <div class="relative w-full max-w-4xl">
        <iframe
          :src="videoUrl"
          class="w-full h-[450px]"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.play-button {
  background-color: rgba(46, 186, 161, 0.9);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
