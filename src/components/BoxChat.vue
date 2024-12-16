<script setup>
import { defineProps, defineEmits, ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    open: {
        type: Boolean,
        required: true
    }
})

// Definir los eventos que el componente puede emitir
const emit = defineEmits(['close-chat']);

// Referencia al contenedor del chat
const chatContainer = ref(null);

// Función para emitir el evento de cierre
const closeChat = () => {
    // emit('close-chat');
    props.open = false
    console.log(props.open)
};

// Función para manejar clics fuera del chat
const handleClickOutside = (event) => {
    if (chatContainer.value && !chatContainer.value.contains(event.target)) {
        emit('close-chat');
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
    <div v-if="open" ref="chatContainer" class="chatbot-container">
        <button @click="closeChat" class="close-button">X</button>
        <iframe frame src="https://chatbot.sistemasudh.com" frameborder="2"></iframe>
    </div>
</template>

<style scoped>
.chatbot-container {
    position: fixed;
    bottom: 110px;
    right: 30px;
    z-index: 2147483647;
    width: 450px;
    height: 550px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 10px 10px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    animation: fadeIn 0.5s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    iframe {
        width: 100%;
        height: 100%;
    }

}

@media (min-width: 768px) {
    .chatbot-container {
        width: 350px;
        height: 500px;
    }
}

@media (max-width: 768px) {
    .chatbot-container {
        width: 350px;
        height: 500px;
    }
}

.close-button {
    position: absolute;
    top: 19px;
    right: 14px;
    background: #000000;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    z-index: 1000;
}
</style>