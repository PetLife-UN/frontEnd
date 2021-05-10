<template >
    <navbar/>
    <div class = "container-fluid bg-light cuerpo_consultaApli">
        <div class = "container">
            <br>
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver</button>
        </div>

        <h2 class="py-5 text-center">SOLICITUDES DE ADOPCIÓN </h2>
        
        {{popupTriggers}}
        <infoApli v-if="popupTriggers.buttonTrigger"/>
        
        
        
        
        <br>
        <br>
        
        
        <div class = "container">
            <div class="row  g-0 mb-5 container_apli_info"  v-for="apli in ListaApli" :key = "apli.id" v-on:click="volver(apli)" >
                <div class="col-9 col_infoapli">
                    <div class ="row g-0">
                        <div class ="col-1 marca_lateral"/>
                        <div class ="col-1 marca_lateral_inv"/> 
                        <div class ="col-10 fila_info_apli">
                            <div class="text_info_id_apli">Id #{{apli.id}}</div>
                            <br>
                            <p><mark class="titulo_soli">Nombre: </mark>{{apli.name.substring(0,50)}}</p>
                            <p><mark class="titulo_soli">Email: </mark>{{apli.email.substring(0,40)}}</p>
                            <div class ="row">
                                <div class = "col-8">
                                    <p><mark class="titulo_soli">Teléfono móvil: </mark>{{apli.movilNumber}}</p>
                                    <p><mark class="titulo_soli">Ubicación: </mark>{{apli.city}} ({{apli.department}})</p>
                                    <p><mark class="titulo_soli">Edad:  </mark>{{apli.age}} años</p>
                                </div>
                                <div class = "col-4">
                                    <div class ="contenedor_agreement">
                                        <p><mark class="titulo_soli">Familia de acuerdo: </mark> </p>
                                        <div v-if="apli.familyAgreement == true">
                                            <img class = "img_agreement" src="../../assets/icons/happy_64px.png">
                                        </div>
                                        <div v-else>
                                            <img class = "img_agreement" src="../../assets/icons/sad_64px.png">
                                        </div>
                                    </div>
                                    
                                    <p><mark class="titulo_soli">Canal comunicación:  </mark></p>
                                    <p>{{apli.communication}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 col_img_apli">
                    <img class="card-img-top imagen_apli" v-bind:src="apli.pet.link_foto" v-bind:alt="apli.pet.id">
                </div>
            </div>
        </div> 

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
        }
    },
    setup(){
        const popupTriggers = ref({
            buttonTrigger: true,
        })
        return{
            popupTriggers,
        }
    },
    components:{
        navbar,
        infoApli
    },
    methods:{
        volver(){
            this.$router.go(-1);
        },
       
    },
    mounted:function(){
        //axios.get("https://unpetlife.herokuapp.com/api/pet/consulta?page="+(this.pagina-1)+"&size="+this.size).then( data =>{
        const token = localStorage.token;
        axios
        .get("http://localhost:8080/api/apply/getApplicationUser" ,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
          .then( data =>{
            this.ListaApli = data.data;
            console.log(this.ListaApli);
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
        top: 8px;
        right: -70px;
        font-size: 25px;
        color:#5f5f5f;
    }
    .contenedor_agreement{
        position: relative;
    }
    .img_agreement{
        position: absolute;
        top: -15px;
        right: 0px;
    }
    .titulo_soli{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
</style>