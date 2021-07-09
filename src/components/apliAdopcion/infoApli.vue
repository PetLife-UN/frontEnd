<template>
    <div class = "popup-infoApli" >
        <div class ="popup-inner px-0" ref="popup_info">

                    


        













            <div class = "lateral_bar_solicitud">
            </div>
            <img 
                class="button_exit_solicitud" 
                v-on:click="TogglePopup()"
                src="../../assets/icons/exit_64px.png" 
                alt="perro saludo">
            <div class ="row content_solicitud">
                <div class = "col-4 info_solicitud_estado bg-light">
                    <br>
                    <div class = "row">
                        <img class="card-img-top imagen_apli" v-bind:src="aplicationInfo.pet.link_foto" v-bind:alt="aplicationInfo.pet.id">
                        <div class="row">
                            <div class = "col-9">
                                <p></p>
                                <p class = "titulo_name_mascote">{{aplicationInfo.pet.nombre}} </p>
                                <p class="subtitulo_name_mascote">{{aplicationInfo.pet.tipo}} - {{aplicationInfo.pet.edad}} años</p>
                            </div>
                            <div class = "col-3">
                                <img class = "ico_pet_sol" v-bind:src="ico" alt="ImgPet">
                            </div>
                        </div>
                        
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        
                        id: {{aplicationInfo.id}}
                        Visible: {{visible}}
                        

                    </div>
                </div>
                
                <div class = "col-8 content_info_solicitud">

                <div id="mySidenav" class="sidenav">
                    <a href="#" id="about"><img src="../../assets/icons/contact_96px.png"></a>
                    <a href="#" id="blog"><img src="../../assets/icons/report_card_96px.png"></a>
                </div>
                <div class = "info_solicitud">
                    <h1 class="titulo_info_solicitud">Información de solicitud</h1>
                    <p v-if="activePage == 'contacto'"> Contacto </p>
                    <p v-if="activePage == 'solicitud'"> Solicitud </p>
                </div>
                    




                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import { ref } from 'vue'
import {onClickOutside} from '@vueuse/core'
export default {
    data(){
        const ICON_DEFAULT = require('../../assets/icons/other_96px.png')
        const ICON_TIPO = {
            'Canino':require('../../assets/icons/dog_96px.png'),
            'Felino':require('../../assets/icons/cat_96px.png'),
            'Bovino':require('../../assets/icons/cow_96px.png'),
            'Pez':require('../../assets/icons/fish_96px.png'),
            'Ave':require('../../assets/icons/bird_96px.png'),
            'Roedor':require('../../assets/icons/hamster_96px.png'),
            'Equino':require('../../assets/icons/horse_96px.png'),
        }
        const ico = ICON_TIPO[this.aplicationInfo.pet.tipo] || ICON_DEFAULT
        const datePublication = this.aplicationInfo.date.split(/[:,T,\-,\\.]+/)
        const visible = this.aplicationInfo.publicationVisible;
        return {
            visible,
            datePublication,
            dateYear: datePublication[0],
            dateMonth: datePublication[1],
            dateDay: datePublication[2],
            dateHour: ((datePublication[3])%24) < 5 ?((datePublication[3])%24)+19:((datePublication[3])%24)-5,
            dateMinutes: datePublication[4],
            dateSeconds: datePublication[5],
            ico,
            activePage:"contacto",
        }
    },
    props: {
        TogglePopup:Function,
        aplicationInfo:Object,
    },
    setup(props) {
        
        const popup_info = ref(null)

        onClickOutside(popup_info, (event)=>props.TogglePopup())

        return { 
            popup_info 
        }
    },
    methods:{
        test1(){
            this.visible = false;
        },
        test2(){
            this.visible = true;
        },
        openForm(){
            document.getElementById("myForm").style.display = "block";
        },

        closeForm() {
            document.getElementById("myForm").style.display = "none";
        }
    },

}
</script>
<style >
    .popup-infoApli{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.5);
        display:flex;
        align-items:center;
        justify-content: center;

    }
    .popup-infoApli .popup-inner{
        position:relative;
        background-color:white;
        width:1300px;
        height: 600px;
        
    }
    .lateral_bar_solicitud{
        background: #4B8BDD;
        width:30px;
        height: 100%;
        position:absolute;
        top:0px;
        left: 0px;
    }
    .button_exit_solicitud{
        width:40px;
        height:40px;
        position:absolute;
        right:10px;
        top:10px;
    }
    .button_exit_solicitud:hover{
        width:41px;
        height:41px;
    }
    /*Bloque de contenido*/
    .content_solicitud{
        margin-left:20px;
        height:100%;
    }
    /*Lateral izquierdo info mascota */
    .titulo_name_mascote{
        font-size: 25px;
        text-align:left;
        font-weight: 600;
    }
    .subtitulo_name_mascote{
        font-size: 18px;
        text-align:left;
        font-weight: 400;
    }
    .info_solicitud_estado{
        z-index: 21;
        height: 100%;
        padding: 0 15px 0 20px;
        
    }
    .ico_pet_sol{
        width:80px;

    }
    /*Titulo solicitudes */
    .titulo_info_solicitud{
        font-size: 20px;
        text-align:left;
    }
    .subtitulo_info_soli{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
    /*Lateral derecho información solicitud */
    .content_info_solicitud{
        position: relative;
        background: white;
        padding: 20px 20px 20px 40px;
    }
    .content_info_solicitud p{
        font-size:15px;
        color:rgb(0, 0, 0);
    }
    .contenedor_razon{
        padding:5px 20px 5px 20px;
    }
    .info_solicitud{
        padding:0px 0px 0px 30px;
    }
    /*Hover sidenav */
    #mySidenav a {
        z-index: inherit;
        position: absolute;
        width: 200px;
        left: -140px;
        transition: 0.3s;
        padding: 5px;
        text-decoration: none;
        text-align: end;
        font-size: 20px;
        color: white;
        border-radius: 0 5px 5px 0;
        
    }
    #mySidenav img{
        height: 50px;
    }
    #mySidenav a:hover {
        left: 0;
    }

    #about {
        top: 20px;
        background-color: #424242;
    }

    #blog {
        top: 90px;
        background-color: #4B8BDD;
    }





    /* The switch - the box around the slider */
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #2196F3;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }


    
</style>