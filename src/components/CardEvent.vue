<!-- EventList.vue -->
<template>
  <div class="bg-gray-100 py-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
    >
      <!-- Iteración sobre el array de eventos para mostrar tarjetas con contenido independiente -->
      <div
        v-for="(event, index) in events"
        :key="index"
        class="card relative rounded-lg shadow-md max-w-md mx-auto overflow-hidden"
      >
        <div class="p-5 bg-gray-900 text-black rounded-lg">
          <div
            class="bg-transparent p-3 text-green-custom flex items-center rounded-t-lg z-10 relative"
          >
            <IconMapPin size="20" class="mr-2" /> {{ event.location }}
          </div>

          <div class="p-4 relative z-10">
            <div class="event-img bg-white rounded-lg overflow-hidden">
              <img
                :src="event.image"
                alt="Imagen del evento"
                class="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div class="p-5 relative z-10">
            <div
              class="text-green-custom text-sm mb-4 flex items-center space-x-4"
            >
              <span class="flex items-center">
                <IconCalendar size="18" class="mr-2" /> {{ event.date }}
              </span>
              <span class="flex items-center">
                <IconClock size="18" class="mr-2" /> {{ event.time }}
              </span>
            </div>

            <h4 class="text-xl font-semibold text-black h-12 overflow-hidden">
              <a href="event-single.html" class="hover:text-green-custom">{{
                event.title
              }}</a>
            </h4>

            <p class="text-black text-base mb-5 h-16 overflow-hidden">
              {{ event.description }}
            </p>

            <div>
              <ButtonPrimarySecondEffect
                label="Unirte"
                class="px-7 py-[10px] w-[110px]"
                :icon="IconArrowRight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimarySecondEffect from "@/components/ButtonPrimarySecondEffect.vue";
import {
  IconMapPin,
  IconCalendar,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-vue";

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
.card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 130%;
  background-image: linear-gradient(
    180deg,
    rgb(46, 186, 161),
    rgb(46, 186, 161)
  );
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
  z-index: 0;
}

.card::after {
  content: "";
  position: absolute;
  inset: 5px;
  background: #ffffff;
  border-radius: 15px;
  z-index: 1;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Ajuste para imagen del evento */
.event-img img {
  width: 100%;
  height: 22rem;
  object-fit: cover;
}

/* Estilos de altura para el título y la descripción */
h4 {
  height: 3rem;
  overflow: hidden;
}

p {
  height: 10rem;
  overflow: hidden;
}
</style>
