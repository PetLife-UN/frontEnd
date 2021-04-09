<template lang="">
    <navbar/>
    <div class="container-fluid">
        <div class="row alto bg-dark" >
            <div class="col-sm-12 col-md-6 bg-danger">
                
                


            </div>
            <div class="col-sm-12 col-md-6 bg-success align-self-center">
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