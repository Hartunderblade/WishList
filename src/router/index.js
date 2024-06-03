import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/ui.vue';
import Login from '@/pages/login/ui.vue';
import Register from '@/pages/register/ui.vue';
import UserProfile from '@/pages/profile/ui.vue';
import UserFrends from '@/pages/frends/ui.vue';
import UserSettings from '@/pages/settings/ui.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Profile',
          component: UserProfile
        },
        {
          path: 'frends',
          name: 'Frends',
          component: UserFrends
        },
        {
          path: 'settings',
          name: 'Settings',
          component: UserSettings
        }
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
