<script>
export default {
  name: "VideoBanner",
  props: {
    videoUrl: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    openVideo() {
      this.showVideo = true;
    },
    closeVideo() {
      this.showVideo = false;
    },
  },
};
</script>

<template>
  <div class="video-area relative w-full">
    <div
      class="bg-cover bg-fixed bg-center h-[400px] flex items-center justify-center"
      style="background-image: url('images/zbXuxBLyha8R.jpg')"
    >
      <button
        @click="openVideo"
        class="play-btn flex items-center justify-center w-20 h-20 bg-black bg-opacity-60 rounded-full text-white text-3xl transition duration-300 hover:bg-opacity-80"
      >
        <i class="fas fa-play"></i>
      </button>
    </div>

    <!-- Modal para mostrar el video de YouTube -->
    <div
      v-if="showVideo"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="relative w-full max-w-4xl">
        <button
          @click="closeVideo"
          class="absolute top-4 right-4 text-white text-4xl"
        >
          &times;
        </button>
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
/* Añade las clases de FontAwesome para el ícono si no lo tienes configurado en Tailwind */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
