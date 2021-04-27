<template>
    <div>
        <navbar/>
        <div class="container-fluid contenedor_info">
            <br>
            <br>
            <div class = "container">
                <button type="button" class="btn  button_volver" v-on:click="volverMascotas()">Volver a mascotas</button>
            </div>
            <br>
            <br>
            <div class ="container infoMascota">
                <div class="row">
                    
                    <div class="col-md-6 col-sm-12 columna_info_basica">
                        <div class="row">
                            <div class ="col-md-1 barra_lateral" >
                            </div>
                            <div class ="col-md-11 " >
                                <h1>Información de la mascota</h1>
                                <br>
                                <br>
                                <div class ="row">
                                    <div class = "col-9">
                                        
                                        <p class ="text_name">{{mascota.nombre}}</p>
                                        <p class ="text_tipo">{{mascota.tipo}}  -  {{mascota.edad}} años</p>
                                    </div>
                                    <div class = "col-3">
                                        <div v-if="mascota.tipo === 'Canino'">
                                            <img src="../../assets/icons/dog_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Felino'">
                                            <img src="../../assets/icons/cat_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Bovino'">
                                            <img src="../../assets/icons/cow_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Pez'">
                                            <img src="../../assets/icons/fish_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Roedor'">
                                            <img src="../../assets/icons/hamster_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Ave'">
                                            <img src="../../assets/icons/bird_96px.png">
                                        </div>
                                        <div v-else-if="mascota.tipo === 'Equino'">
                                            <img src="../../assets/icons/horse_96px.png">
                                        </div>
                                        <div v-else>
                                            <img src="../../assets/icons/other_96px.png">
                                        </div>
                                    </div>
                                </div>
                                <br>
                                
                                <img class="imageninfoMascota" v-bind:src="mascota.links_foto" v-bind:alt="mascota.id">
                                <br>
                                <br>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="col-md-6 col-sm-12 info_detallada">

                        <br>
                        <div class ="mensaje_mascota">
                            <p>¡Hola! Soy {{mascota.nombre}}, un {{mascota.tipo.toLowerCase()}} de {{mascota.edad}} años que quiere ser adoptado. Soy buen compañero y me gusta jugar, mi actual dueño me describe como: </p>
                            <h3>"{{mascota.descripcion}}"</h3>
                            <br>
                            <p>Mis datos completos están abajo, por si eres una persona interesada en adoptarme. </p>
                        </div>
                        <br>
                        <div class ="container-fluid contenedor_información">
                            <h3>Información completa</h3>
                            <br>
                            <p><mark class="titulo_info">Nombre:</mark>{{mascota.nombre}}</p>
                            <div class ="row">
                                <div class ="col-6">
                                    <p><mark class="titulo_info">Animal: </mark>{{mascota.tipo}}</p>
                                    <p><mark class="titulo_info">Edad: </mark>{{mascota.edad}} años</p>
                                    <p><mark class="titulo_info">Sexo: </mark>{{mascota.sexo}}</p>
                                    <p><mark class="titulo_info">Tamaño: </mark>{{mascota.tamano}}</p>
                                </div>
                                <div class = "col-6"> 
                                    <p><mark class="titulo_info">Esterilizado: </mark>{{mascota.esteril}}</p>
                                    <p><mark class="titulo_info">Raza: </mark>{{mascota.raza}}</p>
                                    <p><mark class="titulo_info">Vacunas al día: </mark>{{mascota.vacunada}}</p>
                                </div>
                            </div>
                        </div>

                            <div class = "container container_but_adoptar">
                                <button type="button" class="btn  button_adoptar" disabled>Adoptar</button>
                            </div>

                    </div>
                </div>
            </div>
            <br>
            <br>
            <br>
        </div>




    </div>
</template>
<script>
import navbar from "@/components/navbar"
import axios from 'axios';
export default {
    data(){
        return{
            idPet:null,
            mascota:{
                "id": "",
                "nombre": "",
                "edad": "",
                "esteril": "",
                "tipo": "",
                "sexo": "",
                "raza": "",
                "tamano": "",
                "descripcion": "",
                "vacunada": "",
                "adoptado": "",
                "links_foto": ""
            }
        }
    },
    components:{
        navbar,
    },
    methods:{
        volverMascotas(){
            this.$router.go(-1);
        }
    },
    mounted:function(){
        this.idPet = this.$route.params.idPet;
        //axios.get("http://localhost:8080/api/pet/consultaPet?idPet="+this.idPet).then( data =>{
        axios.get("https://unpetlife.herokuapp.com/api/pet/consultaPet?idPet="+this.idPet).then(data =>{
            this.mascota.id = data.data.id;
            this.mascota.nombre = data.data.nombre;
            this.mascota.edad = data.data.edad;
            this.mascota.esteril = data.data.esteril;
            this.mascota.tipo = data.data.tipo;
            this.mascota.sexo = data.data.sexo;
            this.mascota.raza = data.data.raza;
            this.mascota.tamano = data.data.tamano;
            this.mascota.descripcion = data.data.descripcion;
            this.mascota.vacunada = data.data.vacunada;
            this.mascota.links_foto = data.data.links_foto;
            this.mascota.adoptado = data.data.adoptado;
            console.log(data.data);
        })
    }
}
</script>
<style>
    .button_volver{
        background-color: #64B8FF;
        font-size: 18px;
    }
    .imageninfoMascota{
        object-fit: cover;
        width: 600px;
        height: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    /*@media (min-width: 1200px) {
        .container.infoMascota{
            max-width: 100%;
        }
    }*/
    .barra_lateral{
        width:3%;
        background-color: #4B8BDD ;
        
    }
    .info_detallada{
        background-color: #ffffff ;
        padding-right: 30px;
        padding-left: 30px;
    }
    .text_name{
        font-size: 30px;
        font-weight: 400;
    }
    .text_tipo{
        font-size: 25px;
        font-weight: 200;
        line-height: 15px;
    }
    .columna_info_basica{
        background-color: #f3f3f3 ;
    }
    /*.contenedor_titulo{
        background-color: #4B8BDD ;
        
    }*/
    .contenedor_titulo p{
        font-size: 25px;
        color:rgb(24, 23, 23);
    }
    .titulo_info{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
    .button_adoptar{
        background-color: #1a1a1a;
        color:#ffffff;
        font-size: 25px;
        padding: 5px 32px;
        text-align: center;
    }
    .container_but_adoptar{
        left: 50%;
    }
    .contenedor_info{
        background: white;
    }
</style>