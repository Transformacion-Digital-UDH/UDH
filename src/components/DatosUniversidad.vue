<script setup>
import { ref, onMounted } from 'vue';
import { IconAlbum, IconUserCheck, IconSchool, IconTrophyFilled } from '@tabler/icons-vue';

const targetValues = [24, 8000, 100, 30];
const counterValues = ref([0, 0, 0, 0]);
const showParticles = ref([false, false, false, false]); // Control de partículas para cada caja

// Animación del contador
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

// Función para mostrar/ocultar partículas
function toggleParticles(index, state) {
  showParticles.value[index] = state;
}

// Configuración de partículas
const particleOptions = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00aaff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outMode: "bounce",
    },
  },
  detectRetina: true,
};
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
          <div class="counter-box text-center p-6 rounded-lg relative overflow-hidden">
            <Particles v-if="showParticles[0]" :options="particleOptions" class="absolute inset-0 z-0 pointer-events-none" />
            <div class="icon mb-4 mx-auto flex items-center justify-center z-10">
              <IconAlbum color="white" size="45"/>
            </div>
            <div class="z-10">
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
          <div class="counter-box text-center p-6 rounded-lg relative overflow-hidden">
            <Particles v-if="showParticles[1]" :options="particleOptions" class="absolute inset-0 z-0 pointer-events-none" />
            <div class="icon mb-4 mx-auto flex items-center justify-center z-10">
              <IconSchool color="white" size="45"/>
            </div>
            <div class="z-10">
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
          <div class="counter-box text-center p-6 rounded-lg relative overflow-hidden">
            <Particles v-if="showParticles[2]" :options="particleOptions" class="absolute inset-0 z-0 pointer-events-none" />
            <div class="icon mb-4 mx-auto flex items-center justify-center z-10">
              <IconUserCheck color="white" size="45"/>
            </div>
            <div class="z-10">
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
          <div class="counter-box text-center p-6 rounded-lg relative overflow-hidden">
            <Particles v-if="showParticles[3]" :options="particleOptions" class="absolute inset-0 z-0 pointer-events-none" />
            <div class="icon mb-4 mx-auto flex items-center justify-center z-10">
              <IconTrophyFilled color="white" size="45"/>
            </div>
            <div class="z-10">
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