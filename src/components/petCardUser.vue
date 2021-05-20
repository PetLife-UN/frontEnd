<template>
	<div class="col-lg-4 col-md-6 col-sm-12 vista">
		
		<div class="card mb-4 box-shadow" 
			:class="mascotas()">

			<img class="card-img-top imagen_catalogo" v-bind:src="imageRoute" v-bind:alt="idPet" />
			
			<div class="card-body carta_mascota datos_mascota">

				<div class = "col-9 titulo_masc">
					<h2 :class="nombre(petName)">{{tamanio(petName)}}
                        <span :class="completo(petName.length)">
                            {{adicion(petName)}}
                        </span>
                    </h2>
					<p>{{tipo}}  -  {{edad}} años</p>
                    <p> {{raza}} </p>
				</div>

				<div class = "col-3 icono">
                   <img class="imgmascota" :src="imagen(tipo)">
                </div>
            </div>
				<!-- <h3 class="card-title">{{ petName }}</h3> -->
			<div class="cboton">
                <button class="btn btn-lg button_adopta" v-on:click="verInfo(idPet)">Ver mas</button>
            </div>

				<!-- <div class="card-text text-center">
					<router-link :to ="{path: '/Info_mascota/' + idPet}"
						class="btn btn-primary btn-lg"
						role="button"
						>Ver</router-link>
					<a
						href="#"
						class="btn btn-outline-danger btn-lg"
						role="button"
						>Eliminar</a
					>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
