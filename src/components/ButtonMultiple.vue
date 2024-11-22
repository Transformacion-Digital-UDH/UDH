<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { IconArrowDownFromArc } from "@tabler/icons-vue";
import { getButtonFloat } from "@/lib/get-buttonfloat-info";

const isAtTop = ref(true);
const whatsappInfo = ref({ numero: "", mensaje: "" });

const buttons = ref([
  {
    icon: "fas fa-comment-dots",
    action: () => window.open("/", "_blank"),
  },
  {
    icon: "fab fa-whatsapp",
    action: () => {},
  },
  {
    icon: "arrow-up-bar",
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  },
]);

const mainButtons = computed(() =>
  buttons.value.filter((button) => button.icon !== "arrow-up-bar")
);

const uploadButton = computed(() =>
  buttons.value.find((button) => button.icon === "arrow-up-bar")
);

function handleClick(action) {
  action();
}

function handleScroll() {
  isAtTop.value = window.scrollY === 0;
}

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);

  try {
    const data = await getButtonFloat(); // Llamamos a la API.
    whatsappInfo.value = {
      numero: data.numero_whatsapp,
      mensaje: data.mensaje_whatsapp,
    };

    // Configuramos la acción del botón de WhatsApp.
    buttons.value = buttons.value.map((button) =>
      button.icon === "fab fa-whatsapp"
        ? {
            ...button,
            action: () =>
              window.open(
                `https://wa.me/${whatsappInfo.value.numero}?text=${encodeURIComponent(
                  whatsappInfo.value.mensaje
                )}`,
                "_blank"
              ),
          }
        : button
    );
  } catch (error) {
    console.error("Error al obtener los datos de WhatsApp:", error);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="button-multiple">
    <button
      v-for="(button, index) in mainButtons"
      :key="index"
      class="button-circle"
      :class="{ 'shift-up': isAtTop }"
      @click="handleClick(button.action)"
    >
      <i :class="button.icon"></i>
    </button>

    <button
      v-if="uploadButton"
      class="button-circle upload-button"
      :class="{ 'slide-down': isAtTop }"
      @click="handleClick(uploadButton.action)"
    >
      <IconArrowDownFromArc />
    </button>
  </div>
</template>

<style scoped>
.button-multiple {
  z-index: 30;
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
  transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease;
}

.button-circle:hover {
  transform: scale(1.1);
}

.button-circle i {
  font-size: 24px;
}

.upload-button.slide-down {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease;
}

.shift-up {
  transform: translateY(70px);
  transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease;
}

.upload-button.slide-down:hover {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease;
}

.shift-up:hover {
  transform: translateY(70px);
  transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease;
}
</style>
