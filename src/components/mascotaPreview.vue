<template>
  <div class="cardPre border border-dark">
      <h3> Aplicando para: </h3>
      <h3>{{this.name}}</h3> 
      <div class="imgVie">
          <img class=" img-fluid border border-dark" v-bind:src="this.link" alt="Fotografia de la mascota"/>
      </div>
      <div class="container infor" style=" text-align: center;">
          <p >Tiene {{this.age}} años </p>
          <p>Es un {{this.type}}</p> 
          <p>Es {{this.sex}}</p> 
      </div>
      <h5 style=" text-align: center;">¿No es la mascota deseada? Vuelva atras <button @click="goBack" class="btn btn-dark"><em class="fa fa-chevron-circle-left"></em></button></h5>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      link: "",
      name: "",
      age: "",
      type: "",
      sex: "",
    };
  },
  name: "petPreview",
  props: {
    idPet: {
      Type: Number,
      required: true,
    },
  },
  mounted: function ()  {
    //axios.get("http://localhost:8080/api/pet/consultaPet?idPet="+this.idPet).then( data =>{
    axios
        .get("https://unpetlife.herokuapp.com/api/pet/consultaPet?idPet=" + this.idPet)
        .then((data) => {
        this.link = data.data.links_foto;
        this.age = data.data.edad;
        this.type = data.data.tipo;
        this.sex = (data.data.sexo === "female")? "Hembra":"Macho";
        this.name = data.data.nombre;
        });
    },
    methods:{
      goBack(){
        this.$router.push('/adopta/1');
      }
    }
};
</script>

<style>
.cardPre{
  background: #a4c9e7de;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-left: 5%;
  margin-right: 5%;
-webkit-box-shadow: 11px 16px 26px 7px #0251A5; 
box-shadow: 11px 16px 26px 7px #0251A5;
}
.img-fluid{
  border-radius: 1rem;
}
.infor{
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-top: 1rem;
}
.imgVie{
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}
</style>