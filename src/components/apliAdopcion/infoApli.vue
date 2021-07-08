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
                <div class = "col-3 info_solicitud_estado bg-light">
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
                        <p><mark class="subtitulo_info_soli">Fecha de publicación: </mark>{{dateYear+"/"+dateMonth+"/"+dateDay+"   -   "+dateHour +":"+dateMinutes+":"+dateSeconds}}</p>
        
                        
                        

                    </div>
                    <div class = "row ">
                        <div class="dropdown">
                            <button class="dropbtn">{{visible}}</button>
                            <div class="dropdown-content">
                                <a v-on:click="test1"> Link 1</a>
                                <a v-on:click="test2">Link 2</a>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class = "col-9 content_info_solicitud">
                    <h3 class="titulo_info_solicitud">Información adoptante</h3>
                    <div class = "row">
                        
                        <div class = "col-6">
                            <p><mark class="subtitulo_info_soli">Nombre: </mark>{{aplicationInfo.name}}</p>
                            <p><mark class="subtitulo_info_soli">Edad: </mark>{{aplicationInfo.age}} años</p>
                        </div>
                        <div class = "col-6">
                            <p><mark class="subtitulo_info_soli">Ciudad: </mark>{{aplicationInfo.city}} ({{aplicationInfo.department}})</p>
                            <p><mark class="subtitulo_info_soli">Dirección: </mark>{{aplicationInfo.address}}</p>
                            
                            <p><mark class="subtitulo_info_soli">Ocupación: </mark>{{aplicationInfo.occupation}}</p>
                        </div>
                    </div>
                    <h3 class="titulo_info_solicitud">Información de contacto</h3>
                    <p></p>
                    <div class = "row">
                        <div class = "col-6">
                            <p><mark class="subtitulo_info_soli">Email: </mark><a href>{{aplicationInfo.email}}</a></p>
                            <p><mark class="subtitulo_info_soli">Teléfono celular: </mark>{{aplicationInfo.movilNumber}}</p>
                        </div>
                        <div class = "col-6">
                            <p><mark class="subtitulo_info_soli">Teléfono fijo: </mark>{{aplicationInfo.telNumber}}</p>
                            <p><mark class="subtitulo_info_soli">Medio de comunicación principal: </mark>{{aplicationInfo.communication}}</p>
                        </div>
                    </div>
                    <h3 class="titulo_info_solicitud">Información de solicitud</h3>
                    <p></p>
                    <div class = "row">
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Familia de acuerdo: </mark>{{aplicationInfo.familyAgreement}}</p>
                        </div>
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Familia de acuerdo: </mark>{{aplicationInfo.familyAgreement}}</p>
                        </div>
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Familia de acuerdo: </mark>{{aplicationInfo.familyAgreement}}</p>
                        </div>
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Miembros familiares: </mark>{{aplicationInfo.familyMembers}}</p>
                        </div>
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Edad promedio familia: </mark>{{aplicationInfo.averageAge}} años</p>
                        </div>
                        <div class = "col-4">
                            <p><mark class="subtitulo_info_soli">Alergias en la familia: </mark>{{aplicationInfo.allergies == true ? 'Sí': 'No'}}</p>
                        </div>
                        <div class = "col-3">
                            <mark class="subtitulo_info_soli">Razón de adopción: </mark>
                        </div>
                        <div class = "col-8 bg-light border contenedor_razon">
                            {{aplicationInfo.reason.substring(0,110)}}
                        </div>
                        <div class = "col-4">
                            <br>
                            <p><mark class="subtitulo_info_soli">¿Dónde dormirá? </mark>{{aplicationInfo.restingPlace}}</p>
                            <p><mark class="subtitulo_info_soli">Acepta tiempo de adaptación: </mark>{{aplicationInfo.adjustmentPeriod == true ? 'Sí': 'No'}}</p>
                        </div>
                        <div class = "col-4">
                            <br>
                            <p><mark class="subtitulo_info_soli">¿Quién lo cuidará? </mark>{{aplicationInfo.careOption}}</p>
                            <p v-if=" aplicationInfo.adjustmentPeriod == true  "><mark class="subtitulo_info_soli" >¿Cuánto tiempo? </mark>{{aplicationInfo.adjustmentPeriodTime}}</p>
                        </div>
                        <div class = "col-4">
                            <br>
                            <p><mark class="subtitulo_info_soli">Seguimiento de la mascota: </mark>{{aplicationInfo.followingAgreement == true ? 'Sí': 'No'}}</p>
                            <p><mark class="subtitulo_info_soli">Experiencia con mascotas: </mark>{{aplicationInfo.animalExperience == true ? 'Sí': 'No'}}</p>
                        </div>
                        <p></p>
                        <div class = "col-6" v-if=" aplicationInfo.animalExperience == true  ">
                            <p><mark class="subtitulo_info_soli">Mascotas anteriores: </mark>{{aplicationInfo.experienceType}}</p>
                            <p><mark class="subtitulo_info_soli">Estado de la mascota: </mark>{{aplicationInfo.experienceNow}}</p>
                        </div>
                        <div class = "col-6" v-if=" aplicationInfo.animalExperience == true ">
                            <p><mark class="subtitulo_info_soli">Edad de la mascota: </mark>{{aplicationInfo.experienceLife}} años</p>
                            <p><mark class="subtitulo_info_soli">Razón del estado: </mark>{{aplicationInfo.experienceReason}}s</p>
                        </div>
                    </div>
                    assdasdasdasasdadasd
                    <button class="open-button" v-on:click="openForm()">Open Form</button>

                    <div class="form-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <h1>Login</h1>

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required>

                        <button type="submit" class="btn">Login</button>
                        <button type="button" class="btn cancel" v-on:click="closeForm()">Close</button>
                    </form>
                    </div>


                </div>


                
            </div>


            sdadsasd
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
        z-index: 99;
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
    /*Dropdown button css*/ 
    .info_solicitud_estado .dropbtn{
        background-color: #4CAF50;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        min-width: 160px;
    }

    .info_solicitud_estado .dropdown {
        position: relative;
        display: inline-block;
        
    }

    .info_solicitud_estado .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .info_solicitud_estado .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .info_solicitud_estado .dropdown-content a:hover {
        background-color: #f1f1f1
    }

    .info_solicitud_estado .dropdown:hover .dropdown-content {
        display: block;
    }

    .info_solicitud_estado .dropdown:hover .dropbtn {
        background-color: #3e8e41;
    }
    /*Slider*/

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
    /*Popup text */
    

    /* Button used to open the contact form - fixed at the bottom of the page */
    .open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    right: 28px;
    width: 280px;
    }

    /* The popup form - hidden by default */
    .form-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
    }

    /* Add styles to the form container */
    .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
    }

    /* Full-width input fields */
    .form-container input[type=text], .form-container input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
    }

    /* When the inputs get focus, do something */
    .form-container input[type=text]:focus, .form-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
    }

    /* Set a style for the submit/login button */
    .form-container .btn {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:10px;
    opacity: 0.8;
    }

    /* Add a red background color to the cancel button */
    .form-container .cancel {
    background-color: red;
    }

    /* Add some hover effects to buttons */
    .form-container .btn:hover, .open-button:hover {
    opacity: 1;
    }
</style>