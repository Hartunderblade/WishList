import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/ui.vue';
import Login from '@/pages/login/ui.vue';
import Register from '@/pages/register/ui.vue';
import UserProfile from '@/pages/profile/ui.vue';
import UserFrends from '@/pages/frends/ui.vue';
import UserSettings from '@/pages/settings/ui.vue';
import AboutFriends from '@/shared/aboutFried/ui.vue';

import { isAuthenticated } from '@/store/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        needAuth: true,
      },
      children: [
        {
          path: '',
          name: 'Profile',
          component: UserProfile,
          meta: {
            isPersonalPage: true,
          }
        },
        {
          path: 'frends',
          name: 'Frends',
          component: UserFrends
        },
        {
          path: 'frend/:id',
          name: 'Frend',
          component: AboutFriends
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

// router.beforeEach( (to, from) => {
//   if(to.meta.needAuth && !isAuthenticated.value){
//     return { name: 'Login' }
//   }
// })

export default router
