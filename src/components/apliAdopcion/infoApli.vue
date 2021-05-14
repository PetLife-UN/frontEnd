<template>
    <div class = "popup-infoApli" >
        <div class ="popup-inner" ref="popup_info">
            <h1>Información de solicitud</h1>
            <button v-on:click="TogglePopup()">
                Cerrar
            </button>
            {{aplicationInfo}}

            <button v-on:click="Test()">
                Eliminar petición
            </button>
            <button v-on:click="test()">
                Terminar proceso de adopción
            </button>
            



        </div>
    </div>
    
</template>
<script>
import { ref } from 'vue'
import {onClickOutside} from '@vueuse/core'
export default {

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
        background-color: rgba(0, 0, 0, 0.2);
        display:flex;
        align-items:center;
        justify-content: center;

    }
    .popup-infoApli .popup-inner{
        background-color:white;
        padding: 32px;
        width:1200px;
        height: 680px;
        
    }
</style>