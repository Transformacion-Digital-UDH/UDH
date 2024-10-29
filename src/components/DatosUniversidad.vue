<template>
    <div class="counter-area">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center shadow-lg">
          <!-- Caja 1 -->
          <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div class="counter-box text-center p-6 rounded-lg">
              <div class="icon mb-4 mx-auto flex items-center justify-center">
                <Icon123 />
              </div>
              <div>
                <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[0] }}</span>
                <h6 class="title text-gray-700 mt-2">+ Total carreras</h6>
              </div>
            </div>
          </div>
          <!-- Caja 2 -->
          <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div class="counter-box text-center bg-white p-6 rounded-lg">
              <div class="icon mb-4 mx-auto flex items-center justify-center">
                <IconBrandWhatsapp />
              </div>
              <div>
                <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[1] }}</span>
                <h6 class="title text-gray-700 mt-2">+ Estudiantes</h6>
              </div>
            </div>
          </div>
          <!-- Caja 3 -->
          <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div class="counter-box text-center bg-white p-6 rounded-lg">
              <div class="icon mb-4 mx-auto flex items-center justify-center">
                <Icon123 />
              </div>
              <div>
                <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[2] }}</span>
                <h6 class="title text-gray-700 mt-2">+ Profesores capacitados</h6>
              </div>
            </div>
          </div>
          <!-- Caja 4 -->
          <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div class="counter-box text-center bg-white p-6 rounded-lg">
              <div class="icon mb-4 mx-auto flex items-center justify-center">
                <Icon123 />
              </div>
              <div>
                <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[3] }}</span>
                <h6 class="title text-gray-700 mt-2">+ Competencias</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Icon123, IconBrandWhatsapp } from '@tabler/icons-vue';
  
  const targetValues = [24, 8000, 100, 30];
  const counterValues = ref([0, 0, 0, 0]);
  
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
  </script>
  
  <style>
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: var(--color-white);
    background: var(--theme-color, teal);
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
  