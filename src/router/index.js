import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DocsView from '@/views/DocsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' },
    },
  ],
})

export default router
