<script setup>
import {
  IconArrowNarrowRight,
  IconHeadset,
  IconQuote,
} from "@tabler/icons-vue";
</script>

<template>
  <div class="about-area py-16 bg-white">
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
        </div>
      </div>

      <div class="lg:w-1/2 px-4 sm:px-6">
        <div>
          <h3
            class="text-xs md:text-xl font-bold text-[#2ebaa1] mb-2 uppercase relative inline-block underline-title"
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
              class="bg-[rgba(17,110,99,0.09)] p-4 rounded-lg shadow-lg flex items-start"
            >
              <p
                class="text-[#19232B] mb-1 text-xs sm:text-sm md:text-base max-w-[250px] leading-tight"
              >
                Es un hecho ampliamente conocido que un lector se distrae por el
                contenido de una página cuando observa su diseño y distribución.
              </p>
              <div
                class="ml-2 text-[#2ebaa1] font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <IconQuote
                  class="w-[40px] xs:w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px] h-[40px] xs:h-[45px] sm:h-[50px] md:h-[55px] lg:h-[150px]"
                />
              </div>
            </div>
          </div>

          <hr class="mx-4 border-t-1 border-[#E5E7EB] mt-12" />

          <div class="flex items-center justify-between mt-4 sm:mt-6 md:mt-8">
            <a
              href="/"
              class="text-sm bg-[#2ebaa1] font-bold uppercase text-white py-4 sm:py-2.5 md:py-3 px-3 sm:px-5 md:px-6 rounded-lg flex items-center hover:bg-[#27a692] transition duration-300"
            >
              Descubre Más
              <IconArrowNarrowRight />
            </a>
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

.underline-title::after {
  content: "";
  display: block;
  width: 172px;
  height: 2px;
  background-color: #2ebaa1;
  margin-top: 0.5px;
  position: relative;
  left: 0;
}

@media (max-width: 640px) {
  .underline-title::after {
    width: 103px;
  }
}
</style>
