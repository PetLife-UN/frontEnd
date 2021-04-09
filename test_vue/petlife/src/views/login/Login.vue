<template lang="">
    <navbar/>
    <div class="container-fluid">
        <div class="row alto bg-dark" >
            <div class="col-sm-12 col-md-6 bg-danger">
                <ul>
                    <li v-for="post in posts" v-bind:key="post.email" >
                        {{post.title}}
                    </li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 bg-success align-self-center">
                <menuLogin/> 
            </div>
        </div>    
    </div>

    <div class="float-md-left bg-primary">
        <p>
        
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