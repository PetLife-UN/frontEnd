<template lang="">
    <navbar/>

    <div id="ingreso" class="texto_centrado">
        <div class="selcion">
            <div class="informacion pingreso">
                <menuLogin/> 
            </div>
            
            <img 
                class="flip" 
                src="../../gif/husky_1.gif" 
                alt="perro saludo">
        </div>

    </div>
    
    <div class="float-md-left bg-primary">
        <p>
            Texto inferior
        </p>
    </div>
</template>
<script>

// if('a' == 'a'){
//     console.log('hola mundo');
// }

import menuLogin from "@/components/menuLogin"
import navbar from "@/components/navbar"

export default {

    name: "Login",
    components:{
        navbar,
        menuLogin
    },
    methods:{
    }
}
</script>
<style>
</style>