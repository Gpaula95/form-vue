import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout';
import Cadastro from '@/components/Cadastro/Cadastro';
import Login from '@/components/Login/Login';
import Confirmacao from '@/components/Confirmacao/Confirmacao';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/sign',
      children: [
        {
        component: Cadastro,
        name: 'Cadastro',
        path: '/sign',
        },
        {
          component: Login,
          name: 'Login',
          path: '/login',
        },
        {
          component: Confirmacao,
          name: 'Confirmação',
          path: '/confirm-data',
        }
      ]
    }
  ]
})

export default router
