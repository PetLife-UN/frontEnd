<template>
    <main class="form-login">
        <form v-on:submit.prevent="login">
            <h2 class="texto_centrado sub">{{ Ingreso }}</h2>
            <div class="centrado">
            <div class="ingresar">
                
                <div class="orden">
                    <p class="texto texto_izquierda">{{ Email }}</p>
                    <input 
                        type="email" 
                        id="floatingInput" 
                        class="form-control" 
                        maxlength="60"
                        placeholder="name@example.com"
                        v-model="email">
                </div>
                
                <div class="orden">
                    <p class="texto texto_izquierda">{{ Password }}</p>
                    <input 
                        type="password" 
                        id="floatingPassword" 
                        class="form-control" 
                        maxlength="20"
                        placeholder="Password"
                        v-model="password">
                </div>

                <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error_msg }}
                </div>

                
            </div>

                <div class="olvidar">
                    <button
                        @click="OlbidarC"
                        class="boton3"
                        type="submit"
                        data-paso="4"
                        >
                        Has olvidado tu contraseña
                    </button>
                </div>
                
                <div class="texto_derecha">
                    <button 
                        @click="IngresaUsuario"
                        class="boton2" 
                        type="submit"
                        data-paso="1">
                        {{ Boton }}
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
            Ingreso: 'Ingreso',
            Email: 'Correo',
            Password: 'Contraseña',
            Boton: 'Acceder',
            usuario:"",
            password:"",
            error:false,
            error_msg:""
        }
    },
    methods:{
        OlbidarC(){
            let json ={
                "username" : this.email
            };
            alert('He olvidaridado mi contraseña');
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
                    
                    this.$router.push('profile');

                }
            }).catch((error) => {
                this.error = true
                if (error.response.status === 400 || error.response.status === 401 ) {
                    this.error_msg = "Credenciales incorrectas";
                    this.email = null;
                    this.password = null;
                }
                
                else {
                    this.error_msg = "¡Parece que hubo un error de comunicación con el servidor!";
                }
            });
        }
    }
}

</script>