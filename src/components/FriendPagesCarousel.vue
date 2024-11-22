<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getPagesFriendsInfo } from '@/lib/get-pagesFriends-info'

const paginas_amigas = ref([])
const baseApiUrl = import.meta.env.VITE_API_URL_STRAPI
let animationInterval = null
let isDragging = false
let startX = 0
let scrollLeft = 0

// Fetch data from API
const fetchPagesFriendstData = async () => {
  try {
    const PagesFriendstData = await getPagesFriendsInfo()
    paginas_amigas.value = PagesFriendstData.paginas_amigas || []
  } catch (error) {
    console.error('Error fetching contact data:', error)
  }
}

// Start the animation interval
const startAnimationInterval = () => {
  animationInterval = setInterval(() => {
    const carousel = document.querySelector('.carousel-container')
    if (carousel) {
      carousel.scrollLeft += 1
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0 // Reset to create infinite loop effect
      }
    }
  }, 16) // Approximately 60fps
}

// Clear the interval on component unmount
const stopAnimationInterval = () => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
}

// Mouse events for dragging
const onMouseDown = (e) => {
  isDragging = true
  startX = e.pageX - document.querySelector('.carousel-container').offsetLeft
  scrollLeft = document.querySelector('.carousel-container').scrollLeft
}

const onMouseMove = (e) => {
  if (!isDragging) return
  e.preventDefault()
  const x = e.pageX - document.querySelector('.carousel-container').offsetLeft
  const walk = (x - startX) * 2 // The multiplier controls the speed of dragging
  document.querySelector('.carousel-container').scrollLeft = scrollLeft - walk
}

const onMouseUp = () => {
  isDragging = false
}

// Lifecycle hooks
onMounted(() => {
  fetchPagesFriendstData()
  startAnimationInterval()

  const carousel = document.querySelector('.carousel-container')
  carousel.addEventListener('mousedown', onMouseDown)
  carousel.addEventListener('mousemove', onMouseMove)
  carousel.addEventListener('mouseup', onMouseUp)
  carousel.addEventListener('mouseleave', onMouseUp) // To stop dragging if the mouse leaves the area
})

onBeforeUnmount(() => {
  stopAnimationInterval()
  const carousel = document.querySelector('.carousel-container')
  carousel.removeEventListener('mousedown', onMouseDown)
  carousel.removeEventListener('mousemove', onMouseMove)
  carousel.removeEventListener('mouseup', onMouseUp)
  carousel.removeEventListener('mouseleave', onMouseUp)
})
</script>

<template>
  <section class="w-full h-auto bg-gray-100 py-10 overflow-hidden">
    <div 
      class="carousel-container flex whitespace-nowrap overflow-hidden relative"
      style="scroll-behavior: smooth;"
    >
      <!-- Original items -->
      <div 
        v-for="(page, index) in paginas_amigas" 
        :key="`original-${page.id}`"
        class="flex justify-center items-center px-4"
      >
        <a 
          v-if="page.link && page.imagen"
          :href="`${baseApiUrl}${page.link}`" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-[250px]"
        >
          <img 
            v-if="page.imagen.url"
            :src="`${baseApiUrl}${page.imagen.url}`" 
            :alt="page.imagen.name || 'Image'" 
            class="rounded-lg max-w-full"
          />
        </a>
      </div>

      <!-- Duplicate items for infinite loop -->
      <div 
        v-for="(page, index) in paginas_amigas" 
        :key="`duplicate-${page.id}`"
        class="flex justify-center items-center px-4"
      >
        <a 
          v-if="page.link && page.imagen"
          :href="`${baseApiUrl}${page.link}`" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-[250px]"
        >
          <img 
            v-if="page.imagen.url"
            :src="`${baseApiUrl}${page.imagen.url}`" 
            :alt="page.imagen.name || 'Image'" 
            class="rounded-lg max-w-full"
          />
        </a>
      </div>
    </div>
  </section>
</template>