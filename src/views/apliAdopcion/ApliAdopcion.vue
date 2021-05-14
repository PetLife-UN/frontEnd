<template>
    <navbar/>
    <div class="row" style="background: #dfe6e9"> 
        <div class="col-sm-9">
            <application-form  class="col-sm-12" :idPet="$route.params.idPet"/>
        </div> 
        <div class="justify-content-center col-sm-3">
            <pet-preview  :idPet="$route.params.idPet" /> 
        </div> 
    </div>
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
