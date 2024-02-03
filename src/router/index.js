import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import('../components/pages/home.vue'),
    },
    {
        path:'/aboutus',
        name: 'aboutus',
        component: ()=> import('../components/pages/aboutus.vue')
    },
    {
        path:'/kontakt',
        component:'kontakt',
        component: ()=> import('../components/pages/kontakt.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: 'NotFound',
        component: ()=> import('../components/notfound.vue'),
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return savedPosition || { top:0 }
    }
  })
  
  export default router