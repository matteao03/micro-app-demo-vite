import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MicroView1 from '../views/MicroView1.vue'
import MicroView2 from '../views/MicroView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/micro-app1/:page*',
      name: 'micro-app1',
      component: MicroView1,
    },
    {
      path: '/micro-app2/:page*',
      name: 'micro-app2',
      component: MicroView2,
    },
  ]
})

export default router
