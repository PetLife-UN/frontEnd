<template>
    <div class = "popup-infoApli">
        <div class ="popup-inner">
            <h1>Información de solicitud</h1>
            <button v-on:click="TogglePopup()">
                Cerrar
            </button>
            {{aplicationInfo}}

            <button v-on:click="TogglePopup()">
                Eliminar petición
            </button>
            <button v-on:click="TogglePopup()">
                Terminar proceso de adopción
            </button>
            
        </div>
    </div>
</template>
<script>
export default {
    props: ['TogglePopup',
    'aplicationInfo']
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