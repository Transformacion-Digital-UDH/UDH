<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import GridInformation from "@/components/GridInformation.vue";
import Carousel from "@/components/Carousel.vue";
import CarouselCursos from "@/components/Carreras/CarouselCursos.vue";

// props carousel proyectos carrera

const carouselSlides = [
  {
    backgroundImage: "/imagesSlider/proyecto1.jpg",
    title: "Optimiza tu vida con nuestras soluciones de ",
    highlightedText: "Internet de las Cosas(IoT)",
    description: "Conéctate a la era digital con nuestras innovadoras soluciones IoT. Desde casas inteligentes hasta fábricas automatizadas, descubre cómo la integración de dispositivos conectados puede mejorar tu eficiencia y ofrecer una experiencia personalizada en todos los aspectos de tu vida.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto2.jpg",
    title: "Conquista el mundo de las criptomonedas y ",
    highlightedText: "blockchain con nuestra tecnología",
    description: "La tecnología blockchain está redefiniendo la forma en que se manejan las transacciones y se asegura la información. Descubre cómo nuestras soluciones en criptomonedas pueden ofrecer seguridad, transparencia y eficiencia en todos tus proyectos financieros.",
    buttonLabel: "Conoce más",
  },
  {
    backgroundImage: "/imagesSlider/proyecto3.jpg",
    title: "Explora el futuro de la computación ",
    highlightedText: "cuántica  con nuestras innovaciones",
    description: "La próxima generación de computadoras está aquí. Nuestra plataforma de computación cuántica está revolucionando el procesamiento de datos con una velocidad sin precedentes. Descubre cómo esta tecnología puede resolver problemas complejos en segundos y transformar industrias enteras .",
    buttonLabel: "Conoce más",
  },
];

// Props de cursos por ciclo

const cursos = [
{
    numero: "1",
    titulo: "Sexto Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  {
    numero: "2",
    titulo: "Sexto Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  {
    numero: "3",
    titulo: "Sexto Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  {
    numero: "4",
    titulo: "Cuarto Ciclo",
    courses: [
      "Probabilidad y Estadística",
      "Estructura de Datos",
      "Optimización y Simulación",
      "Cálculo 2",
      "Electrónica Digital",
    ],
  },
  {
    numero: "5",
    titulo: "Quinto Ciclo",
    courses: [
      "Análisis de Algoritmos y Estrategias de Programación",
      "Comunicación 3",
      "Base de Datos",
      "Responsabilidad Social",
      "Técnicas de Programación Orientada a Objetos",
    ],
  },
  {
    numero: "6",
    titulo: "Sexto Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  
  {
    numero: "7",
    titulo: "Septimo Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  
  {
    numero: "8",
    titulo: "Octavo Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  
  {
    numero: "9",
    titulo: "Noveno Ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
  
  {
    numero: "10",
    titulo: "Decimo ciclo",
    courses: [
      "Base de Datos Avanzadas y Big Data",
      "Metodología de la Investigación",
      "Computación Gráfica y Visual",
      "Modelamiento y Análisis de Software",
      "Proyecto Social",
      "Arquitectura del Computador",
    ],
  },
];


</script>

<template>
  <MainLayout>
    <Carousel :slides="carouselSlides" carouselHeight="medium" />
    <GridInformation />
    <CarouselCursos :cursos="cursos" />
  </MainLayout>
</template>
