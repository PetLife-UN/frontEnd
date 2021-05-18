<template lang="">
	<navbar/>
	
	<div id="ingreso" class="texto_centrado">
        <div class="selcion">
            <div class="informacion pingreso">
				<div class="recuperar">
					<h2 class="texto_centrado sub"> Recuperación de contraseña </h2>
					<p class="texto_cambio_contra">Ingresa tu correo electrónico, enviaremos un email para que puedas cambiar tu contraseña. </p>
					<br>
					<div class="contraseña texto_Izquierda">
						<p class="texto_izquierda" >Nueva Contraseña</p>
						<input 
							@click="errorcontraseña"
							class="vista" 
							name=""
							type="password" 
							maxlength="20"
							placeholder="Password" 
							id="pass" 
							v-model="Contraseña">
					</div>
					<div class="contraseña">
						<p class="texto_izquierda" >Repetir Contraseña</p>
						<input 
							@click="errorRepetir"
							class="vista" 
							name=""
							type="password" 
							maxlength="20"
							placeholder="Password" 
							id="repit" 
							v-model="Repetir">
					</div>

					<div class="boton texto_derecha">
						<button 
							@click="RecuperaContraseña()"
							class="boton2" 
							type="submit"
							data-paso="1">
							{{ Boton }}
						</button>
					</div>
				</div>
            </div>
            <img 
                class="flip" 
                src="../../assets/gif/husky_1.gif" 
                alt="perro saludo">
        </div>
    </div>
</template>

<script>

import navbar from "@/components/navbar"
import axios from 'axios';

const actual = window.location.pathname.split("/")[2];

export default {
    name: "Password",
    data(){
        return{
            // direccion: actual,
            Boton: "Enviar" 
        }
    },
    components:{
        navbar
    },
    methods:{
		RecuperaContraseña() {
			if (this.paso()) {
				const json ={
					"token" : actual,
					"password" : this.Contraseña
				}
				console.log(actual)
				axios.put("http://localhost:8080/api/passrecover/changePassword", json).then(data =>{
				//axios.put("https://unpetlife.herokuapp.com/api/passrecover/changePassword", json).then(data =>{
					console.log(data)
				})
			}
		},
		errorcontraseña(){
			this.limpiar('#pass')
		},
		errorRepetir(){
			this.limpiar('#repit')
		},
		paso(){
			const contra = document.querySelector('#pass');
			const repet = document.querySelector('#repit');
			if (contra.value === repet.value && contra.value.length >= 8) {
				return true;
			}
			else {
				if (contra.value.length < 8) {
					contra.classList.add('error');
				}
				else if (contra.value != repet.value) {
					repet.classList.add('error');
				}
				return false;
			}
		},
		limpiar(a) {
			const error = document.querySelector(a);
			error.classList.remove('error');
		},
    }
}


</script>
<style>
	.texto_cambio_contra{
		size:20px;
        color:white;
        font-weight: 400;
        text-align:left;
	}
	.texto_izquierda{
		font-size: 20px;
		color: #2E4E91;
		font-family: "Gloria Hallelujah", cursive;
		font-weight: 600;
		margin: 2rem 1rem;
	}
</style>
