<template>
<div class="row">
    <div class=" col-sm-3 offset-sm-1">
        <img class="card-img-top img-fluid" v-bind:src="this.link" alt="Fotografia de la mascota"/>
    </div>
    <div class="col-sm-7">
        <h3> Esta aplicando para la siguiente mascota</h3>
        <h5 class="title" style="font-size: 22px">{{this.name}}</h5>
        <p>Descripción: <br> {{this.message}}</p>  
        <p> Tiene {{this.age}} años, es un {{this.type}}, es {{this.sex}} y es de tamaño {{this.size}} </p>
    </div>
</div>
<div class="container">
    <h3 style="margin: 3rem">Si esta de acuerdo con la información, llene el siguiente formulario</h3>
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
      sex: " ",
      size: "",
      message: ""
    };
  },
  name: "petPreview",
  props: {
    idPet: {
      Type: Number,
      required: true,
    },
  },
  mounted: function () {
    //axios.get("http://localhost:8080/api/pet/consultaPet?idPet="+this.idPet).then( data =>{
    axios
        .get("https://unpetlife.herokuapp.com/api/pet/consultaPet?idPet=" + this.idPet)
        .then((data) => {
        this.link = data.data.links_foto;
        this.age = data.data.edad;
        this.type = data.data.tipo;
        this.sex = data.data.sexo;
        this.size = data.data.tamano;
        this.name = data.data.nombre;
        this.message = data.data.descripcion;
        });
    },
};
</script>