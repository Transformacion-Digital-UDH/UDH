<!-- App.vue -->
<script setup lang="ts">
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import CardEvent from "./components/CardEvent.vue";

// Datos de ejemplo para los eventos

// const events = [
//   {
//     eventTitle: "Conferencia de Tecnología e Innovación",
//     location: "Auditorio Central, Universidad",
//     date: "20 Nov 2023",
//     time: "10:00 AM",
//     description:
//       "Únete a nuestra conferencia anual para explorar los últimos avances en tecnología e innovación, con ponentes destacados y talleres interactivos.",
//     imageSrc: "/imagesSlider/test.jpg",
//   },
//   {
//     eventTitle: "Feria de Ciencias",
//     location: "Plaza Principal",
//     date: "5 Dic 2023",
//     time: "9:00 AM",
//     description:
//       "Participa en nuestra Feria de Ciencias y descubre proyectos innovadores realizados por estudiantes.",
//     imageSrc: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
//   },
//   {
//     eventTitle: "Simposio de Medicina",
//     location: "Sala de Conferencias A",
//     date: "12 Ene 2024",
//     time: "2:00 PM",
//     description:
//       "Discute los últimos avances en medicina y salud con expertos en el campo.",
//     imageSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
//   },
//   {
//     eventTitle: "Exposición de Arte",
//     location: "Galería de Arte",
//     date: "28 Feb 2024",
//     time: "6:00 PM",
//     description:
//       "Disfruta de una colección de obras de arte realizadas por estudiantes y profesores.",
//     imageSrc: "/imagesSlider/1.jpg",
//   },
// ];
</script>

<template>
  <Header />

  <!-- <Carousel /> -->

  <!-- <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="(event, index) in events"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <CardEvent
            :eventTitle="event.eventTitle"
            :location="event.location"
            :date="event.date"
            :time="event.time"
            :description="event.description"
            :imageSrc="event.imageSrc"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app> -->
</template>

<style scoped></style>
