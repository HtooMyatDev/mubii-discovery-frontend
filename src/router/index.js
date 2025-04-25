import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/store/store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movies',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MoviesView.vue'),
    },
    {
      path: '/movie/:id/details/',
      name: 'movieDetails',
      props: true,
      component: () => import('../views/movie/DetailsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authentication/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/authentication/SignupView.vue'),
    },
    {
      path: '/social-login-success',
      name: 'SocialLoginSuccess',
      component: () => import('../views/authentication/SocialLoginSuccess.vue'),
    },
    {
      path: '/social-login-failure',
      name: 'SocialLoginFailure',
      component: () => import('../views/authentication/SocialLoginError.vue'),
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: () => import('../views/profile/ProfileView.vue'),
    },
    {
      path: '/user/profile/password',
      name: 'ChangePassword',
      component: () => import('../views/profile/PasswordPage.vue'),
    },
    {
      path: '/password-change-success',
      name: 'ChangePasswordSuccess',
      component: () => import('../views/authentication/PasswordChangeSuccess.vue'),
    },
  ],
})

router.beforeEach(async (to, from) => {
  const store = useUserStore()
  if (!store.token && to.name === 'UserProfile') {
    return { name: 'login' }
  }
})

export default router
