import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import FormCreateUser from '@/components/form/FormCreateUser.vue'
import FormLogin from '@/components/form/FormLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView,
      children: [
        {
          path: '',
          name: 'login', 
          component: FormLogin
        },
        {
          path: '/cadastro',
          name: 'cadastro', 
          component: FormCreateUser
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
