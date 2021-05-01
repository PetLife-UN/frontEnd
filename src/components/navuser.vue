<template lang="">
               
    <div class="btn-block btn-menu">
        
        <button
            class="boton" 
            type="button" 
            @click="goUser"
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
</template>

<script>

export default {
    name:"navuser",
    methods:{
        goUser(){
            this.$router.push('/user');
        }
    }
}
</script>