<template lang="">
	<home/>
</template>

<script>
import navbar from "@/components/navbar"
import axios from 'axios';
import home from "@/views/home/Home"
export default {
    name: "Activate",
    methods:{
    },
    data(){
        return{
            result: null,
            token : null
        }
    },
    components:{
    
        home
    },
    mounted:function(){
        this.token = this.$route.params.token
        //axios.post("http://localhost:8080/api/auth/activate/"+this.token).then( data =>{
        axios.post("https://unpetlife.herokuapp.com/api/auth/activate/"+this.token).then(data =>{
            console.log(data)
        })
    }
}
</script>