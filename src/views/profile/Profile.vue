<template lang="">
    <navbar/>
    <div class="container emp-profile">
        <h1 class="py-5 text-center">Bienvenido </h1>
        <img src="./../../assets/husky-1-unscreen.gif">
        
        <div class="container">
            <button @click="goRegister" type="button" class="btn btn-success">Registrar mascota para adopción</button>
        </div>
        

    </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "Profile",
  components: {
    navbar,
  },
  methods:{
      goRegister(){
          this.$router.push('animalreg')
      }
  }
};
</script>
<style lang="">
</style>