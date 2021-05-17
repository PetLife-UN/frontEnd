<template >
    <navbar/>
    <div class = "container-fluid bg-light cuerpo_consultaApli">
        <div class = "container">
            <br>
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver</button>
        </div>
        <h2 class="py-5 text-center">SOLICITUDES DE ADOPCIÓN </h2>
        <infoApli v-if="popupTriggers.buttonTrigger" :TogglePopup = "()=>TogglePopup('buttonTrigger')" :aplicationInfo = "AplicaInfoEnviar.aplicationInfo" />
        <br>
        <br>
        <div class = "container">
            <div class="row  g-0 mb-5 container_apli_info border"  v-for="apli in ListaApli" :key = "apli.id" >
                <div class="col-lg-5 col-md-12 col_infoapli">
                    <div class ="row g-0">
                        <div class ="col-1 marca_lateral"/>
                        <div class ="col-1 marca_lateral_inv"/> 
                        <div class ="col-10 fila_info_apli">
                            <br>
                            <p><mark class="titulo_soli">Nombre: </mark>{{apli.name.substring(0,50)}}</p>
                            <p><mark class="titulo_soli">Email: </mark>{{apli.email.substring(0,40)}}</p>
                            <div class ="row">
                                <div class = "col-8">
                                    <p><mark class="titulo_soli">Teléfono móvil: </mark>{{apli.movilNumber}}</p>
                                    <p><mark class="titulo_soli">Ubicación: </mark>{{apli.city}} ({{apli.department}})</p>
                                    <p><mark class="titulo_soli">Edad:  </mark>{{apli.age}} años</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-4 col-md-6 col-sm-6 container_extra_info">
                    <br>
                    <br>
                    <div class ="contenedor_agreement ">
                        <p><mark class="titulo_soli">Familia de acuerdo: </mark> </p>
                        <div  class = "img_agreement"  v-if="apli.familyAgreement == true">
                            <img src="../../assets/icons/happy_64px.png">
                        </div>
                        <div class = "img_agreement" v-else>
                            <img src="../../assets/icons/sad_64px.png">
                        </div>
                    </div>
                    <p><mark class="titulo_soli">Canal comunicación:  </mark></p>
                    <p>    &nbsp; {{apli.communication}}</p>
                    <div class="text_info_id_apli">Id #{{apli.id}}</div>
                    <button type="button" class="btn button_verinfo_apli" v-on:click="()=>TogglePopup('buttonTrigger',apli)">Información completa</button>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col_img_apli">
                    <img class="card-img-top imagen_apli" v-bind:src="apli.pet.link_foto" v-bind:alt="apli.pet.id">
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
        return{
            ListaApli:null,
            infoApli,
            buttonTrigger:false,
            pagina:1,
            size:5,
            totalPages:0
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
        }
        return{
            popupTriggers,
            TogglePopup,
            AplicaInfoEnviar,
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
    },
    mounted:function(){
        const token = localStorage.token;
        this.pagina = this.$route.params.numPage;
        axios
        //.get("http://localhost:8080/api/apply/getApplicationUserPage?page="+(this.pagina-1)+"&size="+(this.size) ,{
        .get("https://unpetlife.herokuapp.com/api/apply/getApplicationUserPage?page="+(this.pagina-1)+"&size="+(this.size) ,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
          .then( data =>{
            this.ListaApli = data.data.content;
            this.totalPages = data.data.totalPages;
            console.log(this.ListaApli);
            console.log(this.totalPages)
        })
    },
}
</script>

<style>
    .cuerpo_consultaApli{
        min-height: 600px;
    }
    .container_apli_info{
        background:#f0eeee;
        position: relative;
    }
    .col_img_apli{
        background: #4B8BDD;
    }
    .imagen_apli{
        object-fit: cover;
        max-width: 100%;
        height: 225px;
        
    }
    .marca_lateral{
        width:30px;
        background: #4B8BDD;
    }
    .marca_lateral_inv{
        width:30px;
        background: transparent;
    }
    .fila_info_apli{
        position: relative;
    }
    .text_info_id_apli{
        position: absolute;
        top: 0px;
        right: 20px;
        font-size: 25px;
        color:#5f5f5f;
    }
    .container_extra_info{
        position: relative;
    }
    .contenedor_agreement{
        position: relative;
    }
    .img_agreement{
        position: absolute;
        top: -15px;
        left: 260px;
    }
    .titulo_soli{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
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