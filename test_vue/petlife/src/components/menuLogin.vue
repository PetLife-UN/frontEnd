<template>
    <main class="form-login">
        <form v-on:submit.prevent="login">
            
            <h1 class="h3 mb-3 fw-normal">Ingreso</h1>
            <div class = "container py-5">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
                    <label for="floatingInput">Dirección de correo</label>
                </div>
                <br>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                    <label for="floatingPassword">Contraseña</label>
                </div>
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
                {{error_msg}}
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
        </form>
    </main>


</template>

<script>
import axios from 'axios';

export default {
    name: "menuLogin",

    data(){
        return{
            usuario:"",
            password:"",
            error:false,
            error_msg:"",
        }
    },
    methods:{
        login(){
            let json ={
                "username" : this.email,
                "password" : this.password
            };
            axios.post("http://localhost:8080/api/auth/login",json)
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


<style>
    
</style>