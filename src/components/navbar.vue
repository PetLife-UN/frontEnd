<template lang="">
    <header class="header">
        <div class="main">
            
            <nav class="centrar">
                <ul class="opcion">
                    <li class="vmenu">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-menu"  
                            viewBox="0 0 24 24">

                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                        <ul>
                            <li>
                                <button @click="goHome"
                                    aria-current="page"
                                    href="#"
                                    class="menu nav-link active home">
                                    Home
                                </button>
                            </li>
                            
                            <li>
                                <a href="">Backend</a>
                            </li>
                            
                            <li>
                                <a href="">Mobile</a>
                            </li>
                        </ul>  
                    </li>
                </ul>
            </nav>
            <h1 class="texto_centrado titulo">
                Pet<span>Life</span>
            </h1>
        </div>

        <nav class="tabs">

            <navuser v-if="userToken()"/>
            <navnew v-else/>

            <div class="btn-block btn-inicio">
                <button 
                    class="boton" 
                    type="button" 
                    v-on:click="goHome"
                    data-paso="inicio">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <line x1="9" y1="7" x2="15" y2="7" />
                        <line x1="9" y1="11" x2="15" y2="11" />
                        <line x1="9" y1="15" x2="13" y2="15" />
                    </svg>
                    Inicio
                </button>
            </div>

            <div class="btn-block btn-adopta">
                <button 
                    class="boton" 
                    type="button" 
                    v-on:click="goAdopta"
                    data-paso="adopta">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <line x1="9" y1="7" x2="15" y2="7" />
                        <line x1="9" y1="11" x2="15" y2="11" />
                        <line x1="9" y1="15" x2="13" y2="15" />
                    </svg>
                    Adopta
                </button>
            </div>
        </nav>
    </header>
</template>


<script>

import navuser from "@/components/navuser"
import navnew from "@/components/navnew"


export default {
    name:"navbar",
    
    components:{

        navuser,
        navnew
    },
    methods:{
        goHome(){
            this.$router.push('/');
        },

        userToken(){
            // return false;
            return localStorage.token;
        },        
        goAdopta(){
            this.$router.push('/adopta/1');

        }
        // goLogin(){
        //     this.$router.push('login');
        // },
        // goSignup(){
        //     this.$router.push('signup');
        // }
    }
}
</script>
<style lang="">
    
</style>