<template lang="">
    <navbar/>
    <div>
        
        <div id="inicio" class="video seccion mostrar-seccion">
            <div class="overlay">
                <div class="contenedor contenido-video">
                    <h2>Adopta
                        <span>NO COMPRES</span>
                    </h2>
                </div>
            </div>
            <video controls autoplay muted loop>
                <source src="../../assets/video/video1.mp4" type="video/mp4">
                
                <source src="../../assets/video/video1.webm" type="video/webm">
            </video>                
        
        </div>

        <div class="espacio_trabajo">

            <div class ="subtitulo">
                <h1 class="titulo_home texto_centrado">
                Tenemos distintas mascotas esperando ser adoptadas
                </h1>
            </div>

            <div class="row tres_mascotas">

                <div class="col-lg-4 col-md-6 col-sm-12 vista" v-for="mascota in Listamascota" :key = "mascota.idPet"> 
                    <div class="card mb-4 box-shadow" 
                        :class="mascotas(mascota.id)">
                        
                        <img 
                            class="card-img-top imagen_catalogo"
                            v-bind:src="mascota.links_foto" 
                            v-bind:alt="mascota.id">

                        <div class="card-body carta_mascota">
                            
                            <div class = "datos_mascota">
                                <div class = "col-9 titulo_masc">
                                    <h2 :class="nombre(mascota.nombre)">{{tamanio(mascota.nombre)}}
                                        <span :class="completo(mascota.nombre.length)">
                                            {{adicion(mascota.nombre)}}
                                        </span>
                                    </h2>

                                    <p>{{mascota.tipo}}  -  {{mascota.edad}} años</p>
                                    <p> {{mascota.raza}} </p>
                                </div>
                                <div class = "col-3 icono">
                                    <img class="imgmascota" :src="imagen(mascota.tipo)">
                                </div>
                            </div>
                            
                        </div>
                        <div class="cboton">
                            <button class="btn btn-lg button_adopta" v-on:click="verInfo(mascota.id)">Ver más</button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import navbar from "@/components/navbar"
import axios from 'axios';

