// main.ts
import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import '@splidejs/vue-splide/css';
import Particles from 'vue3-particles';  // Importa vue3-particles
import router from '@/router';
import axios from 'axios';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:1337/api';

app.use(Particles);  // Usa el plugin de partículas en la aplicación
app.use(router)
app.mount('#app');
