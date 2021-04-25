<template>
  <router-view/>
  <footer-component/>
</template>


<style>
  @import 'css/app.css';
</style>

<script>
  import footerComponent from '@/components/footer.vue'
  // import bundle from 'bundle.js' 
  // @import 'js/bundle.js'
  // import * as mykey from '../src/js/bundle.js';
  export default{
    components:{
      footerComponent
    }
  }
</script>
