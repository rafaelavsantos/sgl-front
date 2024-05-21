import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
// import BookView from '../views/BookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../components/login/LoginComponent.vue'),
      },
      {
        path: '/cadastro-usuario',
        name: 'cadastro-usuario',
        component: () => import('../components/login/CreateUser.vue'),
      },
      {
        path: '/esqueceu-senha',
        name: 'esqueceu-senha',
        component: () => import('../components/login/ForgetPassword.vue'),
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
