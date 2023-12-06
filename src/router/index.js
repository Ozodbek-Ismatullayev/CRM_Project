import { createRouter,createWebHistory } from 'vue-router'
import auth from './auth'
import warehouse from './warehouse'
import director from './director'
import sales from './sales'
import finance from './finance'

const routes = [
  auth,
  warehouse,
  director,
  sales,
  finance,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
