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

</template>
<script>

import menuLogin from "@/components/menuLogin"
import navbar from "@/components/navbar"
export default {
    name: "Login",
    components:{
        navbar,
        menuLogin
    }
}
</script>
<style>
    .alto{
        height:800px;
    }
</style>