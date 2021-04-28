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