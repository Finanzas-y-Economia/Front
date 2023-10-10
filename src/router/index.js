import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import BankHome from '../components/Bankhome.vue'
import MethodFrances from '../components/MethodFrances.vue'
import Record from '../components/Record.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      name:'home',
      component:Home,
      path:'/home',

    },
    {
      name :'login',
      component: Login,
      path:'/login',
    },
    {
      name:'bankhome',
      component: BankHome,
      path:'/bankhome',
    },
    {
      name:'methodfrances',
      component: MethodFrances,
      path:'/methodfrances',
    },
    {
      name:'record',
      component: Record,
      path:'/record',
    }
    
  ]
})

export default router
