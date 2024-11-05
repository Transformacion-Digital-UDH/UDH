<script setup>
import dataRequirement from "@/components/dataRequirement.vue";
</script>

<template>
  <dataRequirement
    class="text-[13px] lg:text-[14px] xl:text-[15px] font-bold"
    :Requisitos="[
      'Conocimientos previos en matemáticas y lógica.',
      'Habilidad para resolver problemas técnicos complejos.',
      'Interés en las tecnologías de la información y la computación.',
      'Capacidad para trabajar en equipo y comunicarse efectivamente.',
      'Compromiso con el aprendizaje continuo y la adaptación a nuevas tecnologías.',
    ]"
    :Obtendra="[
      'Experiencia profesional a través de prácticas y proyectos reales.',
      'Colaboración con empresas y organizaciones locales y nacionales.',
      'Alto nivel en desarrollo de software.',
      'Administración de sistemas.',
      'Gestión de proyectos tecnológicos.',
    ]"
  />
</template>
