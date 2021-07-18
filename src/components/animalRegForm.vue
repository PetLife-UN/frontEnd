<template>
	<form class="rmascota">
		
		<div class="mascotas_registro">

			<h2 class="intro texto_izquierda">
				Datos De Mascota
			</h2>

			<div class="datos nombre">
				
				<h3 for="name" 
					class="">
					Nombre*
				</h3>

				<input
					type="text"
					class="inscribir mayuscula form-control"
					id="name"
					placeholder="Nombre Mascota"
					v-model="this.name">

				<p v-if="msg.name"
					class="info">
					{{msg.name}}
				</p>
			</div>
			
			<div class="datos tipo">
				
				<h3 
					for="type" 
					class="">
					Tipo* 
				</h3>
				
				<select 
					class="seleccion inscribir form-control"
					id="type" 
					v-model="type">
					
					<option 
						selected 
						disabled 
						hidden 
						value="">
						Tipo de Mascota
					</option>
					
					<option value="Canino">Canino</option>
					<option value="Felino">Felino</option>
					<option value="Bovino">Bovino</option>
					<option value="Pez">Pez</option>
					<option value="Roedor">Roedor</option>
					<option value="Ave">Ave</option>
					<option value="Equino">Equino</option>
					<option value="Otro">Otro</option>
				</select>
			</div>

			<div class="datos raza">
				
				<h3 
					for="type" 
					class="">
					Raza
				</h3>

				<input
					type="text"
					v-model="breed"
					class="inscribir mayuscula form-control"
					id="breed"
					placeholder="Raza de la Mascota">
			</div>

			<div class="datos peso">
				
				<h3 for="size" 
					class="">
					Peso*
				</h3>
				
				<select 
					class="seleccion inscribir form-control" 
					id="size" 
					v-model="size">
					<option 
						selected 
						disabled 
						hidden 
						class="opciones" 
						value="">
						Peso de la Mascota
					</option>
					<option value="Chico (menos de 5 Kg)">Chico(-5Kg)</option>
					<option value="Pequeño (de 6 a 14 Kg)">Pequeño(6 a 14Kg)</option>
					<option value="Mediano (de 15 a 25 Kg)">Mediano(15 a 25Kg)</option>
					<option value="Grande (de 26 a 50 kg)">Grande(26 a 50kg)</option>
					<option value="Enorme (mayor a 50 kg)">Enorme(+50 kg)</option>
				</select>
			</div>

			<div class="datos edad">
				
				<h3 for="age" 
					class="">
					Edad* 
				</h3>
				
				<input
					type="number"
					v-model="age"
					class="seleccion inscribir form-control"
					id="age"
					placeholder="Edad de la mascota"/>
				
				<p v-if="msg.age"
					class="offset-md-3 info">
					{{msg.age}}
				</p>
			</div>
			
			<div class="datos esteril">
				
				<h3 class="">
					Esterilizado*
				</h3>
				
				<div 
					@click="esteril"
					class="progress">
					<div class="bar" id="Ebar"></div >
					<h4 class="percent" id="Epercent">No se</h4>
				</div>

			</div>

			<div class="datos sexo">
				
				<h3 class="col-3">
					Sexo*
				</h3>

				<div 
					@click="Sexo"
					class="progress">
					<div class="bar" id="Sbar"></div >
					<h4 class="percent" id="Spercent">-</h4>
				</div>

			</div>

			<div class="datos vacuna">

				<h3 class="">
					¿Vacunas al día?*
				</h3>
				
				<div 
					@click="Vacuna"
					class="progress">
					<div class="bar" id="Vbar"></div >
					<h4 class="percent" id="Vpercent">No se</h4>
				</div>

			</div>

			<div class="datos imagen">
			
				<h3 
					for="image" 
					class="">
					Fotografia*
				</h3>

				<div class="dropbox">
					<input 
						type="file" 
						name:="image" 
						:disabled="isSaving"
						@change="filesChange($event.target.files)" 
						accept="image/*"
						class="input-file" 
						id="file">

					<p v-if="isInitial">
						Arrastre la fotografia de la mascota
						<br>
						<span>
							O haga click.
						</span>
					</p>
					
					<p v-if="isSaving">
						Imagen subida. 
						<br>
						<span>
							Arrastre o click para cambiar.
						</span>
					</p>
					
					<p v-if="isLoading">
						Subiendo imagen
					</p>
				</div>

				<img
					src="https://infocusmfg.com/wp-content/uploads/2015/10/brown-basket-400x400.png"
					id="img"
					class=""
					alt="Image">

			</div>

			<div class="datos Mensaje">
				
				<h3 
					for="message" 
					class="">
					Mensaje de adopción*
				</h3>

				<textarea
					v-model="message"
					class="form-control seleccion"
					id="message"
					placeholder="Comportamiento del animal, gustos, es amabel con los niños, se adapta a espacios pequeños..."
					rows="8">
				</textarea>
			</div>
			<div class="datos Mensaje texto_centrado">

				<h3 class="texto_centrado">
					Los campos marcados con astericos (*) son obligatorios
				</h3>
			</div>

			<div class="datos botones">
		
				<button 
					class="btn btn-primary publicar" 
					@click="publicar" 
					type="button" 
					:disabled="isDisable">
					Publicar
				</button>

				<button 
					type="button" 
					class="btn btn-danger cancelar" 
					@click="cancelar">
					Cancelar
				</button>
			</div>

		</div>
	
	</form>
</template>

<script>

