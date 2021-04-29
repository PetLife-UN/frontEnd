<template lang="">

    <div class="btn-block btn-registro">
        <button 
            class="boton" 
            id="BRegistrar" 
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
            id="BIngresar" 
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
</template>


<script>

export default {
    name:"navnew",
    methods:{
        goHome(){
            this.$router.push(' ');
        },
        goLogin(){
            this.$router.push('/login');
        },
        goSignup(){
            this.$router.push('/signup');
        }
    }
}
</script>
<style lang="">
    
</style>