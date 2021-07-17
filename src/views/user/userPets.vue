<template lang="">
	<navbar />
	<div v-if="!this.errorBool" class="espacio_trabajo">
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">
				Mascotas Publicadas
			</h1>
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
			/>
		</div>
	</div>

	<div v-else class="espacio_trabajo">
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">
				Mascotas Publicadas
			</h1>
		</div>
		<div class = "container_img_notresults bg-light" >
			<img src="../../assets/img/dog_confused.png" >
			<p class="title_notfound">No se han encontrado resultados</p>
			<p class="subtitle_notfound">Parece que no tienes mascotas publicadas</p>
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
	},
	mounted: function () {
		this.updateValues();
	},
};
</script>
