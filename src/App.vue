<template>
  
  <router-view/>
  <footer-component/>

</template>


<style>
  @import 'assets/styles/app.css';
  
</style>

<script>
  import footerComponent from '@/components/footer.vue'

  export default{
    components:{
      footerComponent
    },
  }

</script>
