<script>
export default {
  name: "ButtonMultiple",
  props: {
    buttons: {
      type: Array,
      default: () => [
        {
          icon: "fas fa-comment-dots",
          action: () => (window.location.href = "#"),
        },
        {
          icon: "fab fa-whatsapp",
          action: () => (window.location.href = "#"),
        },
        {
          icon: "fas fa-upload",
          action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        },
      ],
    },
  },
  methods: {
    handleClick(action) {
      action();
    },
  },
};
</script>

<template>
  <div class="button-multiple">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      class="button-circle"
      @click="handleClick(button.action)"
    >
      <i :class="button.icon"></i>
    </button>
  </div>
</template>

<style scoped>
.button-multiple {
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.button-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2ac5a9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease;
}

.button-circle:hover {
  transform: scale(1.1);
}

.button-circle i {
  font-size: 24px;
}
</style>
