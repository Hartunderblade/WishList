import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/ui.vue';
import Login from '@/pages/login/ui.vue';
import Register from '@/pages/register/ui.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

export default router
