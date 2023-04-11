import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/index.vue'
import Register from '../components/Register/index.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/Login',component:Login},
  {path:'/',redirect:'/Login'},
  {path:'/Register',component:Register}
]

const router = new VueRouter({
  routes
})

export default router