var datos = '';
var valor = 1;
export default {
	name: "petCardUser",
	props: ['imageRoute', 'petName', 'petDescription', 'idPet', 'edad', 'tipo', 'raza'],
	methods: {
		verInfo(id){
            this.$router.push("/Info_mascota/"+id)
        },
		goPet() {
			this.$router.push("/Info_mascota/" + this.idPet)
		},
        mascotas() {
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
                    return "/img/dog_96px.10c85eac.png"
                case 'Felino':
                    return "/img/cat_96px.bc3dfd98.png"
                case 'Bovino':
                    return "/img/cow_96px.a3925541.png"
                case 'Pez':
                    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACo1BMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVViYmJbW1tVVVVgYGBaWlpVVVVeXl5ZWVldXV1ZWVlgYGBcXFxYWFheXl5bW1tYWFheXl5aWlpYWFhaWlpXV1dcXFxaWlpeXl5cXFxZWVldXV1bW1tZWVldXV1bW1tZWVlcXFxaWlpaWlpdXV1bW1taWlpdXV1bW1tcXFxbW1tZWVlcXFxaWlpZWVlcXFxaWlpdXV1bW1taWlpbW1tbW1tcXFxbW1tZWVlcXFxaWlpcXFxbW1taWlpcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpbW1taWlpcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpcXFxbW1tbW1tcXFxbW1taWlpbW1tcXFxbW1taWlpcXFxbW1taWlpbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1taWlpcXFxbW1taWlpbW1taWlpbW1tcXFxbW1tcXFxbW1taWlpbW1taWlpbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tbW1tbW1tbW1tbW1tbW1ufK3OqAAAA4HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQWFxgZGhscHR4fICIjJCUmJygpKissLS4vMDM0NTY3ODo7PD0+P0BBQkNERklLTE1OT1BRUlNVVldYWVpbXF1eX2FiY2RlZmdqa2xtbnByc3R1dnd5ent9fn+AgYKDhYaHiImLjI2Oj5CRk5SWl5mam52en6ChoqSlpqeoqaqrrK2ur7Cxs7S1t7i5uru8vb6/wMHCxMXGx8jLzM3O0NHS09TV1tfZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/vvZmE8AAAStSURBVBgZ7cH5X5MFHAfwzzY2iMOaV1gZqWEpEQVmqR2mpAJqh5qlFWpW3uYBnqWmRmoeJB4pZopXIknlgVriykSOmAXKzT5/SnyfjbG55xl7hr/Ua+83QkJCQkL+4xJWXSi3i2slZwsOfrkkMy25N+6htHr6qr+0e/7oPrgXkluo6fedM+PRVTvoX+n6F03oiip2qmLdkwjebQbAcWwkglVCMdNqtfZ4LCHllfT3F63f9/M/9HFqKIKzmeI0vHUflrmpuJmeHLmPIhjDqXgGvqKGL/7RwQ417yAIhqsUu6Audkahg267IqHfXIrmOGgZkF3OdsWx0M1aS7ES2u6bdZMupf2h21oKeyRczEkTF2zLL/q12m63wyV6eT2dbL2gV1wLxXS0MQ1dcqKOHeA26Cc6nQ6HXvsozgCJG6vpDR3Ct9JpmwE6vUThGHeMPuBpMZ1eh06G36gFXhZScSMGOq2iFngx5FGxGp14oNRWfHhHugkuz9NLzfFNH08YMai31WqFt6gSisZY+LeGClsGnEyNbNd4eGaCCZqGOyiWwK9+TXTZaIb4hC5VC3rDv60UFRHwZw3d9lgApLVS0fxpNDoT76AYBz8i7exwKAoDaqi4kYIAfEeRAz8m0dO50cVUFPdBIMZTVBihbQ9FYQm92HohINH1FInQZK6lGBVzlB7qEhGgoxTvQlMyRW04wg+wQyYCtYxiIzTNosgHYMlhu70GBGocxSlo2kwxD+KNP6g4H4OAxVNUQtNJilQowsbn/XKH1f0QOHMTRQ9ouUYRD33MWTZblhniCsVz0FJN0R36ZLHNcoj9FAugpZHCAn3K2KYMYi5F0yhoaKSwQJ+bbFMGMdhB0TAB6v6i6Al9sthmORQHqHAsM0DNNYonoI85q7IyywzFQDudtpig4iTFa1CY0nKLysh10GVYHZ1yoWIzxTyI9FIqqizQZWQdncbA1yyKfADmDWw3FvokX6fiMHwlU9RGIDKfbt9CpwdPU1TAl7mWYnS3E+zQOhg67aIohYrdFIWX6emIAbpkUrEFKibS08WdVMyGHi80ULQ+DRXhlexwJKpHDUXLZAQu6W8qVkFVNt32RwCz6ZRzPwKUXE1FkRmq+jbQyfF5GABjAZ0qPuiGQIyoocIeBw2rqbg6BoqHK+hyZ2eGFZ2Z3EBF8yho6W6vunhi+1gjXJ66RTfH5dzs91KTH7FarVBjyqJT6yQEbgbVWOCr7yk6tU6HDiupxgIfE2/Rqfkt6HGJaiy4S1w+XWpToUc8FXvr6cUCLxFz7tClNAG6LKU4h6j0nIstdLPAQ9i062z3fU/oYrRRLIWIHjJ1xTfHL5Tb7XYL3MKnXGa7pjlG6PMyFQOhpdfCm3S7kgK9tlEUQl3Yq9sb6Fa/KAJ6xdymmAYVxmfXltPDof7QL5WiJhp3MSbNOXKbno4NQTCyKb6GB+OAjGX5ZfRWkmZAUAoo3kS49dHHk0ZMmv/FwfO19FGQakSQzrBTdV8lInh59K+14O1u6Iqp9KPh+EcPoYvCzlBd69kVIyNxD8QV8m41P2yYnhKFe8U0Jc/WyCb7n1eLi/Z99mHGkFgDQkJCQkL+l/4F3DzGTquaNLYAAAAASUVORK5CYII="
                case 'Ave':
                    return "data:image/png;base64,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"
                case 'Roedor':
                    return "/img/hamster_96px.2f03137f.png"
                case 'Equino':
                    return "data:image/png;base64,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"
                default:
                    return "/img/other_96px.b6466e87.png"
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
	}

}

</script>

<style scoped>
.imgCard {
	object-fit: fill;
	max-width: 100%;
	height: 250px;
}
.btn-lg {
	margin-left: 5px;
	margin-right: 5px;
}
</style>