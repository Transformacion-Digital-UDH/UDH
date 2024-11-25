<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <a href="#" class="feature-item">
    <img
      :src="icon"
      :alt="name"
      class="icon"
      style="
        filter: brightness(0) saturate(100%) invert(54%) sepia(71%)
          saturate(3888%) hue-rotate(137deg) brightness(101%) contrast(101%);
      "
    />
    <span
      class="label text-[10px] xs:text-[12px] sm:text-[14px] xl:text-[16px]"
      >{{ label }}</span
    >
    <span class="text-[10px] xs:text-[12px] sm:text-[14px] xl:text-[16px]">{{
      value
    }}</span>
  </a>
</template>

<style scoped>
.icon {
  width: 25px;
  position: relative;
  color: #2ebaa1;
  font-size: 1.5rem;
  margin-right: 8px;
  animation: pulse 1.5s infinite;
  transition: transform 0.3s ease;
}

.feature-item {
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  transition: transform 0.3s ease;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item .label,
.feature-item span:last-child {
  font-weight: bold;
  color: #333;
  transition: transform 0.3s ease;
}

.feature-item span:last-child {
  margin-left: auto;
  font-weight: bold;
  color: #333;
}

.feature-item:hover .icon,
.feature-item:hover .label,
.feature-item:hover span:last-child {
  transform: scale(1.059);
}
</style>
