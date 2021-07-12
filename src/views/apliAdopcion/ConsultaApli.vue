<template >
    <navbar/>
    
    <div class = "container-fluid bg-light cuerpo_consultaApli">
        <div class = "container">
            <br>
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver</button>
            <button type="button" class="btn " v-on:click="test()">Test</button>
            Test:{{visible}}
        </div>
        <h2 class="py-5 text-center">SOLICITUDES DE ADOPCIÓN </h2>
        <infoApli v-if="popupTriggers.buttonTrigger" :TogglePopup = "()=>TogglePopup('buttonTrigger')" :aplicationInfo = "AplicaInfoEnviar.aplicationInfo" :updateValues = "updateValues()" />
        <br>
        <br>
        <div class = "container">
            <div class="row  g-0 mb-5 container_apli_info border"  v-for="apli in ListaApli" :key = "apli.id" >
                <p class="text_info_id_apli">Publicación #{{apli.id}}</p>
                <div class = "lateral_bar_consultasol" v-bind:style="{ background: COLOR_TIPO[apli.publicationVisible]}"></div>
                <div class = "row g-0 content_consultasol ">
                    <div class="col-5 col_infoapli">
                        <br>
                        <p><mark class="titulo_soli">Nombre: </mark>{{apli.name.substring(0,50)}}</p>
                        <p><mark class="titulo_soli">Email: </mark>{{apli.email.substring(0,40)}}</p>
                        <p><mark class="titulo_soli">Teléfono móvil: </mark>{{apli.movilNumber}}</p>
                        <p v-if=" apli.telNumber != 'No aplica' "><mark class="titulo_soli">Teléfono Fijo: </mark>{{apli.telNumber}}</p>
                        <p><mark class="titulo_soli">Familia de acuerdo: </mark> <img v-bind:src="ICON_TIPO[apli.familyAgreement]"></p>
                    </div>
                    <div class = "col-4 container_extra_info">
                        <br>
                        <p><mark class="titulo_soli">Canal comunicación: </mark>{{apli.communication}}</p>
                        <p><mark class="titulo_soli">Edad:  </mark>{{apli.age}} años</p>
                        <p><mark class="titulo_soli">Ubicación: </mark>{{apli.city}} ({{apli.department}})</p>
                        <p><mark class="titulo_soli">Dirección: </mark>{{apli.address}}</p>
                        <br>
                        <button type="button" class="btn button_verinfo_apli" v-on:click="()=>TogglePopup('buttonTrigger',apli)">Información completa</button>
                    </div>
                    <div class = "col-3 ">
                        <img class="card-img-top imagen_apli" v-bind:src="apli.pet.link_foto" v-bind:alt="apli.pet.id">
                    </div>
                </div>
            </div>
        </div> 
        <br>
        <br>
        <nav >
            <ul class="pagination justify-content-center">
                <li class=" buttons_pagination" v-on:click="gobackPage()">
                    <a class="page-link page-link-back" href="#">&#60;</a>
                </li>
                <div class ="buttons_pagination " v-for="page in parseInt(totalPages)" :key="page" v-on:click="gotoPage(page)"> 
                    <li class="page-item"><a class="page-link page-link-numbers" href="#">{{page}}</a></li>
                </div>
                <li class="buttons_pagination" v-on:click="gonextPage()">
                    <a class="page-link page-link-next" href="#">&#62;</a>
                </li>
            </ul>
        </nav>
        <br>
        <br>
    </div>
</template>
<script>

import navbar from "@/components/navbar"
import infoApli from "@/components/apliAdopcion/infoApli"
import axios from 'axios'
import {ref} from 'vue'
export default {
    data(){
        const ICON_TIPO = {
            true:require('../../assets/icons/happy_64px.png'),
            false:require('../../assets/icons/sad_64px.png'),
        }
        const COLOR_TIPO = {
            true:"#4B8BDD",
            false:"#d9534f",
        }
        return{
            ListaApli:null,
            infoApli,
            buttonTrigger:false,
            pagina:1,
            size:5,
            totalPages:0,
            visible:true,
            ICON_TIPO,
            COLOR_TIPO,
        }
    },
    setup(){
        const popupTriggers = ref({
            buttonTrigger: false,
        });

        const AplicaInfoEnviar = {
            aplicationInfo:null ,
        };

        const TogglePopup = (trigger, apli) =>{
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
            AplicaInfoEnviar.aplicationInfo = apli
            
        };

        return{
            popupTriggers,
            AplicaInfoEnviar,
            TogglePopup,
        }
    },
    components:{
        navbar,
        infoApli
    },
    methods:{
        volver(){
            this.$router.push("/profile")
        },
        gotoPage(idPage){
            this.$router.push("/profile/consultaapli/"+idPage)
            //console.log("Boton")
        },
        gobackPage(){
            if(this.pagina == 1){
                return
            }
            this.pagina =  this.pagina-1
            this.$router.push("/profile/consultaapli/"+this.pagina)
        },
        gonextPage(){
            if(this.pagina == this.totalPages){
                return
            }
            this.pagina =  this.pagina - - 1
            this.$router.push("/profile/consultaapli/"+this.pagina)
        },
        test(){
            this.visible = !this.visible;
            this.updateValues();
        },
        updateValues(){
            const token = localStorage.token;
            this.pagina = this.$route.params.numPage;
            axios
            .get("http://localhost:8080/api/apply/getApplicationUserPage?adopted=false&visible="+(this.visible)+"&page="+(this.pagina-1)+"&size="+(this.size) ,{
            //.get("https://unpetlife.herokuapp.com/api/apply/getApplicationUserPage?page="+(this.pagina-1)+"&size="+(this.size) ,{
            })
            .then( data =>{
                this.ListaApli = data.data.content;
                this.totalPages = data.data.totalPages;
            })
        },
    },
    mounted:function(){
        this.updateValues();
    },
}
</script>

<style>
    /*Pagina solicitudes de aplicacion*/
    .cuerpo_consultaApli{
        min-height: 600px;
    }
    /*Contenedor solicitud*/
    .container_apli_info{
        background:#f0eeee;
        position: relative;
    }
    .container_apli_info p{
        font-size: 1.9rem;
    }
    /*Barra lateral*/
    .lateral_bar_consultasol{
        width:30px;
        height: 100%;
        position:absolute;
        top:0px;
        left: 0px;
    }
    /*Titulo id */
    .text_info_id_apli{
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 0px 350px 0px 0px;
        font-size: 20px;
        color:#5f5f5f;
        text-align: end;
    }
    /*Contenedor solicitud */
    .content_consultasol{
        
        padding:0px 0px 0px 60px;
        height:100%;
    }

    .imagen_apli{
        object-fit: cover;
        height: 260px;
        width:100%;
    }
    /*Titulo solicitud */
    .titulo_soli{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
    /*Boton ver info completa */
    .button_verinfo_apli{
        background-color: #535353;
        color:#ffffff;
        font-size: 15px;
        padding: 5px 32px;
        text-align: center;
    }
    .button_verinfo_apli:hover{
        background-color: #313131;
        color:#ffffff;
    }
    /* Botones de paginación */
    .buttons_pagination .page-link-back{
        border-radius: 5px 0px 0px 5px;
    }
    .buttons_pagination .page-link-next{
        border-radius: 0px 5px 5px 0px;
    }
    .buttons_pagination .page-link{
        width:35px;
        text-align: center;
        font-size: 15px;
        align-content: center;
        background-color: #525252;
        color:#FFFFFF;
        font-weight: 500;
    }
    .buttons_pagination .page-link:hover{
        background-color: #363636;
    }
</style>