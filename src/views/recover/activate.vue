<template lang="">
	<navbar/>
	<div class="activacion">
		<h2 class="texto_centrado">
            El registro a sido exitoso
		</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import axios from 'axios';

var actual = window.location.pathname.split("/")[2];

axios.put();
// alert(URLactual);
export default {
    name: "Activate",
    methods:{
    },
    data(){
        return{
            result: null
            // direccion: actual,
            // Boton: "Enviar" 
        }
    },
    components:{
        navbar
    }
}

</script>
