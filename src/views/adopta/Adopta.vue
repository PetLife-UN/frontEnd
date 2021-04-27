<template>


    
    

    <navbar/>
    <div >
        
        
        
        <div class="album py-5 bg-light">

            <div class ="container bg-light">
                <p class=" h1 titulo_adopcion">ADOPCIÓN DE MASCOTAS</p>
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
                                            <img src="../../assets/icons/cat_96px.png">
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


        <div class ="container-fluid bg-light">
            <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group btn-group-lg" role="group" aria-label="First group">
                    <button type="button" class="btn btn-secondary" v-for="page in parseInt(totalPages)" :key="page" v-on:click="gotoPage(page)">{{page}}</button>
                    <br>
                </div>
                
            </div>
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
            Listamascota:null,
            pagina:null,
            size:6,
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
        gotoPage(idPage){
            this.$router.push("/adopta/"+idPage)
            console.log("Boton")
        }
    },
    mounted:function(){
        this.pagina = this.$route.params.idPage;
        console.log("Page actual ",this.pagina);
        axios.get("http://localhost:8080/api/pet/consulta?page="+(this.pagina-1)+"&size="+this.size).then( data =>{
            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
            console.log(data);
            console.log("total_pages:",data.data.totalPages);
        })
        
    }
}

</script>
<style >
    .thin {
        font-weight: 200;
    }
    .button_adopta{
        background-color: #64B8FF;
        font-size: 18px;
    }
    .carta_mascota{
        line-height: 15px;
    }
    .titulo_adopcion{
        color: #4B8BDD;
        font-weight: bold;
    }
    .imagen_catalogo{
        object-fit: cover;
        max-width: 100%;
        height: 250px;

    }
    .titulo_masc h2{ 
        color:#437ecc;
    }
</style>