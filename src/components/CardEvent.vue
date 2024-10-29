<!-- EventList.vue -->
<template>
  <div class="bg-gray-100 py-8">
    <!-- Contenedor de las tarjetas, centrado y en fila de 3 columnas -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
    >
      <!-- Iteración sobre el array de eventos para mostrar tarjetas con contenido independiente -->
      <div
        v-for="(event, index) in events"
        :key="index"
        class="bg-white rounded-lg shadow-md max-w-md mx-auto border border-gray-200 overflow-hidden"
      >
        <!-- Ubicación del evento -->
        <div
          class="bg-white p-3 text-green-custom flex items-center rounded-t-lg"
        >
          <IconMapPin size="20" class="mr-2" /> {{ event.location }}
        </div>

        <!-- Contenedor de la imagen con padding interno -->
        <div class="p-4">
          <div class="event-img bg-white rounded-lg overflow-hidden">
            <img
              :src="event.image"
              alt="Imagen del evento"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        <!-- Información del evento -->
        <div class="p-5">
          <!-- Metadatos del evento -->
          <div class="text-gray-500 text-sm mb-4 flex items-center space-x-4">
            <span class="flex items-center">
              <IconCalendar size="18" class="mr-2" /> {{ event.date }}
            </span>
            <span class="flex items-center">
              <IconClock size="18" class="mr-2" /> {{ event.time }}
            </span>
          </div>

          <!-- Título del evento (ajuste de margen inferior) -->
          <h4 class="text-xl font-semibold text-gray-800 h-12 overflow-hidden">
            <a href="event-single.html" class="hover:text-green-custom">{{
              event.title
            }}</a>
          </h4>

          <!-- Descripción del evento -->
          <p class="text-gray-600 text-base mb-5 h-16 overflow-hidden">
            {{ event.description }}
          </p>

          <!-- Botón de unirse al evento -->
          <div>
            <a
              :href="event.link"
              class="inline-flex items-center bg-green-custom text-white px-5 py-3 rounded-md text-base font-medium hover:bg-green-600 transition"
            >
              Unirte <IconArrowRight size="18" class="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconMapPin,
  IconCalendar,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-vue";

// Datos de los eventos con contenido independiente
const events = [
  {
    location: "Virtual",
    image: "../../images/evento_1.jpg",
    date: "16 Abril, 2024",
    time: "10:00AM - 01:00PM",
    title: "Data Science Virtual",
    description:
      "Participa en nuestro evento virtual dirigido a aquellos que están interesados por el mundo de la Data Sciencie.",
    link: "event-single.html",
  },
  {
    location: "Auditorio Central",
    image: "../../images/evento_2.jpg",
    date: "20 Mayo, 2024",
    time: "9:00AM - 12:00PM",
    title: "Conferencia de IA",
    description:
      "No te pierdas esta oportunidad de actualizarte y compartir experiencias con colegas y profesionales del área y decidir tu futuro.",
    link: "event-single.html",
  },
  {
    location: "Online",
    image: "../../images/evento_3.jpg",
    date: "5 Junio, 2024",
    time: "2:00PM - 5:00PM",
    title: "Introducción a Big Data",
    description:
      "Estamos emocionados de anunciar que se acerca la fiesta conmemorativa por el Aniversario de nuestro Programa Académico de Ingeniería de Sistemas e Informática.",
    link: "event-single.html",
  },
];
</script>

<style scoped>
/* Estilo para estandarizar el tamaño de la imagen */
.event-img img {
  width: 100%;
  height: 22rem; /* Altura fija para estandarizar la imagen */
  object-fit: cover;
}

/* Estandarización de altura de títulos y descripción para alineación uniforme */
h4 {
  height: 3rem; /* Altura fija para el título */
  overflow: hidden;
}

p {
  height: 10rem; /* Altura fija para la descripción */
  overflow: hidden;
}
</style>
