<template>
<div class="col-sm-12 col-md-4 col-lg-3">
  <div class="card">
    <img class = "card-img-top imgCard" v-bind:src= imageRoute alt="" />
    <div class="card-body">
      <h3 class="card-title">{{petName}}</h3>
      <p class ="card-text text-center">
        <a href="#" class="btn btn-primary btn-lg" role="button">Editar</a>
        <a href="#" class="btn btn-outline-danger btn-lg" role="button">Eliminar</a>
      </p>
    </div>  
  </div>
</div>
</template>

<script>
export default{
    name:"petCardUser",
    props:['imageRoute', 'petName', 'petDescription']
}
</script>

<style scoped>
  .imgCard{
    object-fit: fill;
    max-width: 100%;
    height: 250px;
  }
  .btn-lg{
    margin-left :5px;
    margin-right: 5px;
  }
</style>