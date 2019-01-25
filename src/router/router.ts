import Home from '@/components/pages/home/Home.vue';
import About from '@/components/pages/about/About.vue';
import {RouteConfig} from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

export  default routes;
