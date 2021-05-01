<template>
    <navbar/>
    <div class="container">
        <h1>Registra la mascota a dar en adopción </h1>
        <div class = "container">
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver a mascotas</button>
        </div>
        <animalRegForm/> 
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import animalRegForm from '@/components/animalRegForm.vue' 
export default {
    components: { 
      navbar, animalRegForm 
    },
    methods:{
        volver(){
            this.$router.go(-1);
        }
    },
    name:"animalreg",
}
</script>

<style scoped>
    h1{
        height: 15rem;
        color: black;
        text-shadow: 15px;
        text-emphasis: inherit;
    }
</style>
