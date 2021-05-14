<template lang="">
    <navbar/>
    <div class ="container-fluid profile_body bg-light">
        <div class="container ">
            <h1 class="py-5 text-center">Perfil </h1>
            <div class = "container">
                <div class = "row">
                    <div class = "col-6">
                        <img src="./../../assets/gif/husky_1.gif">
                        
                    </div>
                    <div class = "col-6 menu_botones">
                        <button type="button" class ="btn" v-on:click="goRegister">Registrar mascota para adopción</button>
                        <br>
                        <br>
                        <button type="button" class ="btn" v-on:click="goApliAdopcion">Consulta solicitudes de adopción</button>
                        <br>
                        <br>
                        <button type="button" class ="btn" v-on:click="goUserPets">Ver mis publicaciones</button>
                    </div>
                </div>
            </div>
            
            
            <br>
            <br>
            

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
      },
      goApliAdopcion(){
          this.$router.push('/profile/consultaapli/1')
      },
      goUserPets(){
          this.$router.push('/user/userPet')
      }
  }
};
</script>
<style >
    .profile_body {
        min-height: 500px;
    
    }
    .menu_botones button{
        background-color: #4B8BDD;
        color:#ffffff;
        font-size: 25px;
        padding: 5px 32px;
        text-align: center;
    }
</style>