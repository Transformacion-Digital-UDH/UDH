<script setup>
import ButtonPrimarySecondEffect from "@/components/ButtonPrimarySecondEffect.vue";
import { IconArrowRight, IconHeadset } from "@tabler/icons-vue";
</script>

<template>
  <div class="about-area py-16 bg-white font-epilogue">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center"
    >
      <div class="lg:w-1/2 mb-8 lg:mb-0 relative ml-4 mr-4 lg:ml-12 lg:mr-12">
        <div class="relative">
          <img
            src="../../public/images/studentsImage.webp"
            alt="Sobre nosotros"
            class="rounded-lg w-full shadow-lg relative z-10"
          />
          <!-- Marco verde -->
          <div
            class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-10 md:-left-10 w-[200px] h-[300px] sm:w-[250px] sm:h-[610px] md:w-[300px] md:h-[570px] lg:w-[300px] lg:h-[500px] border-[10px] sm:border-[15px] md:border-[17px] border-[#2ebaa1] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] z-0"
          ></div>
          <!-- Marco negro -->
          <div
            class="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-[200px] h-[240px] sm:w-[250px] sm:h-[280px] md:w-[300px] md:h-[320px] lg:w-[400px] lg:h-[490px] bg-[#333333] z-0 clip-path rounded-br-[15px] lg:rounded-br-[17px] sm:rounded-br-[17px]"
          ></div>
          <div
            class="absolute bottom-20 sm:bottom-20 md:bottom-32 lg:bottom-20 -left-4 sm:-left-8 md:-left-10 bg-[#2ebaa1] p-3 md:p-4 rounded-lg lg:rounded-2xl shadow-lg text-white flex flex-col items-center z-20 h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]"
          >
            <div class="feature-icon flex justify-left mb-2 md:mb-3">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center"
              >
                <img
                  src="../../public/images/shareImage.svg"
                  alt="Icono de servicio"
                  class="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
                />
              </div>
            </div>
            <div class="text-center">
              <b
                class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold"
              >
                34 Años de <br />
                calidad de servicio
              </b>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 px-4 sm:px-6">
        <div>
          <h3
            class="text-xs md:text-xl font-bold text-[#2ebaa1] mb-2 uppercase relative inline-block underline"
          >
            Sobre Nosotros
          </h3>
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-[60px] font-extrabold mb-4 md:mb-6 leading-tight lg:leading-[65px]"
          >
            Nuestro Sistema Educativo
            <span class="text-[#2ebaa1]">Te Inspira</span> Más.
          </h2>
          <p
            class="text-[#757F95] mb-4 md:mb-6 text-xs sm:text-sm md:text-base"
          >
            En nuestra universidad, creemos en el poder de la educación para
            inspirar y transformar vidas. Nuestro enfoque integral está diseñado
            para motivarte a alcanzar tus sueños y desarrollar todo tu
            potencial.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
          >
            <div>
              <div class="flex items-start mb-4 md:mb-6">
                <div class="feature-icon flex justify-left mr-4">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2ebaa1] rounded-full flex items-center justify-center"
                  >
                    <img
                      src="../../public/images/aboutImage1.svg"
                      alt="Servicios Educativos"
                      class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 filter invert brightness-0"
                    />
                  </div>
                </div>
                <div>
                  <h5
                    class="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2"
                  >
                    Servicios Educativos
                  </h5>
                  <p class="text-[#757F95] text-xs sm:text-sm md:text-base">
                    Ofrecemos una amplia gama de servicios educativos que apoyan
                    tu aprendizaje y crecimiento personal.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="feature-icon flex justify-left mr-4">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2ebaa1] rounded-full flex items-center justify-center"
                  >
                    <img
                      src="../../public/images/aboutImage2.svg"
                      alt="Convenios Internacionales"
                      class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 filter invert brightness-0"
                    />
                  </div>
                </div>
                <div>
                  <h5
                    class="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2"
                  >
                    Convenios Internacionales
                  </h5>
                  <p class="text-[#757F95] text-xs sm:text-sm md:text-base">
                    Estas alianzas globales enriquecen tu experiencia educativa
                    y te preparan para enfrentar los desafíos de un entorno
                    profesional internacional.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-[rgba(17,110,99,0.09)] p-4 rounded-lg shadow-lg flex items-start ml-4 mr-4"
            >
              <p
                class="text-[#19232B] mb-1 text-xs sm:text-sm md:text-base leading-tight"
              >
                Es un hecho ampliamente conocido que un lector se distrae por el
                contenido de una página cuando observa su diseño y distribución.
              </p>
            </div>
          </div>

          <hr class="mx-4 border-t-1 border-[#E5E7EB] mt-12" />

          <div
            class="flex items-center justify-between mt-4 ml-4 mr-4 sm:mt-6 md:mt-8"
          >
            <ButtonPrimarySecondEffect
              label="Descubre más"
              class="px-7 py-[10px] w-[160px]"
              :icon="IconArrowRight"
            />
            <div class="flex items-center">
              <div class="feature-icon flex justify-left mr-1">
                <div
                  class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#333333] rounded-full flex items-center justify-center"
                >
                  <IconHeadset class="text-white" />
                </div>
              </div>
              <div class="ml-2 sm:ml-3 md:ml-4">
                <span class="text-[#333333] text-xs font-bold sm:text-sm block">
                  Llama Ahora
                </span>
                <h6 class="text-[#2ebaa1] md:text-lg font-bold">
                  <a href="tel:+21236547898">(51-62) 519773</a>
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
