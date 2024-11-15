import { createApp, markRaw } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import '@splidejs/vue-splide/css';
import router from '@/router';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Particles from "vue3-particles";

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
})

pinia.use(piniaPluginPersistedstate)

const app = createApp(App);

app.use(router)
app.use(pinia)
app.use(Particles); 
app.mount('#app');
