<script setup>
import { ref, onMounted } from 'vue';
import { IconAlbum, IconUserCheck, IconSchool, IconTrophyFilled } from '@tabler/icons-vue';
import { loadFull } from "tsparticles";
import Particles from "vue3-particles";

const targetValues = [24, 8000, 100, 30];
const counterValues = ref([0, 0, 0, 0]);
const showParticles = ref([false, false, false, false]);

// Configuración de partículas
const particlesOptions = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#2ebaa1",
    },
    links: {
      color: "#2ebaa1",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

// Inicialización de partículas
const particlesInit = async engine => {
  await loadFull(engine);
};

onMounted(() => {
  targetValues.forEach((value, index) => {
    animateCounter(index, value);
  });
});

function animateCounter(index, target) {
  let current = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    if (current >= target) {
      counterValues.value[index] = target;
      clearInterval(interval);
    } else {
      current += increment;
      counterValues.value[index] = current;
    }
  }, 20);
}

function toggleParticles(index, state) {
  showParticles.value[index] = state;
}
</script>

<template>
  <div class="counter-area">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center">
        <!-- Caja 1 -->
        <div
          class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 relative"
          @mouseover="toggleParticles(0, true)"
          @mouseleave="toggleParticles(0, false)"
        >
          <div class="counter-box text-center p-6 rounded-lg shadow-md bg-white relative overflow-hidden">
            <div v-if="showParticles[0]" class="particles-container">
              <Particles
                :id="'particles-0'"
                :particlesInit="particlesInit"
                :options="particlesOptions"
              />
            </div>
            <div class="icon mb-4 mx-auto flex items-center justify-center relative z-10">
              <IconAlbum color="white" size="45"/>
            </div>
            <div class="relative z-10">
              <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[0] }}</span>
              <h6 class="title text-gray-700 mt-2">+ Total carreras</h6>
            </div>
          </div>
        </div>
        
        <!-- Caja 2 -->
        <div
          class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 relative"
          @mouseover="toggleParticles(1, true)"
          @mouseleave="toggleParticles(1, false)"
        >
          <div class="counter-box text-center p-6 rounded-lg shadow-lg bg-white relative overflow-hidden">
            <div v-if="showParticles[1]" class="particles-container">
              <Particles
                :id="'particles-1'"
                :particlesInit="particlesInit"
                :options="particlesOptions"
              />
            </div>
            <div class="icon mb-4 mx-auto flex items-center justify-center relative z-10">
              <IconSchool color="white" size="45"/>
            </div>
            <div class="relative z-10">
              <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[1] }}</span>
              <h6 class="title text-gray-700 mt-2">+ Estudiantes</h6>
            </div>
          </div>
        </div>

        <!-- Caja 3 -->
        <div
          class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 relative"
          @mouseover="toggleParticles(2, true)"
          @mouseleave="toggleParticles(2, false)"
        >
          <div class="counter-box text-center p-6 rounded-lg shadow-lg bg-white relative overflow-hidden">
            <div v-if="showParticles[2]" class="particles-container">
              <Particles
                :id="'particles-2'"
                :particlesInit="particlesInit"
                :options="particlesOptions"
              />
            </div>
            <div class="icon mb-4 mx-auto flex items-center justify-center relative z-10">
              <IconUserCheck color="white" size="45"/>
            </div>
            <div class="relative z-10">
              <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[2] }}</span>
              <h6 class="title text-gray-700 mt-2">+ Profesores capacitados</h6>
            </div>
          </div>
        </div>

        <!-- Caja 4 -->
        <div
          class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 relative"
          @mouseover="toggleParticles(3, true)"
          @mouseleave="toggleParticles(3, false)"
        >
          <div class="counter-box text-center p-6 rounded-lg shadow-lg bg-white relative overflow-hidden">
            <div v-if="showParticles[3]" class="particles-container">
              <Particles
                :id="'particles-3'"
                :particlesInit="particlesInit"
                :options="particlesOptions"
              />
            </div>
            <div class="icon mb-4 mx-auto flex items-center justify-center relative z-10">
              <IconTrophyFilled color="white" size="45"/>
            </div>
            <div class="relative z-10">
              <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[3] }}</span>
              <h6 class="title text-gray-700 mt-2">+ Competencias</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  background: rgb(46, 186, 161);
}

.counter-box {
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: transform 0.3s ease;
}

.counter-box:hover {
  transform: translateY(-5px);
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

@media (min-width: 640px) {
  .icon {
    font-size: 50px;
    width: 90px;
    height: 90px;
  }
}

@media (min-width: 1024px) {
  .icon {
    font-size: 60px;
    width: 100px;
    height: 100px;
  }
}
</style>