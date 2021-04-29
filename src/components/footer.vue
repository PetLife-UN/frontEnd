<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-1 element">
                    <br>
                    <img src="https://image.flaticon.com/icons/png/512/35/35145.png" alt="casaHuella">
                </div>
                <div class="col-sm-4 element">
                    <h4 style="text-align: left">Medios de comunicación</h4>
                        <ul class="list-unstyled">
                            <i class="fa fa-phone fa-lg"></i> : +57 6 69 87 25<br />
                            <i class="fa fa-mobile fa-lg"></i> : +57 315 6 69 87 83<br />
                            <i class="fa fa-envelope fa-lg"></i> : petlife2@gmail.com <br/>
                        </ul>
                </div>
                <div class="col-sm-3 element">
                    <h4 style="text-align: left">Redes Sociales</h4>
                        <ul class="list-unstyled">
                            <a class="btn btn-block btn-social-icon btn-facebook" href="http://www.facebook.com"><i class="fa fa-facebook fa-lg"> PetLife Facebook</i></a> <br/>
                            <a class="btn btn-block btn-social btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"> PetLife Twitter</i></a> <br/>
                            <a class="btn btn-block btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"> PetLife Youtube</i></a> <br>
                            <a class="btn btn-block btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram fa-lg"> PetLife Instagram</i></a> <br>
                        </ul>                     
                </div>
                <div class="col-sm-3 element">
                    <h4 style="text-align: left">Vinculos importantes</h4>
                        <ul class="list-unstyled">
                            <i class="fa fa-paw fa-lg"><a href="http://www.proteccionanimalbogota.gov.co/transparencia/tramites-servicios/adopciones-animales-compa%C3%B1%C3%ADa" class="links">Protección animal</a></i>
                            <i class="fa fa-paw fa-lg"><a href="https://www.puppis.com.co/adopcion" class="links">Puppies</a></i>
                            <i class="fa fa-paw fa-lg"><a href="https://www.adopcionesbogota.com/" class="links">Adopciones en Bogotá</a></i>
                            <i class="fa fa-paw fa-lg"><a href="https://www.adoptanocompres.org/" class="links">Adopta no compres</a></i>
                            <i class="fa fa-paw fa-lg"><a href="https://huellitas.social/" class="links">Huellitas sin hogar</a></i>

                            

                        </ul>                     
                </div>
            </div>
        </div>
        <div class="justify-content-center rigths off">
            <br> <h4 class="rig"> © PetLife 2021, Todos los derechos reservados</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "footerComponent"
};
</script>

<style scoped>
    .footer{
        margin-top: 1rem;
        background-color: #3E57BA;
    }
    .rigths{
        min-height: 50px;
        background-color: black;
        text-align: center;
    }
    .rig{
        color: white;
    }
    .element{
        padding-left: 15px;
        padding-right: 15px;
    }
    .links{
        color: black;
    }
</style>