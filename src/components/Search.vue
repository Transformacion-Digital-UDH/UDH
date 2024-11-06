<template>
  <div class="p-2 text-gray-custom hover:text-green-custom">
    <button type="button" @click="openModal" class="p-2 text-gray-custom hover:text-green-custom">
      <IconSearch class="w-5 h-5" />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto font-epilogue">
        <div class="flex flex-col justify-center p-4 text-center">
          <DialogPanel class="relative xs:w-5/6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-3/4 mx-auto">
            <div class="py-0 px-2 h-auto bg-white rounded-xl shadow-lg">
              <div class="relative flex items-center">
                <!-- Icono de lupa a la izquierda -->
                <IconSearch class="absolute left-3 text-gray-700" size="19" />

                <!-- Campo de búsqueda -->
                <input type="text" v-model="searchQuery" placeholder="Buscar aquí..." autofocus
                  class="w-full pl-10 pr-12 my-3 p-4 rounded-xl text-gray-custom placeholder:text-gray-400 focus:outline-[.2px] bg-white border-gray-custom border font-medium"
                  @input="handleSearch" />

                <!-- Botón ESC a la derecha -->
                <button @click="closeModal" v-if="searchQuery"
                  class="absolute right-3 text-gray-800 hover:bg-gray-200 bg-gray-100 px-2 py-1 font-semibold text-sm rounded-lg">
                  ESC
                </button>
              </div>

              <!-- Suggestions Dropdown -->
              <TransitionRoot appear :show="showSuggestions && filteredSuggestions.length > 0" as="template">
                <div class="mt-0 bg-white rounded-lg shadow-lg overflow-y-scroll h-[550px]">
                  <div class="py-1">
                    <div v-for="(suggestion, index) in filteredSuggestions" :key="index"
                      class="px-4 py-2 hover:bg-gray-200  group cursor-pointer flex items-center justify-between gap-2"
                      @click="selectSuggestion(suggestion)">
                      <!-- Contenido de la sugerencia -->
                      <div class="text-left">
                        <div class="text-gray-800 font-semibold text-sm lg:text-base xl:text-base">
                          {{ suggestion.title }}
                        </div>
                        <div class="text-sm text-gray-700">
                          {{ suggestion.description }}
                        </div>
                      </div>

                      <!-- Icono de ChevronRight (visible solo en hover) -->
                      <IconChevronRight
                        class="text-green-custom opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        size="18" />
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, computed } from "vue";
import { IconSearch, IconChevronRight } from "@tabler/icons-vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const isOpen = ref(false);
const searchQuery = ref("");
const showSuggestions = ref(false);

const suggestions = [
  { title: "Expoferia udeachino", description: "Lorem ipsum dolor sit?" },
  { title: "Desarrolla tus capacidades de versatilidad en nuestro taller", description: "Lorem ipsum dolor sit?" },
  { title: "Tienes depresión, ansiedad todo el tiempo? tomate un chillout y solo sé feliz", description: "Lorem ipsum dolor sit?" },
  { title: "Animate campeón o campeona ya te falta poquito para que seas practicante", description: "Lorem ipsum dolor sit?" },
  { title: "Eres trica? te invitamos a reforzar en este verano", description: " Lorem ipsum dolor sit?", },
  { title: "Expoferia udeachino", description: "Lorem ipsum dolor sit?" },
  { title: "Desarrolla tus capacidades de versatilidad en nuestro taller", description: "Lorem ipsum dolor sit?" },
  { title: "Tienes depresión, ansiedad todo el tiempo? tomate un chillout y solo sé feliz", description: "Lorem ipsum dolor sit?" },
  { title: "Animate campeón o campeona ya te falta poquito para que seas practicante", description: "Lorem ipsum dolor sit?" },
  { title: "Eres trica? te invitamos a reforzar en este verano", description: " Lorem ipsum dolor sit?", },
];

const filteredSuggestions = computed(() => {
  if (!searchQuery.value) return [];
  const query = searchQuery.value.toLowerCase();
  return suggestions.filter(
    (suggestion) =>
      suggestion.title.toLowerCase().includes(query) ||
      suggestion.description.toLowerCase().includes(query),
  );
});

function closeModal() {
  isOpen.value = false;
  searchQuery.value = "";
  showSuggestions.value = false;
}

function openModal() {
  isOpen.value = true;
}

function handleSearch() {
  showSuggestions.value = true;
}

function selectSuggestion(suggestion) {
  location.href = suggestion.title;
}
</script>
