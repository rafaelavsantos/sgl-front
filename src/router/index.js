import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import BookView from '../views/BookView.vue'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:
    [
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
  },
  {
    path: '/book',
    component: BookView,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../components/book/DashboardBook.vue'),
        meta: { auth: false },
      },
      {
        path: '/book/listagem',
        name: 'book',
        component: () => import('../components/book/BookPage.vue'),
        meta: { auth: false },
      },
      {
        path: '/create-book',
        name: 'create-book',
        component: () => import('../components/book/CreateBook.vue'),
        meta: { auth: false },
      },
      {
        path: '/edit-book',
        name: 'edit-book',
        component: () => import('../components/book/EditBook.vue'),
        meta: { auth: false },
      }
    ]
  }
]});

router.beforeEach(async (to, from, next) => {
  // para garantir que a pessoa quevai acessar tem autorização
  if (to.meta?.auth) {
    const auth = useAuthStore();
    if (auth.token && auth.id_user) {
      const isAuthenticated = await auth.checkToken();

      if (isAuthenticated) {
        next();
      } else {
        next({ name: 'login' });
      }
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
