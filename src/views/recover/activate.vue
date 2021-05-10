<template lang="">
	<navbar/>
	<div class="activacion">
		<h2 class="texto_centrado">
            {{actual}}
            El registro ha sido exitoso
		</h2>
        <p></p>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import axios from 'axios';



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
        navbar
    },
    mounted:function(){
        this.token = this.$route.params.token
        axios.post("http://localhost:8080/api/auth/activate/"+this.token).then( data =>{
        //axios.post("https://unpetlife.herokuapp.com/api/auth/activate/"+this.token).then(data =>{
            console.log(data)
        })

    }
}

</script>
