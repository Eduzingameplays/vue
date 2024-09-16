import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

// Configuração do VueLazyload
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path/to/error.png',  // Imagem de erro
  loading: 'path/to/loading.gif',  // Imagem de carregamento
  attempt: 1
});

app.use(router);
app.mount('#app');