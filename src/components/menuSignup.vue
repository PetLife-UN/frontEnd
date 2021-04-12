<template>
    <main class="form-signup">
        <form v-on:submit.prevent="signup">  
            <h2 class="texto_centrado sub">Registro</h2>   
            <!-- <h1 class="h3 mb-3 fw-normal">Registrar usuario</h1> -->
            <div class="registrar">

                <label 
                    for="floatingName">Nombre</label>
                <input 
                    type="text" 
                    @click="errorNombre"
                    class="form-control" 
                    id="floatingName" 
                    placeholder="Nombre" 
                    maxlength="20"
                    v-model="name">
                
                <label 
                    for="floatingSurame">Apellido</label>
                <input 
                    @click="errorApellido"
                    type="text" 
                    class="form-control"
                    id="floatingSurame" 
                    placeholder="Apellido" 
                    maxlength="20"
                    v-model="surname">
                
                <label 
                    for="floatingEmail"> Email </label>
                <input 
                    @click="errorEmail"
                    type="email" 
                    class="form-control"
                    id="floatingEmail" 
                    style="text-transform:lowercase;"
                    placeholder="Dirección de correo" 
                    maxlength="30"
                    v-model="email">
                
                <label
                for="floatingcellPhoneNumber">Teléfono</label>
                <input 
                    @click="errorCelular"
                    type="number" 
                    class="form-control" 
                    id="floatingcellPhoneNumber" 
                    placeholder="Teléfono" 
                    maxlength="10" 
                    oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    v-model="cellPhoneNumber">
                
                <label 
                    for="floatingPassword">Contraseña</label>
                <input 
                    @click="errorContraseña"
                    type="password" 
                    class="form-control" 
                    id="floatingPassword" 
                    maxlength="20"
                    placeholder="Password" 
                    v-model="password">
                
                <label 
                    for="floatingRpassword">Repetir contraseña</label>
                <input 
                    @click="errorRepetir"
                    type="password" 
                    class="form-control" 
                    id="floatingRpassword" 
                    maxlength="20"
                    placeholder="Password" 
                    v-model="rpassword">

                <div class="alert alert-danger" role="alert" v-if="error">
                    {{error_msg}}
                </div>
                <div class="alert alert-success" role="alert" v-if="register_success">
                    Registro exitoso!
                </div>
                <div class="texto_derecha">
                    <button 
                        @click="RegistraUsuario"
                        class="boton2" 
                        type="submit"
                        data-paso="1">
                        Registrarse
                    </button>
                </div>
            </div>
            <!-- <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button> -->
        </form>    

    </main>

</template>

<script>
import axios from 'axios';
// import * as mykey from '../js/bundle.js';
let paso = false;
export default {
    name: "menuSignup",

    data(){
        return{
            name:"",
            surname:"",
            email:"",
            cellPhoneNumber:"",
            password:"",
            rpassword:"",
            error:false,
            error_msg:"",
            register_success:false,
        }
    },
    methods:{
        RegistraUsuario() {
            revisarContraseña();
        },
        errorNombre() {
            limpiar('#floatingName');
        },
        errorApellido() {
            limpiar('#floatingSurame');
        },
        errorCelular() {
            limpiar('#floatingcellPhoneNumber');
        },
        errorEmail() {
            limpiar('#floatingEmail');
        },
        errorContraseña() {
            limpiar('#floatingPassword');
        },
        errorRepetir() {
            limpiar('#floatingRpassword');
        },
        signup(){
            if(paso){
                paso=false;
                this.register_success = false;
                this.error = false;
                let json ={
                    "email" : this.email,
                    "password" : this.password,
                    "name" : this.name,
                    "surname" : this.surname,
                    "cellPhoneNumber":this.cellPhoneNumber,
                    "role": []
                };
                axios.post("https://unpetlife.herokuapp.com/api/auth/register",json)
                .then(data => {
                    console.log(data)
                    if(data.status == 200){
                        this.register_success = true;

                        
                        this.name = null;
                        this.surname = null;
                        this.email = null;
                        this.cellPhoneNumber = null;
                        this.password = null;
                        this.rpassword = null;
                        this.ciudad = null;
                        this.rol = null;
                        
                    }
                }).catch((error) => {
                    this.error = true
                    if (error.response.status === 400 || error.response.status === 401 ) {
                        this.error_msg = "Credenciales incorrectas";
                    }
                    
                    else {
                        this.error_msg = "¡Parece que hubo un error de comunicación con el servidor!";
                    }
                });
            }
        }
    }
}

function revisarContraseña() {
    const nombre = document.querySelector('#floatingName');
    const apellido = document.querySelector('#floatingSurame');
    const celular = document.querySelector('#floatingcellPhoneNumber');
    const estado = document.querySelector('#Estado');
    const ciudad = document.querySelector('#floatingCiudad');
    const email = document.querySelector('#floatingEmail');
    const contraseña = document.querySelector('#floatingPassword');
    const repetir = document.querySelector('#floatingRpassword');

    while (document.querySelector('.error') != null) {
        document.querySelector('.error').classList.remove('error');
        // statement
    }

    let spring = '';
    // console.log(document.querySelector('.error'));
    if (nombre.value.length < 5) {
        spring = spring + 'Nombre incorrecto\n';
        nombre.classList.add('error');
    }
    if (apellido.value.length < 5) {
        spring = spring + 'Apellido incorrecto\n';
        apellido.classList.add('error');
    }
    if (celular.value.length < 8) {
        spring = spring + 'Numero incorrecto\n';
        celular.classList.add('error');
    }

    let fal = 0;
    for (var i = 0; i < email.value.length; i++) {
        if(email.value[i]=='@'){
            fal++;
        }
    }
    
    if (email.value.length < 5 || fal!=1) {

        spring = spring + 'E-mail mira incorrecto\n';
        email.classList.add('error');
    }else {
        const al = email.value.split('@');
        if(al[0].length ==0 || al[1].length ==0){
            spring = spring + 'E-mail incorrecto\n';
            email.classList.add('error');
        } 
    }
    if (contraseña.value.length < 8) {
        spring = spring + 'Contraseña minimo de 8 datos\n';
        contraseña.classList.add('error');
    }
    else if (contraseña.value != repetir.value) {
        spring = spring + 'Contraseñas no son iguales\n';
        repetir.classList.add('error');
    }
    if (spring.length != 0) {
        window.alert(spring);
    }
    else {
        paso=true;
    }
}

function limpiar(a) {
    const error = document.querySelector(a);
    error.classList.remove('error');
}
</script>


<style>
    
</style>