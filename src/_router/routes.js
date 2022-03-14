import { createRouter, createWebHistory } from 'vue-router';

import { sharedRoutes } from './shared.routes';
import { paymentsRoutes } from './payments.routes';
import { demosRoutes } from './demos.routes';


const routes = [
  ...sharedRoutes,
  ...demosRoutes,
  ...paymentsRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/olp/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
