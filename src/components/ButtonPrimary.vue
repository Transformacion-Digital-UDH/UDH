<script setup>
defineProps({
  label: {
    type: String,
    default: 'Button'
  },
})
</script>

<template>
  <button
    class="relative overflow-hidden bg-green-custom text-white rounded-md px-4 py-1.5 text-sm font-medium group"
  >
    <!-- Efecto circular -->
    <span 
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-gray-custom transition-all duration-500 ease-out group-hover:h-32 group-hover:w-full"
    />
    
    <!-- Texto -->
    <span class="relative z-10">{{ label }}</span>
  </button>
</template>