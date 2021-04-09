<template>
    <main class="form-signup">
        <form v-on:submit.prevent="singup">                
            <h1 class="h3 mb-3 fw-normal">singup</h1>
            <div class = "container py-5">
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingName" placeholder="Nombre" v-model="name">
                    <label for="floatingName">Nombre</label>
                </div>
                <br>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingSurame" placeholder="Apellido" v-model="surname">
                    <label for="floatingSurame">Apellido</label>
                </div>
                <br>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="Dirección de correo" v-model="email">
                    <label for="floatingEmail">Dirección de correo </label>
                </div>
                <br>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingcellPhoneNumber" placeholder="Teléfono" v-model="cellPhoneNumber">
                    <label for="floatingcellPhoneNumber">Teléfono</label>
                </div>
                <br>
                
                <div class="form-row">
                    <div class="col"> 
                        <div class="form-floating ">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating ">
                            <input type="password" class="form-control" id="floatingRpassword" placeholder="Password" v-model="rpassword">
                            <label for="floatingRpassword">Repetir contraseña</label>
                        </div>
                    </div>
                </div>
                <br>
                <div class="form-floating ">
                    <input type="text" class="form-control" id="floatingCiudad" placeholder="Ciudad" v-model="ciudad">
                    <label for="floatingCiudad">Ciudad</label>
                </div>
                <br>
                <fieldset>
                    <div class="form-floating">
                        <select class="form-select" id="floatingRol" v-model="rol">
                            <option value = "user">Usuario</option>
                            <option value = "admin">Administrador</option>
                            <option value = "moderator">Moderador</option>
                        </select>
                        <label for="floatingRol">Rol - bloqueado</label>
                    </div>
                </fieldset>
            </div>





            <div class="alert alert-danger" role="alert" v-if="error">
                {{error_msg}}
            </div>


            <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
        </form>


       

    </main>

</template>

<script>
import axios from 'axios';

export default {
    name: "menuSignup",

    data(){
        return{
            name:"",
            surname:"",
            email:"",
            cellPhoneNumber:"",
            password:"",
            Rpassword:"",
            ciudad:"",
            rol:"user",
            error:false,
            error_msg:"",
        }
    },
    methods:{
        singup(){
            let json ={
                "email" : this.email,
                "password" : this.password,
                "name" : this.name,
                "surname" : this.surname,
                "cellPhoneNumber":this.cellPhoneNumber,
                "role": [this.rol]
            };
            axios.post("http://localhost:8080/api/auth/register",json)
            .then(data => {
                console.log(data)
                if(data.status == 200){
                    this.$router.push('profile');
                }
            }).catch((error) => {
                this.error = true
                if (error.response.status === 400 || error.response.status === 401 ) {
                    this.name = null;
                    this.surname = null;
                    this.email = null;
                    this.cellPhoneNumber = null;
                    this.password = null;
                    this.Rpassword = null;
                    this.ciudad = null;
                    this.rol = null;
                    this.error_msg = "Credenciales incorrectas";
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