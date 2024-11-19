<template>
  <TitleSection title="Nuestros" subtitle1="Próximos" subtitle2="Eventos" />
  <div class="bg-white py-8 font-epilogue">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
    >
      <div
        v-for="(event, index) in events"
        :key="index"
        class="card relative rounded-lg shadow-md max-w-md mx-auto overflow-hidden"
      >
        <div class="p-5 bg-gray-900 text-black rounded-lg">
          <div
            class="bg-transparent px-3 py-0 text-green-custom flex items-center rounded-t-lg z-10 relative font-semibold"
          >
            <IconMapPin size="20" class="mr-2" /> {{ event.location }}
          </div>

          <div class="p-4 relative z-10">
            <div class="event-img bg-white rounded-lg overflow-hidden">
              <a href="#">
                <img
                  :src="event.image"
                  alt="Imagen del evento"
                  class="w-full h-48 object-cover rounded-lg"
                />
              </a>
            </div>
          </div>

          <div class="px-5 py-0 relative z-10">
            <div
              class="font-semibold text-sm mb-4 flex items-center space-x-2 min-h-10"
            >
              <span class="flex items-center">
                <IconCalendar size="18" class="mr-2 text-green-custom" /> 
                <span class="text-gray-custom">
                  {{ event.date }}
                </span>
              </span>
              <span class="flex items-center">
                <IconClock size="18" class="mr-2 text-green-custom" /> 
                <span class="text-gray-custom">
                  {{ event.time }}
                </span>
              </span>
            </div>

            <h4 class="text-xl font-semibold text-black h- overflow-hidden">
              <a href="event-single.html" class="hover:text-green-custom">
                {{ event.title }}
              </a>
            </h4>

            <p class="text-black text-base mb-0 h-16 overflow-hidden">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleSection from "@/components/TitleSection.vue";
import {
  IconMapPin,
  IconCalendar,
  IconClock,
} from "@tabler/icons-vue";
import { ref, onMounted } from "vue";
import { getEventsInfo } from "@/lib/get-events-info";

const events = ref([]);

const fetchEvents = async () => {
  try {
    const data = await getEventsInfo();
    events.value = data.map((event) => ({
      location: event.ubicacion || "Sin ubicación",
      image: `https://udhback.sistemasudh.com${event.imagen?.url || ""}`,
      date: new Date(event.fecha).toLocaleDateString("es-PE"),
      time: `${event.hora_inicio?.slice(0, 5)} - ${event.hora_fin?.slice(0, 5)}`,
      title: event.titulo || "Evento sin título",
      description: event.descripcion || "Sin descripción",
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

onMounted(fetchEvents);
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 150%;
  background-image: linear-gradient(
    180deg,
    rgb(46, 186, 161),
    rgb(46, 186, 161)
  );
  animation: rotBGimg 3s linear infinite;
  transition: all 0.3s linear;
  z-index: 0;
}

.card::after {
  content: "";
  position: absolute;
  inset: 5px;
  background: #ffffff;
  border-radius: 10px;
  z-index: 1;
}

.event-img img {
  width: 100%;
  height: 22rem;
  object-fit: cover;
}

h4 {
  height: 3rem;
  overflow: hidden;
}

p {
  height: 10rem;
  min-height: 10rem;
  overflow: hidden;
}
</style>
