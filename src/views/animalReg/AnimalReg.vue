<template>
    <navbar/>
    <div class="container">
        <h1>Registra la mascota a dar en adopción </h1>
        <animalRegForm/> 
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import animalRegForm from '@/components/animalRegForm.vue' 
export default {
  components: { navbar, animalRegForm },
    name:"animalreg"    
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
