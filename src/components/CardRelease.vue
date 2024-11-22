<template>
  <TitleSection subtitle1="Boletín Informativo &" subtitle2="Noticias" />
  <div class="bg-white py-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 sm:px-4"
    >
      <div
        v-for="(news, index) in newsList"
        :key="index"
        class="bg-rgray-custom text-white rounded-lg shadow-md w-full mx-auto border border-gray-700 overflow-hidden"
      >
        <div class="p-5">
          <div class="text-gray-400 text-sm mb-4 flex items-center space-x-4">
            <span class="flex items-center">
              <IconCalendar size="18" class="mr-2" /> {{ news.date }}
            </span>
          </div>

          <h4 class="text-xl font-semibold text-white h-32 overflow-hidden">
            <a :href="news.link" class="hover:text-green-custom">
              {{ news.title }}
            </a>
          </h4>

          <p class="text-gray-300 text-base mb-5 h-40 overflow-hidden">
            {{ news.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleSection from "@/components/TitleSection.vue";
import { IconCalendar } from "@tabler/icons-vue";
import { ref, onMounted } from "vue";
import { getNewsInfo } from "@/lib/get-news-info";

const newsList = ref([]);

const fetchNews = async () => {
  try {
    const data = await getNewsInfo();
    newsList.value = data.noticias.map((news) => ({
      title: news.titulo || "Sin título",
      description: news.descripcion || "Sin descripción",
      date: new Date(news.fecha_publicacion).toLocaleDateString("es-PE"),
      link: news.link || "#",
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

onMounted(fetchNews);
</script>

<style scoped>
h4 {
  height: 4rem; /* Altura reducida */
  overflow: hidden;
}

p {
  height: 4rem; /* Altura reducida */
  overflow: hidden;
}

@media (min-width: 640px) {
  h4 {
    height: 5rem; /* Ajuste para pantallas medianas */
  }

  p {
    height: 5rem; /* Ajuste para pantallas medianas */
  }
}

@media (min-width: 1024px) {
  h4 {
    height: 6rem; /* Ajuste para pantallas grandes */
  }

  p {
    height: 6rem; /* Ajuste para pantallas grandes */
  }
}
</style>
