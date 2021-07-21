<template lang="">
	<navbar />
	<div v-if="!this.errorBool" class="espacio_trabajo">
		
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">
				Mascotas Publicadas
			</h1>
		</div>

		<div class = "botones">
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver al Usuario</button>
        </div>

		<div class="row tres_mascotas">
			<petCardUser
				v-for="(item, index) in json"
				v-bind:key="index"
				v-bind:item="item"
				v-bind:imageRoute="item.link_foto"
				v-bind:petDescription="item.descripcion"
				v-bind:petName="item.nombre"
				v-bind:idPet="item.id"
				v-bind:edad="item.edad"
				v-bind:tipo="item.tipo"
				v-bind:raza="item.raza"
				v-bind:updateValues="updateValues"
				v-bind:showSnackDelete="showSnackDelete"
				v-bind:hideSnackDelete="hideSnackDelete"
			/>
		</div>
	</div>

	<div v-else class="espacio_trabajo">
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">

				El Usuario no Tiene Mascotas

			</h1>
		</div>
		<div class = "container_img_notresults bg-light" >
			<img src="../../assets/img/dog_confused.png" >
			<p class="title_notfound">No se han encontrado resultados</p>
			<p class="subtitle_notfound">Parece que no tienes mascotas publicadas</p>
        </div>
	</div>
	<div id="snackbar_delete">{{msgDelete}}</div>



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
			msgDelete: "Eliminando mascota ..."
		};
	},
	components: {
		navbar,
		petCardUser,
	},
	methods: {

		updateValues(){
			var token=localStorage.token;
			axios
				.get("https://unpetlife.herokuapp.com/api/pet/getUserPets", {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				})
				.then((data) => {
					this.json = data.data;
					//console.log(this.json);
				})
				.catch((error) => {
					if (error.response.status === 404) {
						this.errorBool = true;
					}
				});
		},

		volver(){
            this.$router.go(-1);
        },

		showSnackDelete() {
			this.msgDelete = "Eliminando mascota ..." 
			var x = document.getElementById("snackbar_delete");
			x.className = "show";
			
		},
		hideSnackDelete() {
			var x = document.getElementById("snackbar_delete");
			this.msgDelete = "Mascota eliminada"
			setTimeout(function(){ x.className = x.className.replace("show", "");  }, 2000);
			
		},
		

	},
	mounted: function () {
		this.updateValues();
	},
};




</script>


<style>

	#snackbar_delete {
		visibility: hidden;
		min-width: 250px;
		margin-left: -125px;
		background-color: #fff;
		border-style: solid;
		border-color: rgb(77, 77, 77);
		color: #333;
		text-align: center;
		border-radius: 20px;
		padding: 16px;
		position: fixed;
		z-index: 1;
		left: 50%;
		bottom: 30px;
		font-size: 17px;
	}

	#snackbar_delete.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s;
		animation: fadein 0.5s;
	}

	@-webkit-keyframes fadein {
		from {bottom: 0; opacity: 0;} 
		to {bottom: 30px; opacity: 1;}
	}

	@keyframes fadein {
		from {bottom: 0; opacity: 0;}
		to {bottom: 30px; opacity: 1;}
	}




</style>
