import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/ui.vue';
import Login from '@/pages/login/ui.vue';
import Register from '@/pages/register/ui.vue';
import UserProfile from '@/pages/profile/ui.vue';
import UserAbout from '@/pages/about/ui.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'profile',
          name: 'Profile',
          component: UserProfile
        },
        {
          path: 'about',
          name: 'About',
          component: UserAbout
        },
      ]
    },
    {
      path: '/',
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
