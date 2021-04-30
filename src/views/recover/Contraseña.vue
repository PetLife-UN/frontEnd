<template lang="">
	<navbar/>
	
	<div class="recuperar">
		<h2 class="texto_centrado">
			Recuperacion de contraseña
		</h2>

		<div class="contraseña texto_Izquierda">
			<h3 class="texto_izquierda" >Nueva Contraseña</h3>
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
			<h3 class="texto_izquierda">
				Repetir Contraseña
			</h3>
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
		if (paso()) {
			const json ={
				"token" : actual,
				"username" : this.Contraseña
			}
			console.log(actual)
			axios.put("https://unpetlife.herokuapp.com/api/passrecover/changePassword", json).then(data =>{
				console.log(data)
			})

		}
	},
	errorcontraseña(){
		limpiar('#pass')
	},
	errorRepetir(){
		limpiar('#repit')
	}
    }
}

function paso(){
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
}

function limpiar(a) {
    const error = document.querySelector(a);
    error.classList.remove('error');
}
</script>
