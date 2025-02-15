<script setup>
import { IconX } from '@tabler/icons-vue';
import { defineProps, ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    open: {
        type: Boolean,
        required: true
    },
    close: {
        type: Function,
        required: true
    }
})

// Referencia al contenedor del chat
const chatContainer = ref(null);

// Función para manejar clics fuera del chat
const handleClickOutside = (event) => {
    // Verificar si el clic está fuera del contenedor del chat y del botón de chat
    const chatbotButton = document.getElementById('chatbot-button');
    if (
        chatContainer.value &&
        !chatContainer.value.contains(event.target) &&
        chatbotButton &&
        !chatbotButton.contains(event.target)
    ) {
        props.close();
    }
};

// Agregar y remover el listener de clics globales
onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <transition name="chat">
        <div v-if="open" ref="chatContainer" class="chatbot-container">
            <button @click="props.close" class="close-button text-slate-400">
                <IconX class="w-7 h-7" />
            </button>
            <iframe src="https://chatbot.sistemasudh.com" frameborder="2"></iframe>
        </div>
    </transition>
</template>

<style scoped>
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 450px;
    height: 550px;
    background: #fff;
    border-radius: 10px;
    box-shadow: -2px 10px 20px 0 rgba(0, 0, 0, 0.8);
    overflow: hidden;
    /* Animación de entrada */
    animation: slideIn 0.5s ease-out;
}

/* Animaciones de entrada y salida */
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Estilos de transición de Vue */
.chat-enter-active,
.chat-leave-active {
    transition: all 0.5s ease;
}

.chat-enter-from,
.chat-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.chat-enter-to,
.chat-leave-from {
    opacity: 1;
    transform: translateY(0);
}

iframe {
    width: 100%;
    height: 100%;
}

.close-button {
    position: absolute;
    top: 20px;
    right: 100px;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-weight: bold;
}

@media (min-width: 768px) {
    .chatbot-container {
        width: 450px;
        height: 600px;
    }
}

@media (max-width: 768px) {
    .chatbot-container {
        width: 350px;
        height: 600px;
    }
}
</style>