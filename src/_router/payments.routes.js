export const paymentsRoutes = [
  {
    path: '/payments',
    component: () => import('@/views/payments/Payments.vue')
  },
  {
    path: '/payments/details-1',
    component: () => import('@/views/payments/Details-1.vue')
  },
  {
    path: '/payments/details-2',
    component: () => import('@/views/payments/Details-2.vue')
  }
];