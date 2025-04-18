import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import FormCreateUser from '@/components/form/FormCreateUser.vue'
import FormLogin from '@/components/form/FormLogin.vue'
import FormForgetPassword from '@/components/form/FormForgetPassword.vue'
import BookView from '@/views/BookView.vue'
import DashboardComponent from '@/components/content/DashboardComponent.vue'
import BookComponent from '@/components/content/BookComponent.vue'
import FormCreateBook from '@/components/form/FormCreateBook.vue'
import FormEditBook from '@/components/form/FormEditBook.vue'

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
        },
        {
          path: '/esqueceu-senha',
          name: 'esqueceu-senha', 
          component: FormForgetPassword
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
          component: DashboardComponent
        },  
        {
          path: '/book',
          name: 'book', 
          component: BookComponent
        }, 
        {
          path: '/cadastro-livro',
          name: 'cadastro-livro', 
          component: FormCreateBook
        }, 
        {
          path: '/editar-livro',
          name: 'editar-livro', 
          component: FormEditBook
        },    
      ]
    },
  ],
})

export default router
