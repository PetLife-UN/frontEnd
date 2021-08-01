<template lang="">
    <navbar/>
    <!-- <div> -->
        
    <div id="inicio" class="video seccion mostrar-seccion">
        <div class="overlay">
            <div class="contenedor contenido-video">
                <h2>Adopta
                    <span>NO COMPRES</span>
                </h2>
            </div>
        </div>
        <video controls autoplay muted loop>
            <source src="../../assets/video/video1.mp4" type="video/mp4">
            
            <source src="../../assets/video/video1.webm" type="video/webm">
        </video>                
    </div>

    <div class="espacio_trabajo">

        <div class ="subtitulo">
            <h2 class="titulo_home texto_centrado mayuscula">
                Tenemos distintas mascotas esperando ser adoptadas
            </h2>
        </div>

        <div class="row tres_mascotas">

            <div class="col-lg-4 col-md-6 col-sm-12 vista" v-for="mascota in Listamascota" :key = "mascota.idPet"> 
                <div class="card mb-4 box-shadow" 
                    :class="mascotas(mascota.id)">
                    
                    <img 
                        class="card-img-top imagen_catalogo"
                        v-bind:src="mascota.links_foto" 
                        v-bind:alt="mascota.id">

                    <div class="card-body carta_mascota">
                        
                        <div class = "datos_mascota">
                            <div class = "col-9 titulo_masc">
                                <h2 :class="nombre(mascota.nombre)">{{tamanio(mascota.nombre)}}
                                    <span :class="completo(mascota.nombre.length)">
                                        {{adicion(mascota.nombre)}}
                                    </span>
                                </h2>

                                <p>{{mascota.tipo}}  -  {{mascota.edad}} años</p>
                                <p> {{mascota.raza}} </p>
                            </div>
                            <div class = "col-3 icono">
                                <img
                                    v-if="mascota.tipo == 'Felino'"
                                    class="animal imgmascota"
                                    src="../../assets/img/cat_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Canino'"
                                    class="animal imgmascota"
                                    src="../../assets/img/dog_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Roedor'"
                                    class="animal imgmascota"
                                    src="../../assets/img/hamster_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Pez'"
                                    class="animal imgmascota"
                                    src="../../assets/img/fish_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Bovino'"
                                    class="animal imgmascota"
                                    src="../../assets/img/cow_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Ave'"
                                    class="animal imgmascota"
                                    src="../../assets/img/bird_96px.png"
                                />
                                <img
                                    v-else-if="mascota.tipo == 'Equino'"
                                    class="animal imgmascota"
                                    src="../../assets/img/horse_96px.png"
                                />
                                <img
                                    v-else
                                    class="animal imgmascota"
                                    src="../../assets/img/other_96px.png"
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div class="cboton">
                        <button class="btn btn-lg button_adopta" v-on:click="verInfo(mascota.id)">Ver mas</button>
                    </div>
                </div>
            </div>
        </div>

        <div class ="subtitulo">
            <h2 class="titulo_cuidados texto_centrado mayuscula">
                mascotas
            </h2>
        </div>

        <div class="cuidados">
            <div class="cuidar izquierda">
                <div class="imagen">
                    <img src="@/assets/img/dog.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        canino
                    </h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div class="cuidar derecha">
                <div class="imagen">
                    <img src="@/assets/img/gato.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        felino
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. 
                    </p>
                </div>
            </div>
            <div class="cuidar izquierda">
                <div class="imagen">
                    <img src="@/assets/img/bovino.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        bovino
                    </h3>
                    <p>
                        Nullam quis maximus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras mollis diam dictum risus sollicitudin vestibulum. Proin nec pellentesque nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
            <div class="cuidar derecha">
                <div class="imagen">
                    <img src="@/assets/img/pez.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        pez
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </div>
            <div class="cuidar izquierda">
                <div class="imagen">
                    <img src="@/assets/img/cuy.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        roedor
                    </h3>
                    <p>
                        Nullam quis maximus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras mollis diam dictum risus sollicitudin vestibulum. Proin nec pellentesque nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
            <div class="cuidar derecha">
                <div class="imagen">
                    <img src="@/assets/img/ave.png">
                </div>

                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        ave
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </div>

            <div class="cuidar izquierda">
                <div class="imagen">
                    <img src="@/assets/img/caballo.png">
                </div>
                <div class="consejos">
                    <h3 class="mascota mayuscula">
                        Equino
                    </h3>
                    <p>
                        Nullam quis maximus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras mollis diam dictum risus sollicitudin vestibulum. Proin nec pellentesque nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
        </div>

    </div>
    <!-- </div> -->
</template>
<script>

import navbar from "@/components/navbar"
import axios from 'axios';

var datos = '';
var valor = 1;
export default {
    data(){
        return{
            Listamascota:null,
            size:4,
            totalPages:0
        }
    },
    components:{
        navbar,
        
    },
    computed: {
        
    },
    methods:{
        verInfo(idPet){
            this.$router.push("/info-mascota/"+idPet)
        },
        mascotas(i) {
            if(valor%2==0){
                valor++;
                return {
                    'izquierda':true
                }
            }
            else{
                valor++;
                return {
                    'derecha':true
                }
            }
        },
        nombre(name) {
            if(name.length>9){
                return "max-9 name"
            }
            else{
                return "min-9 name"
            }
        },
        tamanio(nombre) {
            if(nombre.length < 18) {
                return nombre
            }
            else{
                datos = nombre.split(" ");
                // console.log(datos);
                return `${datos[0]} ${datos[1]}`
            }
        },
        completo(e) {
            if(e >= 18){
                return 'mirar'
            }
            
        },
        adicion(nombre) {
            if(nombre.length>18){
                let aux = '';
                for (var i = 2; i < datos.length; i++) {
                    aux = aux + ' ' + datos[i];
                }
                return aux
                
            }
        }
    },
    mounted:function(){
        // this.pagina = this.$route.params.idPage;
        //console.log("Page actual ",this.pagina);
        //axios.get("http://localhost:8080/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
        axios.get("https://unpetlife.herokuapp.com/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
            // console.log(this.Listamascota);
            // console.log("total_pages:",data.data.totalPages);
        })
        // console.log(mascota.id);
    }
}

</script>
<style>

    .info_cuida_mascota{
        background-color: rgb(54, 54, 54);
        margin-bottom: -10px;
        height: 300px;
    }

    .info_cuida_mascota .contenido{
        color:white;
    }
</style>