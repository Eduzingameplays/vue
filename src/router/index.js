import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes com Lazy Loading
const HelloWorld = () => import('@/components/HelloWorld.vue');
const ImagensDiversas = () => import('@/components/ImagensDiversas.vue');
const OutroComponente = () => import('@/components/OutroComponente.vue');
const PaginaPrincipal = () => import('@/components/PaginaPrincipal.vue');
const TabelaDiversos = () => import('@/components/TabelaDiversos.vue');
const VideoUnico = () => import('@/components/VideoUnico.vue');

const routes = [
  { path: '/', component: PaginaPrincipal },  // Rota para a página principal
  { path: '/hello', component: HelloWorld },
  { path: '/imagens', component: ImagensDiversas },
  { path: '/outro', component: OutroComponente },
  { path: '/tabela', component: TabelaDiversos },
  { path: '/video', component: VideoUnico },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;