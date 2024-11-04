<script setup>
import { ref } from "vue";
import { IconPlayerPlayFilled } from "@tabler/icons-vue";

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div class="about-area py-16 bg-white flex justify-center">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div class="relative">
        <div class="relative flex justify-center">
          <div class="video-content" @click="openModal">
            <!-- Video Placeholder with Play Button -->
            <img
              src="https://via.placeholder.com/600x400"
              alt="Sobre nosotros"
              class="rounded-lg w-full shadow-lg relative z-10"
            />
            <!-- Marco verde -->
            <div
              class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 lg:-top-5 lg:-left-5 xl:-top-10 xl:-left-10 2xl:-top-10 2xl:-left-10 w-[200px] h-[300px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] border-[10px] sm:border-[15px] md:border-[17px] border-[#2ebaa1] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px]"
            ></div>
            <!-- Marco negro -->
            <div
              class="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-[200px] h-[240px] sm:w-[250px] sm:h-[280px] md:w-[300px] md:h-[320px] lg:w-[300px] lg:h-[300px] bg-[#333333] clip-path rounded-br-[15px] lg:rounded-br-[17px] sm:rounded-br-[17px]"
            ></div>
            <!-- Play Button Overlay -->
            <button
              class="play-button absolute inset-0 flex items-center justify-center z-20"
            >
              <IconPlayerPlayFilled />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Video -->
    <div
      v-if="showModal"
      class="modal-overlay fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity"
    >
      <div
        class="modal-content bg-white rounded-lg overflow-hidden relative shadow-lg animate-fadeIn"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-black text-2xl font-bold"
        >
          ✖
        </button>
        <!-- Video -->
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          autoplay
          class="w-full h-full rounded-lg"
        ></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-path {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.video-thumbnail {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 3 / 2;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

.play-button {
  background-color: rgba(46, 186, 161, 0.9);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  left: 265px;
  top: 170px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.modal-overlay {
  animation: fadeIn 0.3s;
}

.modal-content {
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 600px;
  position: relative;
}

.modal-content video {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
