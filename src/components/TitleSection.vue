<template>
  <div class="bg-gray-100 py-16">
    <div class="max-w-2xl mx-auto text-center">
      <p
        class="text-green-custom font-semibold uppercase tracking-wide mb-4 text-2xl underline"
      >
        {{ title }}
      </p>

      <h2 class="text-6xl font-bold text-gray-900">
        {{ subtitle1 }} <span class="text-green-custom">{{ subtitle2 }}</span>
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
});
</script>

<style scoped></style>
