<template>
    <main class="form-login">
        <form v-on:submit.prevent="login">
            <h2 class="texto_centrado sub"> Ingreso </h2>
            <div class="centrado">
                <div class="ingresar">
                    <div class="orden">
                        <p class="texto texto_izquierda">Email</p>
                        <input 
                            type="email" 
                            id="floatingInput" 
                            class="form-control" 
                            maxlength="60"
                            placeholder="name@example.com"
                            v-model="email">
                    </div>
                    <div class="orden">
                        <p class="texto texto_izquierda">Contraseña</p>
                        <input 
                            type="password" 
                            id="floatingPassword" 
                            class="form-control" 
                            maxlength="20"
                            placeholder="Contraseña"
                            v-model="password">
                    </div>
                </div>
                <br>
                <div class="olvidar">
                    <button
                        @click="OlbidarC"
                        class="boton3"
                        type="submit"
                        data-paso="4">
                        Has olvidado tu contraseña
                    </button>
                </div>

                <div class="alert alert-danger" role="alert" v-if="error_login">
                    {{ error_login_msg }}
                </div>

                <div class="texto_derecha">
                    <button 
                        @click="IngresaUsuario"
                        class="boton2" 
                        type="submit"
                        data-paso="1">
                        Acceder
                    </button>
                </div>
            </div>
        </form>
    </main>
</template>

<script>

import axios from 'axios';

export default {
    name: "menuLogin",

    data(){
        return{
            //Datos del usuario de ingreso
            usuario:"",
            password:"",
            //Variables de control de inicio
            error_login:false,
            error_login_msg:"error_login de conexión con el servidor"
        }
    },
    methods:{
        OlbidarC(){
            let json ={
                "username" : this.email
            };
            alert('He olvidado mi contraseña');
            // this.$router.push('/password');
            //axios.post(`http://localhost:8080/api/passrecover/sendLink/${this.email}`,json);
            axios.post(`https://unpetlife.herokuapp.com/api/passrecover/sendLink/${this.email}`,json);
        },
        IngresaUsuario(){
            let json ={
                "username" : this.email,
                "password" : this.password
            };
            axios.post("https://unpetlife.herokuapp.com/api/auth/login",json)
            //axios.post("http://localhost:8080/api/auth/login",json)
            .then(data => {
                if(data.status == 200){
                    localStorage.token = data.data.token;
                    this.$router.push('/');

                }
            }).catch((error_login) => {
                this.error_login = true
                this.msg_back = error_login.response.data.message
                console.log(this.msg_back)
                switch (this.msg_back){
                    case "Usuario no registrado":
                        this.error_login_msg = "El correo ingresado no se encuentra registrado"
                        break;
                    case "Error: Unauthorized":
                        this.error_login_msg = "La Contraseña ingresada es errónea"
                        break;
                    case "Usuario no activado":
                        this.error_login_msg = "El usuario no está activado, actívalo desde tu correo electrónico"
                        break;
                    default:
                        this.error_login_msg = this.msg_back;
                        break;
                }
            });
        }
    }
}

</script>