import axios from "axios";

var url = document.getElementById("url");
const STATUS_INITIAL = 0,
	STATUS_SAVING = 1,
	STATUS_LOADING = 2;
export default {
	name: "animalRegForm",
	data() {
		return {
			currentStatus: STATUS_INITIAL,
			name: "",
			age: "",
			sterile: "Desconosco",
			type: "",
			sex: "",
			breed: "",
			size: "",
			vaccines: "Desconosco",
			message: "",
			url: "",
			active: false,
			msg: []
		};
	},
	computed: {
		isInitial() {
			return this.currentStatus === STATUS_INITIAL;
		},
		isSaving() {
			return this.currentStatus === STATUS_SAVING;
		},
		isLoading(){
			return this.currentStatus === STATUS_LOADING;
		},
		isDisable(){
			return this.checkData();
		}
	},
	methods: {
		reset() {
			this.currentStatus = STATUS_INITIAL;
		},
		filesChange(fileList) {
			this.currentStatus = STATUS_LOADING;
			const img2 = document.getElementById("img");
			img2.src ="https://gifimage.net/wp-content/uploads/2017/09/blue-loading-gif-transparent-4.gif";
			var formdata = new FormData();
			url = document.getElementById("url");
			formdata.append("image", fileList[0]);

			fetch("https://api.imgur.com/3/image", {
				method: "POST",
				headers: {
					Authorization: "Client-ID 396329b896dcfdd",
				},
				body: formdata,
			})
				.then((data) => data.json())
				.then((data) => {
					//url.innerText =  data.data.link;
					this.url = data.data.link;
					img2.src = data.data.link;
					this.currentStatus = STATUS_SAVING;
				});
		},
		esteril() {
			const a1 = document.querySelector('#Ebar');
			const a2 = document.querySelector('#Epercent');
			// console.log(this.sterile);
			switch (a2.innerHTML) {
				case "No se":
					this.sterile="No";
					a2.innerHTML = "No";
					a1.style.width = "0%";
					break;
				case "No":
					this.sterile="Si"
					a2.innerHTML = "Si";
					a1.style.width = "100%";
					break;
				case "Si":
					this.sterile="Desconosco"
					a2.innerHTML = "No se";
					a1.style.width = "50%";
					break;
			}
		},
		Sexo() {
			const a1 = document.querySelector('#Sbar');
			const a2 = document.querySelector('#Spercent');
			// console.log(this.sterile);
			switch (a2.innerHTML) {
				case "Macho":
					this.sex="Hembra"
					a2.innerHTML = "Hembra";
					a1.style.width = "100%";
					break;
				default:
					this.sex="Macho";
					a2.innerHTML = "Macho";
					a1.style.width = "0%";
					break;
			}
		},
		Vacuna() {
			const a1 = document.querySelector('#Vbar');
			const a2 = document.querySelector('#Vpercent');
			// console.log(this.sterile);
			switch (a2.innerHTML) {
				case "No se":
					this.vaccines="false";
					a2.innerHTML = "No";
					a1.style.width = "0%";
					break;
				case "No":
					this.vaccines="true"
					a2.innerHTML = "Si";
					a1.style.width = "100%";
					break;
				case "Si":
					this.vaccines="false"
					a2.innerHTML = "No se";
					a1.style.width = "50%";
					break;
			}
		},
		publicar() {
			let json = {
				"nombre": this.name,
				"edad": this.age,
				"esteril": this.sterile,
				"tipo": this.type,
				"sexo": this.sex,
				"raza": this.breed,
				"tamano": this.size,
				"vacunada": this.vaccines,
				"descripcion": this.message,
				"link_foto": this.url,
			};
			// console.log(json);
			const token = localStorage.token;
			axios
				//.post("http://localhost:8080/api/publish/new-publish", json, {
				.post("https://unpetlife.herokuapp.com/api/publish/new-publish", json, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
				.then((data) => {
					if (data.status == 200) {
						// console.log("correcto");
						this.currentStatus= STATUS_INITIAL;
						this.name = null;
						this.age = null;
						this.sterile = null;
						this.type = null;
						this.sex = null;
						this.breed = null;
						this.size = null;
						this.vaccines = null;
						this.message = null;
						this.url = null; 
						this.$router.push('profile');
					}
				})
				.catch((error) => {
					this.error = true;
					if (error.response.status === 400 || error.response.status === 401 || error.response === 403) {
						this.error_msg = "Credenciales incorrectas";
					} else {
						this.error_msg =
							"¡Parece que hubo un error de comunicación con el servidor!";
					}
				});
		},
		cancelar(){
			this.$router.push('profile');
		},
		checkData(){
				return (this.msg['age'] !== '' || this.sterile === ""  || this.type === ""  || this.sex === ""   || this.size === ""  || this.vaccines === ""  || this.message === ""  || this.url === "")
		},
		mounted() {
			this.reset();
		},
		nameVal(value){
			if(value === ""){
				this.msg['name'] = 'Si no se asigna un nombre, el nuevo dueño lo hara';
			}else{
				this.msg['name'] = '';
			}
		},
		ageVal(value){
			if(value < 0 || value > 99){
				this.msg['age'] = 'Por favor verifique la edad ingresada' 
			}else{
				this.msg['age'] = '';
			}
		}
	},
	watch:{
		name(value){
			this.name = value;
			this.nameVal(value);
		},
		age(value){
			this.age = value;
			this.ageVal(value);
		}
	}
};
</script>

<style>

</style>