<template>
    <navbar/>
    <div class="row ">
        <div class="container">
            <pet-preview  :idPet="$route.params.idPet" /> 
        </div>
        <div class="container">
            <application-form  class="col-sm-12" :idPet="$route.params.idPet"/>
        </div>
        
    </div>
    <h2>{{$route.params.idPet}}</h2>
</template>

<script>
import navbar from "@/components/navbar.vue";
import ApplicationForm from '@/components/ApplicationForm.vue';
import petPreview from '@/components/mascotaPreview.vue';

export default {
    components: { navbar, ApplicationForm , petPreview},
    name: "ApliAdopcion"    
}
</script>
