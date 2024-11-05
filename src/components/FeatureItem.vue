<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: [Object, Function],
  label: String,
  value: String,
});
</script>

<template>
  <a href="#" class="feature-item">
    <component :is="icon" class="icon" />
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