var datos = '';
var valor = 1;
export default {
    data(){
        return{
            Listamascota:null,
            size:4,
            totalPages:0
        }
    },
    components:{
        navbar,
        
    },
    computed: {
        
    },
    methods:{
        verInfo(idPet){
            this.$router.push("/Info_mascota/"+idPet)
        },
        mascotas(i) {
            if(valor%2==0){
                valor++;
                return {
                    'izquierda':true
                }
            }
            else{
                valor++;
                return {
                    'derecha':true
                }
            }
        },
        imagen(i) {
            switch (i) {
                case 'Canino':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACuFBMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVlVVVVdXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhaWlpXV1dcXFxaWlpeXl5cXFxdXV1bW1tZWVlbW1tZWVlcXFxaWlpcXFxaWlpdXV1bW1taWlpdXV1ZWVlcXFxbW1tZWVlcXFxZWVlcXFxaWlpdXV1bW1tcXFxbW1tcXFxbW1taWlpcXFxZWVlaWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1tcXFxbW1taWlpbW1taWlpcXFxbW1taWlpdXV1cXFxbW1taWlpbW1tbW1tcXFxbW1taWlpbW1taWlpaWlpcXFxbW1taWlpbW1tcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpaWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1tbW1tbW1taWlpbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpcXFxbW1tbW1taWlpbW1taWlpbW1tbW1tbW1taWlpbW1sK5oP+AAAA5nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAiIyQlJicpKistLi8wMjM0NTY3OTo7PD0/QEFCQ0VGSElKS01PUFFSU1RVVldYWVpbXF5fYGJjZGVmZmdoaWprbG1ucHF0dXZ3eXp8fX5/gIGCgoOEhYaHiIqLjI2Oj5CRlZaXmJmam5ydnqGipKWmp6ipqqus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";
                case 'Felino':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACo1BMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVlVVVVdXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhdXV1aWlpXV1dcXFxaWlpeXl5cXFxdXV1bW1tdXV1ZWVlcXFxaWlpcXFxaWlpdXV1bW1taWlpdXV1bW1tZWVlcXFxbW1tZWVlcXFxZWVlcXFxaWlpdXV1bW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tZWVlbW1tcXFxbW1tcXFxbW1tcXFxbW1taWlpbW1taWlpcXFxaWlpcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tbW1tcXFxbW1taWlpcXFxaWlpcXFxbW1taWlpbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tbW1tbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1taWlpcXFxaWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1tMtXGVAAAA4HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKSosLi8wMjM0NTY3ODk6Ozw9P0BBQkNERUZHSElKS0xNUVNUVldZWltcXV5gYWNkZWZnaGlqa21vcHFydHV2d3h5ent8fX5/gIGCg4SGh4iKi4yNjo+Rk5SVlpiZmpucnqCipKWmp6ipqqusra6vsbKztLW2t7i5u7y9vr/BwsPExcbHyMnKy8zOz9DR0tPU1dbX2Nnb3N3e3+Dh4uPk5ebn6Orr7O3u7/Dx8vP09fb3+Pn6+/z9/gzrnDIAAAVpSURBVBgZ7cH5W1RlGAbgZwaVYgxTbBF3oBRxN1PbtFwyKyUrcCu3hBQrc2kx03JJ07JELZfSIlMJKzKNkoAW1AmRGRBjKZjnT6n3zDjnzHzfsMzx6uoH7hsdOnT4L5XuzZnaC9dB4rSV+0qgauC//vgkZ2wnRK3T3Ss/reC/6qGqZcCVQ0uGof0cw5YeusKAGqg8tCh5KRkhEict3naisMzt8bjLCk9sWzQxESFSVpXS4jJUFxjCl7/gJvjFTX2rlIrSTVNuhN9Nz3zFUL9D9SPDedYmAM5JufWMoG7PRAfQc52X4c5ClU+VNzu7lC0qyXreS9VxqA5T7NrvoQ1V+96jOADVVoqFiBmZU8ho+ApXjHBiEcVmqFZQvAbRf2kxw5R8uGL6nUkJ3bsnJN05PWdPCcMUL+kHsZ4iG6pZFLvh55h0iEFX980bgDAD5+2/yqCDEx3w20PxOFR3U+Qj6K48Gk4viIdWt2e+pyFvDIJOUYyBqjfFJVg8Us6m3DFowZjcJpY/AosqituhcjZQJMLCtTAFrUhZ6IJFX4o6BzSKKKbAlmkUZ6Czg2I5bFlJ8Q50nqXYC1v2U8yHziiKSgdscFZRDIdOlwaKVNgwhKKuM7QKKebChvkUX0PvFYqPYcNBirXQm0BRF4eoxdVRjINe52qKhxC1yRTeTojgA4otiNpWit2IJJviggNRclykyEIkX1P84ESUnEUUBYhgFA0zELVHaRgBva0UvzgRtZhfKd6GVpcrFM/DhuUU1Z2h8wBFfQJs6FlPcQ901lF8BFsOUKyBzncUc2HLAopCaNzcTJEMW+6gaO4G1XiKMljEZx51ezzntj/ogIbjoe3FHo/7SEY8LH6lGAvVPIpcmLKqGXBiABQDTzLAuwymvRRzoNpI8TJMNQxypyDMoAoGVcO0mmIDVEcpZsJURNNPsQgRW0zTWZhmUXwC1XcUI2F6lxZrEGItLXbANJriW6jKKJJhmk2LWhcsXLW0SIcphaIEqkqKnjC5ammRDovZtKh1wXQLxSWoGim6wCKHFjthsYsWy2ERS9EA1Z8UcbCILabpLCyKaPopFhYuiqtQnafoC6tBFQyqhkUNg9wpsOpPUQ7VGYphCDEwjwHeZbDIqmbAZwMQYjjFaaiOUcxAmPHbi+voPpIRjxDxmUfdrDu3fRzCPEbxOVQbKdbDpjcpNkD1BMVJ2FRAMROqVIqG7rClRyPFIKiclynmwJb5FJcc0NhMcRK2FFBsgs59FL402DDcRzEBOs6LFLnQqWYYL3Q+oih3QusFiuYh0NjDMB9CI81HsRx68R6K4w6o+tcyRG0/qJynKCpdiGA1DRnQmOOjhS8TGvNoeBGR3OKlqLwVGtm0yIJGryqKqgRElEnDV12gMb2GATXToRF7ioanEZkjn4ZN0Bn6PQ2nh0JnCw1fONCC4X/RkAGdmOwGsn6REzrzaWgcihYtoMH3FLSGHjuWBq0MHw2ZaMUHNDRMRrs83EjDLrSmaxENjTPRDrP/ouGMC63qU05D82K02VIfDb/1RhskV9Dv/Ti0Sdxu+v2RhDYZW0O//F5og94F9POORhulXqRfzVwHWuGYW0O/C4PRZqkXGbA3ES3qs58BFwajHfoXMuDqKhci6rrmTwZ80w/tcsM7vMa91AWtrs9V8JotsWivp2p5TeVLfaDou+oyr7nyJKKQUsCgpsOzesCiR/qnzQzKT0JUOr1QT9PfX74yM+22mJjb0ma9eryJprqcGEQrcWsTW/H3xp6wY9RRtujICNg1ZGcTI2jaOQTXQ+qr56lRvm4wrhfn/Rt+Zohzb9zrxPWV/MT6vDIP6Sn7/PX0JHTo0OF/5B8bVJTJLAO6HQAAAABJRU5ErkJggg=="
                case 'Bovino':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC1lBMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVZWVlmZmZVVVVdXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5YWFhdXV1aWlpcXFxaWlpeXl5cXFxdXV1bW1tZWVldXV1bW1tcXFxaWlpYWFhcXFxaWlpdXV1bW1taWlpdXV1bW1tZWVlbW1tZWVlcXFxaWlpZWVlcXFxaWlpdXV1bW1tcXFxbW1taWlpcXFxaWlpcXFxbW1tZWVlcXFxaWlpbW1tcXFxbW1taWlpcXFxaWlpcXFxbW1taWlpbW1taWlpcXFxbW1taWlpcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxcXFxaWlpbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpaWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1taWlpbW1taWlpcXFxbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1taWlpcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1taWlpbW1vaVhZAAAAA8HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESFBQVFhcYGRobHB0eICEiJCUmJykqKywtLzAxMjM0NTY3ODk7PD0+P0BBQkNFRkdISktMTU5PUVNUVVZYWVpbXF1eX2BhY2RlZmdoaWpsbW5vcHFyc3R0dXd4ent9fX5/gIGCg4SF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"
                case 'Pez':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACo1BMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVldXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhaWlpXV1dcXFxaWlpeXl5cXFxZWVldXV1bW1tZWVldXV1bW1tZWVlcXFxaWlpaWlpdXV1bW1taWlpdXV1bW1tcXFxbW1tZWVlcXFxaWlpZWVlcXFxaWlpdXV1bW1taWlpbW1tbW1tcXFxbW1tZWVlcXFxaWlpcXFxbW1taWlpcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpbW1taWlpcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tbW1tcXFxbW1taWlpbW1tcXFxbW1taWlpcXFxbW1taWlpbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpbW1taWlpbW1tcXFxbW1tcXFxbW1taWlpbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1ufK3OqAAAA4HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQWFxgZGhscHR4fICIjJCUmJygpKissLS4vMDM0NTY3ODo7PD0+P0BBQkNERklLTE1OT1BRUlNVVldYWVpbXF1eX2FiY2RlZmdqa2xtbnByc3R1dnd5ent9fn+AgYKDhYaHiImLjI2Oj5CRk5SWl5mam52en6ChoqSlpqeoqaqrrK2ur7Cxs7S1t7i5uru8vb6/wMHCxMXGx8jLzM3O0NHS09TV1tfZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/vvZmE8AAAStSURBVBgZ7cH5X5MFHAfwzzY2iMOaV1gZqWEpEQVmqR2mpAJqh5qlFWpW3uYBnqWmRmoeJB4pZopXIknlgVriykSOmAXKzT5/SnyfjbG55xl7hr/Ua+83QkJCQkL+4xJWXSi3i2slZwsOfrkkMy25N+6htHr6qr+0e/7oPrgXkluo6fedM+PRVTvoX+n6F03oiip2qmLdkwjebQbAcWwkglVCMdNqtfZ4LCHllfT3F63f9/M/9HFqKIKzmeI0vHUflrmpuJmeHLmPIhjDqXgGvqKGL/7RwQ417yAIhqsUu6Audkahg267IqHfXIrmOGgZkF3OdsWx0M1aS7ES2u6bdZMupf2h21oKeyRczEkTF2zLL/q12m63wyV6eT2dbL2gV1wLxXS0MQ1dcqKOHeA26Cc6nQ6HXvsozgCJG6vpDR3Ct9JpmwE6vUThGHeMPuBpMZ1eh06G36gFXhZScSMGOq2iFngx5FGxGp14oNRWfHhHugkuz9NLzfFNH08YMai31WqFt6gSisZY+LeGClsGnEyNbNd4eGaCCZqGOyiWwK9+TXTZaIb4hC5VC3rDv60UFRHwZw3d9lgApLVS0fxpNDoT76AYBz8i7exwKAoDaqi4kYIAfEeRAz8m0dO50cVUFPdBIMZTVBihbQ9FYQm92HohINH1FInQZK6lGBVzlB7qEhGgoxTvQlMyRW04wg+wQyYCtYxiIzTNosgHYMlhu70GBGocxSlo2kwxD+KNP6g4H4OAxVNUQtNJilQowsbn/XKH1f0QOHMTRQ9ouUYRD33MWTZblhniCsVz0FJN0R36ZLHNcoj9FAugpZHCAn3K2KYMYi5F0yhoaKSwQJ+bbFMGMdhB0TAB6v6i6Al9sthmORQHqHAsM0DNNYonoI85q7IyywzFQDudtpig4iTFa1CY0nKLysh10GVYHZ1yoWIzxTyI9FIqqizQZWQdncbA1yyKfADmDWw3FvokX6fiMHwlU9RGIDKfbt9CpwdPU1TAl7mWYnS3E+zQOhg67aIohYrdFIWX6emIAbpkUrEFKibS08WdVMyGHi80ULQ+DRXhlexwJKpHDUXLZAQu6W8qVkFVNt32RwCz6ZRzPwKUXE1FkRmq+jbQyfF5GABjAZ0qPuiGQIyoocIeBw2rqbg6BoqHK+hyZ2eGFZ2Z3EBF8yho6W6vunhi+1gjXJ66RTfH5dzs91KTH7FarVBjyqJT6yQEbgbVWOCr7yk6tU6HDiupxgIfE2/Rqfkt6HGJaiy4S1w+XWpToUc8FXvr6cUCLxFz7tClNAG6LKU4h6j0nIstdLPAQ9i062z3fU/oYrRRLIWIHjJ1xTfHL5Tb7XYL3MKnXGa7pjlG6PMyFQOhpdfCm3S7kgK9tlEUQl3Yq9sb6Fa/KAJ6xdymmAYVxmfXltPDof7QL5WiJhp3MSbNOXKbno4NQTCyKb6GB+OAjGX5ZfRWkmZAUAoo3kS49dHHk0ZMmv/FwfO19FGQakSQzrBTdV8lInh59K+14O1u6Iqp9KPh+EcPoYvCzlBd69kVIyNxD8QV8m41P2yYnhKFe8U0Jc/WyCb7n1eLi/Z99mHGkFgDQkJCQkL+l/4F3DzGTquaNLYAAAAASUVORK5CYII="
                case 'Ave':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAObElEQVRYCe2ZCXBV1RnH780jYRUt4CgkgkgC6mRxIxQtnSBu4EJAUCAJRsfSOlrHBYq1olg6LoiK4lbsYCQJBCMoijK1sqmdKhYnhhBkKSo1WgUTqiFIQvL6+wIvfe/ec++7L+/dJMab+b6cc77vO9855/+d9T5N8/48BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPARcR0B3vYUO1kB+fv4JDQ0NV+i6fpnf7z+d7g2CfbBQI/8+13X9k6amprUJCQlvFBQUHEDmGv1kApCTk3MFgN8KuFmapsXDTqgBow3wouLi4jWkMadOH4Dc3NwsgJ8PcsPhaOhDVsWs5cuXb4rGibGubhR0lvLkyZN9Xbt2fQjw72RMsRqnnxU0Pzk5+e65c+c24TdqilXHou5ILB0A/ons3yvxOQqOORHUv+H02mXLltWQRkWdLgDHDtl3QCUNdo1YCeUEYhRnw3fRNBIXTeWOVjcrK6tLfX39S/QrHPhfYfMMfKnP5+sHiLqw5EUGuM+S/ge2JMBPR1nMVhQVhp1qBXDgPgMwNwGMFX2B4o9VVVUvbNy48Qh5S5oxY0Z8XV3dDfibg1EibEXzCd5sK2U4eacJwLRp00brur7eZsCr4uLiphcWFh60sTGpOE96xcfHF+I726Q8KvCTnE8Q3ieNmKJaPhG35l4F8NEftnLPLH4CgCZFCr74Ky0trR06dOjV5BfCKpJJvEClcCLrFAFg65nMYIfDKloNgHegkJlKEjmxzzelpKTcSZRft6h9AStwooXOVtwpAsAMv9lilFW8BfIEQAu9Y7H4oJ1cKsgBThJKBOeWUImzkiwfZ5Yd1Ipr58l826mie6rJlMfWU4TOkjhse9TW1s4CQAG3L4b74SJuU4+UlpYeIh9CzPR8bF8IER4tNPJSPpmXstQ/KnHwX9VpB9U6jglAXUZvVOP4HN1ydJaUl5fX8+DBgxsAdK6macnwz+AU+H4echskOORDiGAXIvg3bCRusT6rlWi0bSmrOt6i/DFkAO8Si36uZgY3WuiaxY2NjbPJZMIqGkFwZhoVx3y+ZpRLmS3qPlbIo6rAiV7FP/oAMKgzYBW9oRIGywheTnBZkc9TyDTqrVHJkaHS7+D9UM7FIEtz8OdaAOT+zMHlmv+gsZ0SlG/JMrsrWgrWmSRrlaYxo5W+kdv6Rj8EXs8n8Ofg3nZtuAIQjaZx+yjbtWvXQ3aNx0h3nMpP796996nkBtkXhnJIkems2uu16upqpW9AD64vF5xfI6hgWxpHqqSIAuBkRrP0rqGlf9CZIaSzaHwKqZvUqHJeU1PTRSUPltHH4uCyIl+okGm9evWKV8kJmEmMrBtCOdxJzOQ4AAA5mxn9GltLgtmNpmXxIQzw/8ygVqDvCTcTHViC/Jzmgjv/lNc+riT9wjWHzcPYbIZV9EHPnj0XqBR80jhJJTfKGHsxW+GZfLYuNuoCZUcBAMA5OHuISpdzPSvhlI8nH0JJSUn3AP6MEOHRQnfux8sJ3PFHi7H9T7/2qzx26dIlXSUPlsmnCUAeTb/napq2G26Cd8H3cYUdvXjx4jryJuLb0GkmYahgL8VxRUVFueHeBbJPYWtN7Ofz0N4DB9MKOphz7ErWLAdg+RHkQwqDYBWt4Tk/nm1MBqnSawS6P8HKRHkus+x0gDkNgAeSBraTBnQCuPBu8uvQZWMzmbyRHuER9jujMBZlMHkQP3fBRmqiL/MOHz78MNgcMipVZdsA0JAsUatBFAJo/tygn+YA8BwAeY+GusMmQjeP5XhvsGL69OkDWaY5yCbA58G2fULvlPjqXHXqxjCfnZ06C7YDlzLKGXAIqcYXYqAoxClkzSJmdAIOz24uqP/l7d69ezGqFsBYch9RVm1DiDW5P9+Tm5ubLYWpU6eOZCB/BfxPKT8AD4dbfJGPlhL5uyZaJ8b6nIWZyEzgI9MYy4uSRsK6nTF7fQ9eg29gk6VZ/LHkngX4m1H74WYC2MfJ3Aar6HuE6+HxsNv0JQ2cwVb0HWlMiLEV42gaHEJM1p2s7mEhQgcFyxUgdeUQYq8fh3MBTEQmRncTnfoLipZgsvZnUd4Aq0ju7W0BvrQ9gH9rWM0+0qiJVfsLnEyFTcREfMokdCCwDYDUl8ME5xPIvw9b0Q1sLQ8GlLLvErhrKX8OtzeN4ub2NmdV2LHadZTdIJ6LwUJsdNhIB7kZFRqFTsqOOiVLmAbG4nALrCRWwmxWwv0BJYHbR+AmUj4ER0LbMX4azqP+BdzVB/n9/j7C9KE/8nTkk0ifhD+BnVAWb5g92dnZJzgxVtmwFd+L/FzYRPTnqYKCggMmhQOB7sCmxYSl3IfZtB5BBqwkOvMHzoQHAkqCkks+3Oyood5iPvU+v2LFin9h75g4FEfruv5bKmTD4cZTRSBn85J9ie21AXtHxBhkB3gZY9WE3c9qT2bC/Rd9xBSuwyaHBEHu+xKEVJPy/4KZrJpHA0UG8Dj522AjNQLIEwR1XmtnUMAh+7OsjPkE49KAzCbdTP9G2OhbVPRdVpscvAktwtDMDHw9HypyXvI5Nz1qWVlZWZeamrqKgV6BpB+sooszMjK+LS8vb37m9+3bdx0fx0ZhOBgO0AEyV3FzeK6srOwH8lFRRUXF11u3bi1KT0+XmXgJznTYikqwfctKGZAz2dgBfR9TjodNBAZvAv5MkyICgWpJha3O8/pr7rxjMNwNq0hnZj/J7PmVKBWH8meapl1A59eRWhK/WKXKNyZLA4UCnwvZEmSvrlWom0UAt6w5E/5fd0x8sIr24ud6FH641dSqAEhrJSUlXxKEC8l/CqtIRyjfw68j1dgjA4fyOxymIwGqUuRGltsK+/p4eB2fJbYOGDBgqtEmXJm2yrp16zbI7/cvxtYPB9N2zih5MAbLlHm+J3VTKjStnrFn8y3pGwu9Y7GA5NhYZThlypRTWaeb0A2EVdTITMlj0MtVyoCM1dKb/A3Y3gJwQ8gH6FN+W8hYsmTJ9wFBJCnX41H4e446Z8LyI8sctr0/ST4cM7ZTGNtehd0XTKBTFPKIRXER1zBUYCV8BmhjEFfBKvIBwFKAuFqlDMjwcTn5x7EdQhpMg9lSnkWgwxETgX+Xb1Zp+JWPdpuYubYTIbgBVoASZPpaHWwXTb5Vg1I1CMDDGORGTdNOhlVUz5YyhvPjPZVSth7u6h+hy4BNxKAXAOYsk8JFAWO6njEtMTaBbCWraJJR3ppy1Csg0Cjg7ADgiwBqX0BmSBN4SU4xyFqKBKCJgd2OoAk2EbqZbFPFHMw9TUqXBLR5noXrHRbyiMUxC4C0zOzexhK/iPy3sIqyNJs/ZtUGv9+/0MZkGkHeRiCulSuijV2sVGNUjphk5Sp5a2Qx24KCG2eWjgCo94Nlx/J+DrVTly5duvdY2ZSMHTu2a58+fTZqmvZz2I7kzCkFjE26rn+8f//+L9euXXvYrkIkOn6nGMpk2qGo42ds/ZlsXyt0EYviIq7hoALXsw+YyTsVpjqDmqaQt4gEROqOQ1AG21EiytuwfQVA9hC0HyjHjOhnjoWzbbECX/y7EgBxzKx8VVIjI78x3PbBVlTDzecSbN8z1m+Lsnz5pJ18Tf2nHJfaNLzUtQDQdBFsImbsEB5iE00Kg4DH1L4ePXpciP0TqIyPKUTuUW1trcz+gYoW6I5/qULeapErZ0CgNxyWm8kPh420ixmeCsj1RoWqzHXwHEb+FLqRsCXxOIp6PPn5+d2OHDlSQXtDjA3JiuS2N8ooj6YcF03lcHUZxGMWNim8bmda6ExiBv0Rv7L9EoXMzLdJm2BXiIlxN/02gS+NcdYskDSWHPWMseuMfEhLSkr6xGJA9cyoTMD92M6HSsfKSsLnaF3Xz0d/NpwIn8QKSCBtNXF7Ow+Q/44DlZ9t+E9DF9Pt0NUA0FmNj2oTAWql5BW8i/MgM9rfAhR+IxYR1N5U2gInwyZiDOOZLK+ZFFEKXN2CpG/caFaRroNVlMKSf0nu/iplW8lk36ctud0owUe32g3w8au5HgBphDv1jaTfwSZiZl3MHb7dgsCVuDuH7ko6NhpW0QEej7eqFLGQ+WLhJJwPfq06kJaWVgXYEyxsh/H9/nx+zXqVX6oOW9jEXAz48hv3WhyPgZVEn3N5WKpe9Ur7SIW+SCu01h5gywlCPwaUqfKBfDDyCWedddYmfsr8hryrJFdbZrbcqNJtGlrEwfuYjT5qVZsFQHo6cuTItxsaGiQAyVJWcD9uN9cTqCPYbt6yZUvMr5ty3mRmZv6etgs0TTsRVhL9WElfb6ysrIzprcfYmG4UuF1m2XdPSEh4nXbGwHa0HRDu4xB/GaOoQZArsfy8yUqbg78U2I7eqq6uvkq+S9kZxULX5gGQTvOtpUddXV0JAF8p5TC8B/2LbBclfEXdST4ikq+aHLJTAf46Kg6GbYk+raypqclpC/ClI7r8aw+WGZmYmLiItn8DO6UKgHwXkP7Jg2kn6R5uWDV80jjEypLH0/Ec5oPQDcXhCPhSeBjslBZxLb4df41OK0Rr124BCHSch9p4QF1CuQ/cXvQVwZzOdieHcpv2oU3eAXYjYtCrmcXnEoQ37exc1L3C9jacfrQ5+DKmdl8B0okAsxrks8X9lFNht2k7Qb/LrReu0863+woI7iizcFVKSkoGssnwu7Ab9AHAT6Kd1PYGXwany7+Oynwg88eobxXs8a/ExcUVA/qOGPmMiZsuMfHS9k7W0ORpcH/4OFjGcYi0O2wiXrNpJmEHEUjHO0hXnHcDQK9UWcdwxajcuyKLc8Wr59QxAl4AHEPljqEXAHdwdezVC4BjqNwx9ALgDq6Ovf4ob0FWo+N21KHfNap+eytAhUobyrwAtCHYXlMeAh4CHgIeAh4CHgIeAh4CHgIeAh4CHgIeAh4CHgIeAj9tBP4H0Y4F4eWbBpQAAAAASUVORK5CYII="
                case 'Roedor':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACylBMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVlVVVVdXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhdXV1aWlpXV1dcXFxaWlpXV1deXl5cXFxZWVldXV1bW1tZWVldXV1cXFxaWlpYWFhcXFxdXV1bW1taWlpdXV1bW1tZWVlcXFxZWVlcXFxaWlpZWVlcXFxaWlpbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpaWlpcXFxbW1taWlpbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tcXFxbW1tcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpbW1tbW1tcXFxbW1taWlpbW1taWlpcXFxaWlpbW1tbW1taWlpZWVlbW1tbW1tcXFxbW1tbW1tcXFxaWlpcXFxbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxaWlpcXFxbW1taWlpbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tcXFxaWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1v18ByRAAAA7XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYmJygpKissLzAxMjQ1Njc4OTo8PT4/QEFDREVGR0hJSktMTk9QUVJTVFVWV1hZWltdXl9gYmNkZWZnaGlqa2xtb3Fyc3R1dnd4eXp7fH5/gIKDhIWGhoeIiYqLjY6P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"
                case 'Equino':
                    return "data:image/png;base64,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"
                default:
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC61BMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVVOTk5iYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVlVVVVdXV1ZWVlcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhdXV1aWlpXV1dcXFxaWlpeXl5cXFxZWVldXV1bW1tZWVldXV1bW1tZWVlcXFxaWlpYWFhaWlpdXV1bW1taWlpdXV1bW1tZWVlcXFxbW1tZWVlcXFxaWlpZWVlcXFxaWlpeXl5dXV1aWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tZWVlaWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpcXFxaWlpbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxaWlpcXFxcXFxbW1taWlpbW1tbW1tbW1taWlpaWlpcXFxbW1taWlpcXFxbW1tbW1tbW1taWlpbW1tbW1tbW1tcXFxbW1taWlpcXFxbW1tbW1tdXV1aWlpbW1tbW1tcXFxbW1tcXFxbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1tbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tcXFxbW1tbW1tbW1tbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tcXFxaWlpbW1tbW1sm9riZAAAA+HRSTlMAAQIDBAUGBwgJCgsMDQ0ODxAREhMUFRYXGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTM0NTY3ODk6Ozw9Pj9AQUFCREVGR0hJSktMTU9QUVJTVFVWV1hZWltcXV5fYGFiY2Rl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"
            }
        },
        nombre(name) {
            if(name.length>9){
                return "max-9 name"
            }
            else{
                return "min-9 name"
            }
        },
        tamanio(nombre) {
            if(nombre.length < 18) {
                return nombre
            }
            else{
                datos = nombre.split(" ");
                // console.log(datos);
                return `${datos[0]} ${datos[1]}`
            }
        },
        completo(e) {
            if(e >= 18){
                return 'mirar'
            }
            
        },
        adicion(nombre) {
            if(nombre.length>18){
                let aux = '';
                for (var i = 2; i < datos.length; i++) {
                    aux = aux + ' ' + datos[i];
                }
                return aux
                
            }
        }
    },
    mounted:function(){
        // this.pagina = this.$route.params.idPage;
        //console.log("Page actual ",this.pagina);
        //axios.get("http://localhost:8080/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
        axios.get("https://unpetlife.herokuapp.com/api/pet/consulta?page="+(0)+"&size="+this.size).then( data =>{
            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
            // console.log(this.Listamascota);
            // console.log("total_pages:",data.data.totalPages);
        })
        // console.log(mascota.id);
    }
}

</script>
<style>

    .info_cuida_mascota{
        background-color: rgb(54, 54, 54);
        margin-bottom: -10px;
        height: 300px;
    }

    .info_cuida_mascota .contenido{
        color:white;
    }
</style>