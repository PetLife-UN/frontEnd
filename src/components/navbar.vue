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

            <div class="btn-block btn-ingreso" v-if="!userToken()"> 
                <button 
                    class="boton" 
                    id="BIngresar" 
                    type="button" 
                    v-on:click="goLogin"
                    data-paso="ingreso">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                    Ingreso
                </button>
            </div>

            <div class="btn-block btn-registro" v-if="!userToken()" >
                <button 
                    class="boton" 
                    id="BRegistrar" 
                    type="button" 
                    v-on:click="goSignup"
                    data-paso="registro">

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
                    Registro
                </button>
            </div>

            


            <div class="btn-block btn-profile" v-if="userToken()">
        
                <button
                    class="boton" 
                    type="button" 
                    v-on:click="goProfile"
                    data-paso="profile">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    Perfil
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

    },
    methods:{
        
        userToken(){
            return localStorage.token;
        },
        goHome(){
            this.$router.push('/');
        },        
        goAdopta(){
            this.$router.push('/adopta/1');

        },
        goLogin(){
            this.$router.push('/login');
        },
        goSignup(){
            this.$router.push('/signup');
        },
        goUser(){
            this.$router.push('/user');
        },
        goProfile(){
            this.$router.push('/profile');
        },

    }
}
</script>
<style lang="">
    
</style>