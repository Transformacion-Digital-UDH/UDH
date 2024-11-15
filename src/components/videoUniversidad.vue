<script setup>
import { IconPlayerPlayFilled } from "@tabler/icons-vue";
import { ref } from "vue";

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

const showVideo = ref(false)

function openVideo() {
  showVideo.value = true;
}

function closeVideo() {
  showVideo.value = false;
}
</script>

<template>
  <div class="video-area relative w-full">
    <div class="bg-cover bg-fixed bg-center h-[400px] flex items-center justify-center "
      :style="{ backgroundImage: `url(${props.imageUrl})` }">
      <button @click="openVideo"
        class="play-btn flex items-center justify-center w-20 h-20 bg-black bg-opacity-60 rounded-full text-white text-3xl transition duration-300 hover:bg-opacity-80">
        <IconPlayerPlayFilled />
      </button>
    </div>

    <!-- Modal para mostrar el video de YouTube -->
    <div v-if="showVideo" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div class="relative w-full max-w-4xl">
        <button @click="closeVideo" class="absolute top-4 right-4 text-white text-4xl">
          &times;
        </button>
        <iframe :src="videoUrl" class="w-full h-[450px]" frameborder="0" allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
