<template>
  <TitleSection subtitle1="Boletin Informativo &" subtitle2="Noticias" />
  <div class="bg-white py-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
    >
      <div
        v-for="(event, index) in events"
        :key="index"
        class="bg-rgray-custom text-white rounded-lg shadow-md max-w-md mx-auto border border-gray-700 overflow-hidden"
      >
        <div class="p-4">
          <div class="event-img bg-rgray-custom rounded-lg overflow-hidden">
            <img
              :src="event.image"
              alt="Imagen del evento"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        <div class="p-5">
          <div class="text-gray-400 text-sm mb-4 flex items-center space-x-4">
            <span class="flex items-center">
              <IconCalendar size="18" class="mr-2" /> {{ event.date }}
            </span>
          </div>

          <h4 class="text-xl font-semibold text-white h-12 overflow-hidden">
            <a href="event-single.html" class="hover:text-green-custom">{{
              event.title
            }}</a>
          </h4>

          <p class="text-gray-300 text-base mb-5 h-16 overflow-hidden">
            {{ event.description }}
          </p>

          <div>
            <ButtonPrimarySecondEffect
              label="Unirte"
              class="px-7 py-[10px] w-[110px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleSection from "@/components/TitleSection.vue";
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
    image: "../../imagesSlider/doc1.png",
    date: "16 Abril, 2024",
    title:
      "Declaracion jurada cambio de modalidad de presencial a semipresencial",
    description:
      "Estimados alumnos le damos a conocer la presente Resolucion de Cambio de Modalidad de Presencial a Semipresencial",
    link: "event-single.html",
  },
  {
    location: "Auditorio Central",
    image: "../../imagesSlider/doc2.png",
    date: "20 Mayo, 2024",
    title: "Resolucion de cambio de modalidad de presencial - semipresencial",
    description:
      "No te pierdas esta oportunidad de actualizarte y compartir experiencias con colegas y profesionales del área y decidir tu futuro.",
    link: "event-single.html",
  },
  {
    location: "Online",
    image: "../../imagesSlider/doc3.png",
    date: "5 Junio, 2024",
    title: "RESOLUCIÓN Nª 504-2019-P-CD-UDH",
    description:
      "Estamos emocionados de anunciar que se acerca la fiesta conmemorativa por el Aniversario de nuestro Programa Académico.",
    link: "event-single.html",
  },
  {
    location: "Online",
    image: "../../imagesSlider/doc4.png",
    date: "5 Junio, 2024",
    title:
      "Declaracion jurada cambio de modalidad de presencial a semipresencial",
    description:
      "Estimados alumnos le damos a conocer la Declaracion Jurada de Cambio de Modalidad de Presencial a Semipresencial",
    link: "event-single.html",
  },
];
</script>

<style scoped>
.event-img img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
}

h4 {
  height: 8rem;
  overflow: hidden;
}

p {
  height: 10rem;
  overflow: hidden;
}
</style>
