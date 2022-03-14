

export const demosRoutes = [
  {
    path: '/demos/global-nav',
    component: () => import('@/views/demos/GlobalNavDemo.vue')
  },
  {
    path: '/demos/name/:id',
    component: () => import('@/views/demos/Name.vue'),
    props: true
  },
  {
    path: '/demos/users',
    component: () => import('@/views/demos/Users.vue')
  },
  {
    path: '/help',
    component: () => import('@/views/demos/help/Help.vue')
  },
  {
    path: '/demos/content-tabs',
    component: () => import('@/views/demos/content-tabs/Content-Tabs.vue')
  },
  {
    path: '/demos/stepped',
    component: () => import('@/views/demos/stepped/Stepped.vue')
  }
]