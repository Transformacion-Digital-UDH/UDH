<!-- Carousel.vue -->
<template>
  <Splide :options="splideOptions" class="carousel-wrapper">
    <!-- Slide 1 -->
    <SplideSlide>
      <div
        class="hero-single relative flex items-center justify-center bg-cover bg-center"
        style="background-image: url('/imagesSlider/1.jpg'); min-height: 100vh;"
      >
        <!-- Capa de fondo semi-transparente -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Contenido del slide -->
        <div class="container relative z-10 mx-auto px-4">
          <div
            class="text-left text-white max-w-2xl space-y-4 md:space-y-6 lg:space-y-8 p-4"
          >
            <h6
              class="text-lg md:text-xl lg:text-2xl font-semibold animate-fadeInDown"
              style="animation-delay: 0.25s"
            >
              Bienvenido a la UDH
            </h6>
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-bold animate-fadeInRight"
              style="animation-delay: 0.5s"
            >
              Transforma tu vida con una
              <span class="text-green-custom">educación de calidad</span>
            </h1>
            <p
              class="text-base md:text-lg lg:text-xl animate-fadeInLeft"
              style="animation-delay: 0.75s"
            >
              En la UDH, creemos en el poder transformador de la educación.
              Ofrecemos programas académicos diseñados para prepararte para los
              desafíos del mundo real, ayudándote a alcanzar tus metas y a
              convertirte en un líder en tu campo.
            </p>

            <ButtonPrimarySecondEffect
              label="Conoce más"
              class="px-7 py-[10px] w-[110px]"
            />
          </div>
        </div>
      </div>
    </SplideSlide>

    <!-- Slide 2 -->
    <SplideSlide>
      <div
        class="hero-single relative flex items-center justify-center bg-cover bg-center"
        style="background-image: url('/imagesSlider/2.jpg'); min-height: 100vh;"
      >
        <!-- Capa de fondo semi-transparente -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Contenido del slide -->
        <div class="container relative z-10 mx-auto px-4">
          <div
            class="text-left text-white max-w-2xl space-y-4 md:space-y-6 lg:space-y-8 p-4"
          >
            <h6
              class="text-lg md:text-xl lg:text-2xl font-semibold animate-fadeInDown"
              style="animation-delay: 0.25s"
            >
              Bienvenido a la UDH
            </h6>
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-bold animate-fadeInRight"
              style="animation-delay: 0.5s"
            >
              Impulsa el futuro con
              <span class="text-green-custom">investigación pionera</span>
            </h1>
            <p
              class="text-base md:text-lg lg:text-xl animate-fadeInLeft"
              style="animation-delay: 0.75s"
            >
              En la Universidad de Innovación, nos dedicamos a explorar nuevos
              horizontes y a liderar el camino en investigación avanzada.
              Nuestros programas están diseñados para fomentar la creatividad y
              el pensamiento crítico, preparando a nuestros estudiantes para ser
              los innovadores del mañana y enfrentar los retos más complejos del
              mundo.
            </p>
            <ButtonPrimarySecondEffect
              label="Conoce más"
              class="px-7 py-[10px] w-[110px]"
            />
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import ButtonPrimarySecondEffect from "@/components/ButtonPrimarySecondEffect.vue";
import "@splidejs/vue-splide/css";

// Opciones del carrusel
const splideOptions = {
  type: "loop",
  autoplay: true,
  interval: 3000,
  speed: 800,
  pauseOnHover: false,
  perPage: 1,
  arrows: false,
  pagination: true,
};
</script>

<style scoped>
/* Animaciones de entrada personalizadas */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Clases para aplicar las animaciones */
.animate-fadeInDown {
  animation: fadeInDown 0.5s forwards;
}
.animate-fadeInRight {
  animation: fadeInRight 0.5s forwards;
}
.animate-fadeInLeft {
  animation: fadeInLeft 0.5s forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 0.5s forwards;
}
</style>
