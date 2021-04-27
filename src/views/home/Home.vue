<template lang="">
    <navbar/>
    <div>
        
        <div id="inicio" class="video seccion mostrar-seccion">
            <div class="overlay">
                <div class="contenedor contenido-video">
                    <h2>Adopta
                        <span>NO COMPRES</span>
                    </h2>
                </div>
            </div>
            <video controls autoplay muted loop>
                <source src="../../video/video1.mp4" type="video/mp4">
                <source src="../../video/video1.ogg" type="video/ogg">
                <source src="../../video/video1.webm" type="video/webm">
            </video>                
        
        </div>

        <div class="album py-5 bg-light">

            <div class ="container">
                <h1 class="titulo_home">
                Tenemos distintas mascotas esperando ser adoptadas
                </h1>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" v-for="mascota in Listamascota" :key = "mascota.idPet">
                        <div class="card mb-4 box-shadow" >
                            <img class="card-img-top imagen_catalogo" v-bind:src="mascota.links_foto" v-bind:alt="mascota.id">
                            <div class="card-body carta_mascota">
                                <br>
                                <div class = "row">
                                    <div class = "col-9 titulo_masc">
                                        <h2>{{mascota.nombre}}</h2>
                                        <br>
                                        <p>{{mascota.tipo}}  -  {{mascota.edad}} años</p>
                                        <p> {{mascota.raza}}</p>
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
                                
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col text-center">
                                    <button class="btn btn-lg button_adopta" v-on:click="verInfo(mascota.id)">Conocer mejor</button>
                                    </div>
                                </div>
                            </div>
                            <br>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </div>
        


    </div>
</template>
<script>

import navbar from "@/components/navbar"
import axios from 'axios';
export default {
    data(){
        return{
            Listamascota:null,
            size:3,
            totalPages:0
        }
    },
    components:{
        navbar,
        
    },
    methods:{
        verInfo(idPet){
            this.$router.push("/Info_mascota/"+idPet)
        },
    },
    mounted:function(){
        this.pagina = this.$route.params.idPage;
        console.log("Page actual ",this.pagina);
        //axios.get("http://localhost:8080/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
        axios.get("https://unpetlife.herokuapp.com/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
            console.log(data);
            console.log("total_pages:",data.data.totalPages);
        })
        
    }
}

</script>
<style>
    /*@import 'css/app.css';*/
    .titulo_home{
        color:#2d6bbb;
    }
</style>