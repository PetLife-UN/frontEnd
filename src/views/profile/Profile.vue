<template lang="">
  
  <navbar/>
  
  <div class="espacio_trabajo">
    <div class ="subtitulo">
      <h1 class="titulo_home texto_centrado">
        Perfil de Usuario
      </h1>
    </div>
  </div>

  <div class="separacion">
    
    <div class="usuario">

      <div class="nombre datos">
        <h3>Usuario<span>:</span></h3>
        <h2>{{Nombre(json)}}</h2>
        <hr>
      </div>
      
      <div class="correo datos">
        <h3>E-mail<span>:</span></h3>
        <h2>{{Email(json)}}</h2>
        <hr>
      </div>
      
      <div class="celular datos">
        <h3>Celular<span>:</span></h3>
        <h2>{{Cell(json)}}</h2>
        <hr>
      </div>

      <div class="celular datos">
        <h3>Role<span>:</span></h3>
        <h2>{{Rol(json)}}</h2>
      </div>

      <div class="celular datos">
        <h3>Ultima conexion<span>:</span></h3>
        <h2>{{UltimaCon(json)}}</h2>
      </div>
    </div>

    <div class="botones">
      <div class = "col-6 menu_botones">
        <button type="button" class ="btn" v-on:click="goRegister">Registrar mascota para adopción</button>

        <button type="button" class ="btn" v-on:click="goApliAdopcion">Consulta solicitudes de adopción</button>

        <button type="button" class ="btn" v-on:click="goUserPets">Ver mis publicaciones</button>
      </div>  
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import axios from "axios";

var a=1;
export default {
  name: "Profile",
  data() {
    return {
      json: null,
      errorBool: false
    };
  },
  components: {
    navbar,
  },
  methods:{
      goRegister(){
          this.$router.push('animalreg')
          // console.log(this.json.name);
      },
      goApliAdopcion(){
          this.$router.push('/profile/consultaapli/1')
      },
      goUserPets(){
          this.$router.push('/user/userPet')
      },
      Nombre(js) {
        if(js != null){
          return `${js.name} ${js.surname}`;
        }
      },
      Email(js) {
        if(js != null){
          return `${js.email}`;
        }
      },
      Cell(js) {
        if(js != null){
          return `${js.cellPhoneNumber}`;
        }
      },
      Rol(js) {
        if(js != null){
          
          return `${js.roles}`;
        }
      },
      UltimaCon(js){
        if(js != null){
          return localStorage.horaultima;
        }
      }
  },
  mounted:function(){
    var token = localStorage.token;
    //Actualizar los datos de usuario put https://unpetlife.herokuapp.com/api/user/modifyUserDetails
    // {
    // "name": "Juan Camilo",
    // "surname": "Villota",
    // "cellPhoneNumber": "3144463105"
    // } 
    axios
      .get("https://unpetlife.herokuapp.com/api/user/getUserDetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      })
      .then((data) => {
        if(data.data != null) {
          this.json = data.data;
        }
        // console.log(this.json);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.errorBool = true;
        }
      });
    
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