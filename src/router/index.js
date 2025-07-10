import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import BookView from '../views/BookView.vue'

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
          component: () => import('../components/form/FormLogin.vue')
        },
        {
          path: '/cadastro',
          name: 'cadastro', 
          component: () => import('../components/form/FormCreateUser.vue')
        },
        {
          path: '/esqueceu-senha',
          name: 'esqueceu-senha', 
          component: () => import('../components/form/FormForgetPassword.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      component: BookView,
      children: [
        {
          path: '',
          name: 'dashboard', 
          component: () => import('../components/content/DashboardComponent.vue')
        },  
        {
          path: '/livros',
          name: 'livros', 
          component: () => import('../components/content/BookComponent.vue')
        }, 
        {
          path: '/cadastro-livro',
          name: 'cadastro-livro', 
          component: () => import('../components/form/FormCreateBook.vue')
        }, 
        {
          path: '/editar-livro',
          name: 'editar-livro', 
          component: () => import('../components/form/FormEditBook.vue')
        },    
      ]
    },
  ],
})

export default router
