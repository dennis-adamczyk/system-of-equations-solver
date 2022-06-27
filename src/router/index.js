import About from '@/views/About.vue';
import Solver from '@/views/Solver.vue';
import Video from '@/views/Video.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Solver',
    component: Solver,
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
