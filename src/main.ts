// main.ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@splidejs/vue-splide/css';
import Particles from 'vue3-particles';  // Importa vue3-particles

const app = createApp(App);

app.use(Particles);  // Usa el plugin de partículas en la aplicación

app.mount('#app');
