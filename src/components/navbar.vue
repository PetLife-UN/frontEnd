<template lang="">
    <header class="header">
        <div class="main">
            <a 
                @click="goHome"
                aria-current="page"
                href="#"
                class="menu nav-link active">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-menu"  
                    viewBox="0 0 24 24">

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </a>
            
            <h1 class="texto_centrado titulo">
                Pet<span>Life</span>
            </h1>
        </div>

        <nav class="tabs">

            <div class="btn-block btn-menu no-mirar">
                
                <button
                    class="boton" 
                    type="button" 
                    data-paso="menu">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    Usuario
                </button>
            </div>

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



            <div class="btn-block btn-registro">
                <button 
                    class="boton" 
                    type="button" 
                    @click="goSignup"
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

            <div class="btn-block btn-ingreso">
                <button 
                    class="boton" 
                    type="button" 
                    @click="goLogin"
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
        </nav>
    </header>
</template>


<script>
export default {
    name:"navbar",
    methods:{
        goHome(){
            this.$router.push('/');
        },
        goLogin(){
            this.$router.push('/login');
        },
        goSignup(){
            this.$router.push('/signup');
        },
        goAdopta(){
            this.$router.push('/adopta/1');
        }

    }
}
</script>
<style lang="">
    
</style>