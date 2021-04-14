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

   <!--  <div class="container-fluid">
        <div class="row alto bg-dark" >
            <div class="col-sm-12 col-md-6 bg-danger">
            </div>
            <div class="col-sm-12 col-md-6 bg-success align-self-center">
                <menuLogin/> 
            </div>
        </div>    
    </div> -->

    <div class="float-md-left bg-primary">
        <p>
            Texto inferior
        </p>
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