<template lang="">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
            <h3 class="float-md-start mb-0">PetLife</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active" aria-current="page" href="#" @click="goHome">Inicio</a>
                <a class="nav-link" href="#">Acerca</a>
                <a class="nav-link" href="#" @click="goLogin">Login</a>
            </nav>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name:"navbar",
    methods:{
        goHome(){
            this.$router.push(' ');
        },
        goLogin(){
            this.$router.push('login');
        }

    }
}
</script>
<style lang="">
    
</style>