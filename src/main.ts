import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
//Bootstrap
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
 



createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
