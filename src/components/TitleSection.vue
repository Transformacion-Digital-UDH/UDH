<template>
  <div class="py-9 text-center">
    <div class="max-w-2xl mx-auto">
      <p
        class="text-green-custom font-semibold uppercase tracking-wide mb-4 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl underline"
      >
        {{ title }}
      </p>

      <h2 class="text-xl font-bold text-gray-900 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        {{ subtitle1 }} <span class="text-green-custom">{{ subtitle2 }}</span>
        {{ subtitle3 }}
      </h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle1: {
    type: String,
    required: true,
  },
  subtitle2: {
    type: String,
    required: true,
  },
  subtitle3: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
