import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'
import Signup from '../views/register/Signup.vue'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import AnimalReg from "../views/animalReg/AnimalReg.vue"
import Adopta from '../views/adopta/Adopta.vue'
import Info_mascota from '../views/adopta/Info_mascota.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/animalreg',
    name: 'AnimalReg',
    component: AnimalReg
  },
  {
    path: '/adopta/:idPage',
    name: 'Adopta',
    component: Adopta
  },
  {
    path: '/info_mascota/:idPet',
    name: 'Info_mascota',
    component: Info_mascota
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
