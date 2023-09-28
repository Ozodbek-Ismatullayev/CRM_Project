import { createRouter,createWebHistory } from 'vue-router'
import Login from '../views/auth/Auth.vue'
import Warehouse from '../views/warehouse/Warehouse.vue'
import Finance from '../views/finance/Finance.vue'
import Sales from '../views/sales/Sales.vue'
import Director from '../views/director/Director.vue'
import Products from '../views/warehouse/Products.vue'
import Profile from '../views/global/Profile.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: Warehouse,
    children:[
      {
        path: '/products',
        name: 'products',
        component: Products,
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
      },
    ]
  },
  {
    path: '/finance',
    name: 'finance',
    component: Finance
  },
  {
    path: '/sales',
    name: 'sales',
    component: Sales
  },
  {
    path: '/director',
    name: 'director',
    component: Director
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
