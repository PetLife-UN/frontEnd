<template lang="">
    <navbar/>

    <div id="registro" class="texto_centrado">
        <div class="selcion">
            
            <img 
                src="../../gif/husky_1.gif" 
                alt="perro saludo">
            
            <div class="informacion pregistro">
                <menuSignup/>
            </div>
        </div>
    </div>

    <div class="float-md-left bg-primary">
        <p>
            Texto inferior
        </p>
    </div>
</template>
<script>

import navbar from "@/components/navbar"
import menuSignup from "@/components/menuSignup"
export default {
    name: "Signup",
    components:{
        navbar,
        menuSignup
    }
}
</script>
<style>
    
</style>