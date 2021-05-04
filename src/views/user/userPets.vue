<template lang="">
  <navbar />
  <div v-if="!this.errorBool">
    <div class="album py-5">
      <div class ="container ">
        <p class=" h1 ">Mascotas Publicadas</p>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <petCardUser v-for="(item,index) in json" v-bind:key="index" v-bind:item="item" v-bind:imageRoute= item.link_foto v-bind:petDescription= item.descripcion v-bind:petName= item.nombre  />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <h1>El usuario no tiene mascotas</h1>
    </div>
  </div>
</template>

<script>
import petCardUser from "@/components/petCardUser";
import navbar from "@/components/navbar";
import axios from "axios";

export default {
  name: "userPetView",
  data() {
    return {
      json: null,
      errorBool: false,
    };
  },
  components: {
    navbar,
    petCardUser,
  },
  methods: {},
  mounted: function () {
    const token = localStorage.token;
    axios
      .get("https://unpetlife.herokuapp.com/api/pet/getUserPets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        this.json = data.data;
        console.log(this.json);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.errorBool = true;
        }
      });
  },
};
</script>
