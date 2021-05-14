import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/login/Login.vue'
import Signup from '../views/register/Signup.vue'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Rpassword from '../views/recover/Contraseña.vue'
import Activate from '../views/recover/activate.vue'
import User from '../views/user/User.vue'
import AnimalReg from "../views/animalReg/AnimalReg.vue"
import Adopta from '../views/adopta/Adopta.vue'
import Info_mascota from '../views/adopta/Info_mascota.vue'
import userPets from '../views/user/userPets.vue'
import ConsultaApli from '../views/apliAdopcion/ConsultaApli.vue' 
import ApliAdopcion from '../views/apliAdopcion/ApliAdopcion.vue' 

const routes = [
  {
    path: '/activate/:token',
    name: 'Activate',
    component: Activate
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/',
    name: 'Home',
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

    path: '/password/:id',
    name: 'Password',
    component: Rpassword
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

  },
  {
    path: '/user/userPet',
    name: 'userPet',
    component: userPets
  },
  {
    path: '/apply/:idPet',
    name: 'Aplicar_Adopcion',
    component: ApliAdopcion
  },
  {
    path: '/profile/consultaapli/:numPage',
    name: 'ConsultaApli',
    component: ConsultaApli
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
