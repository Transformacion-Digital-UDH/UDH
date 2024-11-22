<script setup>
import { ref, onMounted } from 'vue';
import { getdataNumtInfo } from '@/lib/get-dataNum-info';

const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

// Variables para almacenar los datos numéricos y contadores
const datosNumericos = ref([]);
const counterValues = ref([]);

// Función para obtener datos de la API
const fetchNumericData = async () => {
  try {
    const response = await getdataNumtInfo();
    const fetchedData = response.datos_numericos || [];

    // Asignar datos a las variables
    datosNumericos.value = fetchedData;
    counterValues.value = fetchedData.map(() => 0); // Inicializar contadores como un array de ceros

    // Iniciar animación de los contadores
    fetchedData.forEach((item, index) => {
      animateCounter(index, item.numero);
    });
  } catch (error) {
    console.error("Error fetching numeric data:", error);
  }
};

// Función para animar los contadores
function animateCounter(index, target) {
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 100)); // Incremento mínimo de 1
  const interval = setInterval(() => {
    if (current >= target) {
      counterValues.value[index] = target; // Asigna el valor final
      clearInterval(interval);
    } else {
      current += increment;
      counterValues.value[index] = current; // Actualiza el valor del contador
    }
  }, 20); // Intervalo de 20ms para animar
}

// Llamar a la función al montar el componente
onMounted(() => {
  fetchNumericData();
});

</script>

<template>
  <div class="counter-area">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center">
        <!-- Generar cajas dinámicamente -->
        <div
          v-for="(dato, index) in datosNumericos"
          :key="dato.id"
          class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 relative"
        >
          <div class="counter-box text-center p-6 rounded-lg bg-white relative overflow-hidden">
            <!-- Ícono -->
            <div class="icon mb-4 mx-auto flex items-center justify-center relative z-10">
              <img :src="`${baseApiUrl}${dato.icono.url}`" alt="Icon" class="w-12 h-12 filter brightness-0 invert" />
            </div>
            <!-- Contador y etiqueta -->
            <div class="relative z-10">
              <span class="counter text-3xl font-bold text-teal-600">{{ counterValues[index] }}</span>
              <h6 class="title text-gray-700 mt-2">{{ dato.etiqueta }}</h6>
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
