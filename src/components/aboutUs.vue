<script setup>
import { onMounted, ref } from "vue";
import LinkPrimarySecondEffect from "@/components/LinkPrimarySecondEffect.vue";
import ImageWithFrames from "@/components/ImageWithFrames.vue";
import TitleSection from "@/components/TitleSection.vue";
import { IconArrowRight, IconHeadset } from "@tabler/icons-vue";
import { getAboutUs } from "@/lib/get-about-info";

const nosotros = ref({});
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI;

const fetchAboutUs = async () => {
  try {
    const response = await getAboutUs();
    // console.log(response)
    nosotros.value = response.nosotros || {};
  } catch (error) {
    console.error("Error al cargar el acerca de nosotros:", error);
  }
}

onMounted(() => {
  fetchAboutUs();
});
</script>

<template>
  <div class="about-area py-16 bg-white" v-if="nosotros && nosotros.imagen">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center">
      <ImageWithFrames :imageUrl="`${baseApiUrl}${nosotros.imagen.url}`"
        :alt="nosotros.imagen.name || 'Imagen de nosotros'" :aboutUs="true" :description="nosotros.mensaje_imagen"
        greenBorderClass="absolute -top-4 -left-4 xs:-top-4 xs:-left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 lg:-top-8 lg:-left-8 w-[200px] h-[260px] xs:w-[200px] xs:h-[290px] sm:w-[250px] sm:h-[410px] md:w-[300px] md:h-[270px] lg:w-[300px] lg:h-[440px] border-[10px] sm:border-[15px] md:border-[17px] border-[#2ebaa1] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] z-0"
        blackBorderClass="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-[200px] h-[240px] sm:w-[250px] sm:h-[280px] md:w-[300px] md:h-[320px] lg:w-[400px] lg:h-[490px] bg-[#333333] z-0 clip-path rounded-br-[15px] lg:rounded-br-[17px] sm:rounded-br-[17px]" />
      <div class="lg:w-1/2 lg:px-0 text-center lg:text-left">
        <div>
          <TitleSection title="Sobre Nosotros" subtitle1="Nuestro Sistema Educativo Fomenta" subtitle2="Tu Crecimiento,"
            subtitle3="Inspirándote Siempre."
            class="ml-4 mr-4 xs:ml-4 xs:mr-4 sm:ml-4 sm:mr-4 lg:ml-2 lg:mr-2 xl:ml-0 xl:mr-0 text-center lg:text-left text-6xl font-bold" />
          <p
            class="ml-4 mr-4 xs:ml-4 xs:mr-4 sm:ml-4 sm:mr-4 lg:ml-2 lg:mr-2 xl:ml-0 xl:mr-0 text-[#757F95] mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
            {{ nosotros.descripcion }}
          </p>

          <div
            class="ml-4 mr-4 xs:ml-4 xs:mr-4 sm:ml-4 sm:mr-4 lg:ml-2 lg:mr-2 xl:ml-0 xl:mr-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
            <div>
              <div v-for="beneficio in nosotros.beneficios" :key="beneficio.id" class="flex items-start mb-6">
                <div class="feature-icon flex justify-left mr-4">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2ebaa1] rounded-full flex items-center justify-center">
                    <img :src="`${baseApiUrl}${beneficio.icono.url}`" :alt="beneficio.icono.name"
                      class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 filter invert brightness-0" />
                  </div>
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    {{ beneficio.titulo }}
                  </h5>
                  <p class="text-[#757F95] text-xs sm:text-sm md:text-base">
                    {{ beneficio.descripcion }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-[rgba(17,110,99,0.09)] p-4 rounded-lg shadow-lg flex items-start ml-4 mr-4">
              <p class="text-[#19232B] mb-1 text-xs sm:text-sm md:text-base leading-tight">
                "{{ nosotros.mensaje_slogan }}"
              </p>
            </div>
          </div>

          <hr class="mx-4 border-t-1 border-[#E5E7EB] mt-12" />

          <div class="flex items-center justify-between mt-4 ml-4 mr-4 sm:mt-6 md:mt-8">
            <LinkPrimarySecondEffect label="Descubre más" class="px-7 py-[10px] w-[160px]" :icon="IconArrowRight" />
            <div class="flex items-center">
              <div class="feature-icon flex justify-left mr-1">
                <div
                  class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#333333] rounded-full flex items-center justify-center">
                  <IconHeadset class="text-white" />
                </div>
              </div>
              <div class="ml-2 sm:ml-3 md:ml-4">
                <span class="text-[#333333] text-xs font-bold sm:text-sm block">
                  Llama Ahora
                </span>
                <h6 class="text-[#2ebaa1] md:text-lg font-bold">
                  <a href="tel:+21236547898">(51-62) 515151</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-path {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

@media (max-width: 640px) {
  .underline-title::after {
    width: 115px;
    height: 1px;
  }
}
</style>
