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
              src="https://placehold.co/600x400"
              alt="Sobre nosotros"
              class="rounded-lg w-full shadow-lg relative z-10"
            />
            <!-- Marco verde -->
            <div class="green-border"></div>
            <!-- Marco negro -->
            <div class="black-border"></div>
            <!-- Play Button Overlay -->
            <button
              class="play-button absolute flex items-center justify-center z-20"
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
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-black text-2xl font-bold"
      >
        ✖
      </button>
      <div
        class="modal-content bg-white rounded-lg overflow-hidden relative shadow-lg animate-fadeIn"
      >
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

.green-border {
  position: absolute;
  top: -7%;
  left: -5%;
  width: 70%;
  height: 70%;
  border: 15px solid #2ebaa1;
  border-radius: 25px;
}

.black-border {
  position: absolute;
  bottom: -4%;
  right: -3%;
  width: 70%;
  height: 70%;
  background-color: #333333;
  clip-path: polygon(100% 0, 20% 100%, 100% 100%);
  border-bottom-right-radius: 25px;
}

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
  transform: translate(-50%, -50%); /* Center the button */
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1); /* Maintain centering on hover */
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

@media (max-width: 768px) {
  .green-border,
  .black-border {
    width: 95%;
    height: 95%;
    border-width: 8px;
  }

  .video-thumbnail {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .play-button {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .green-border,
  .black-border {
    width: 100%;
    height: 100%;
    border-width: 6px;
  }

  .video-thumbnail {
    border-radius: 8px;
  }

  .play-button {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>
