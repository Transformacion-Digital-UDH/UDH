<script setup>
import { IconPlayerPlayFilled } from "@tabler/icons-vue";
import { ref, onMounted } from "vue";
import { getVideoInfo } from "@/lib/get-video-info";

const videoData = ref({
  videoUrl: "",
  imageUrl: "",
});
const showVideo = ref(false);

const fetchVideoData = async () => {
  try {
    const data = await getVideoInfo();
    const videoPrincipal = data.video_principal;

    videoData.value = {
      videoUrl: videoPrincipal.link_video.replace("watch?v=", "embed/") || "",
      imageUrl: `https://udhback.sistemasudh.com${videoPrincipal.imagen_fondo?.url || ""}`,
    };
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
};

onMounted(fetchVideoData);

function openVideo() {
  showVideo.value = true;
}

function closeVideo() {
  showVideo.value = false;
}
</script>

<template>
  <div v-if="videoData.videoUrl && videoData.imageUrl" class="video-area relative w-full">
    <div
      class="bg-cover bg-fixed bg-center h-[400px] flex items-center justify-center"
      :style="{ backgroundImage: `url(${videoData.imageUrl})` }"
    >
      <button
        @click="openVideo"
        class="play-btn flex items-center justify-center w-20 h-20 bg-black bg-opacity-60 rounded-full text-white text-3xl transition duration-300 hover:bg-opacity-80"
      >
        <IconPlayerPlayFilled />
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
          :src="videoData.videoUrl"
          class="w-full h-[450px]"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
