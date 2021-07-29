<template>
    <div class="container" >
        <div class="row">
            <div class="col-12 col-md-10  offset-sm-1">
                <div id="format" class="mt-5">
                    <form class="form-inline"  v-on:submit.prevent="onSubmit" style=" margin-bottom: 2rem;" >
                        <h2 class=" col-12 text-center mt-3 mb-5 title_solicitud">
                            Formulario de solicitud de Adopción
                        </h2>
                        
                        <br>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="name">Nombre Completo * </label>
                            <div class="col-sm-7">
                                <input type="text" id="name" class="form-control " placeholder="Escriba su nombre completo" v-model="name" required>
                            </div>
                            <span v-if="msg.name"  class=" info" >{{msg.name}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="email">Email * </label>
                            <div class="col-sm-7">
                                <input type="email" id="email" class="form-control " placeholder="Escriba su email" v-model="email" required>
                            </div>
                            <span v-if="msg.email"  class="info" >{{msg.email}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="telNumber">Teléfono Fijo</label>
                            <div class="col-sm-7">
                                <input type="number" id="telNumber" class="form-control " placeholder="Si tiene teléfono fijo, escríbalo" v-model="telNumber">
                            </div>
                            <span v-if="msg.telNumber"  class="info" >{{msg.telNumber}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="movilNumber">Teléfono Móvil * </label>
                            <div class="col-sm-7">
                                <input type="number" id="movilNumber" class="form-control " placeholder="Escriba su número de teléfono celular" v-model="movilNumber" required>
                            </div>
                            <span v-if="msg.movilNumber"  class="info" >{{msg.movilNumber}}</span>
                        </div>



                        <div class="form-group col-12 row">
                            <label for="communication" class="col-sm-4 control-label offset-sm-1 label_info"> Departamento * </label>
                            <div class="col-sm-7 ">
                                <select class="form-select g-0" style = "width:100%" id="department" v-model="department" required>
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option v-for="municipio in municipios" :key="municipio.id" >{{municipio.id}} - {{municipio.departamento}}</option>
                                </select>
                            </div>
                            <span v-if="msg.department"  class="info" >{{msg.department}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label for="communication" class="col-sm-4 control-label offset-sm-1"> Ciudad * </label>
                            <div class="col-sm-7 ">
                                <select class="form-select g-0" style = "width:100%" id="city" v-model="city" required>
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option v-if="ciudades.length == 0" ></option>
                                    <option v-for="ciudad in ciudades" :key="ciudad" >{{ciudad}}</option>
                                </select>
                            </div>
                            <span v-if="msg.city"  class="offset-md-3 info" >{{msg.city}}</span>
                        </div>





                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="department">Departamento * </label>
                            <div class="col-sm-7">
                                <input type="text" id="department" class="form-control " placeholder="Escriba el departamento donde habita" v-model="department" required >
                            </div>
                            <span v-if="msg.department"  class="info" >{{msg.department}}</span>
                        </div>




                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="city">Ciudad * </label>
                            <div class="col-sm-7">
                                <input type="text" id="city" class="form-control " placeholder="Escriba la ciudad donde habita" v-model="city" required>
                            </div>
                            <span v-if="msg.city"  class="info" >{{msg.city}}</span>
                        </div>
                        



                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="address">Dirección * </label>
                            <div class="col-sm-7">
                                <input type="text" id="address" class="form-control " placeholder="Escriba la dirección de residencia, por motivos importantes" v-model="address" required>
                            </div>
                            <span v-if="msg.address"  class=" info" >{{msg.address}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="age">Edad * </label>
                            <div class="col-sm-7">
                                <input type="number" id="age" class="form-control " placeholder="Edad del aplicante" v-model="age" required>
                            </div>
                            <span v-if="msg.age"  class="info" >{{msg.age}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="age">Ocupación </label>
                            <div class="col-sm-7">
                                <input type="text" id="occupation" class="form-control " placeholder="Escriba su ocupación actual" v-model="occupation">
                            </div>
                            <span v-if="msg.occupation"  class="info" >{{msg.occupation}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="familyMembers">Miembros familiares * </label>
                            <div class="col-sm-7">
                                <input type="number" id="familyMembers" class="form-control " placeholder="Cuantos miembros viven en su familia" v-model="familyMembers" required>
                            </div>
                            <span v-if="msg.familyMembers"  class=" info" >{{msg.familyMembers}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="averageAge">Edad promedio</label>
                            <div class="col-sm-7">
                                <input type="number" id="averageAge" class="form-control " placeholder="Promedio de edad de la familia" v-model="averageAge">
                            </div>
                            <span v-if="msg.averageAge"  class="info" >{{msg.averageAge}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="whoAutho">Quien autoriza la adopción * </label>
                            <div class="col-sm-7">
                                <input type="text" id="whoAutho" class="form-control " placeholder="Que miembro de la familia autoriza la adopción" v-model="whoAutho" required>
                            </div>
                            <span v-if="msg.whoAutho"  class="info" >{{msg.whoAutho}}</span>
                        </div>

                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Esta la familia de acuerdo? * </div>
                                <div class="col-sm-7">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="familyAgreement"
                                            id="familyAgreementYes"
                                            v-model="familyAgreement"
                                            value="true"
                                            required
                                        />
                                        Sí
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="familyAgreement"
                                                id="familyAgreementNo"
                                                v-model="familyAgreement"
                                                value="false"
                                            />
                                        No
                                        </label>
                                    </div>
                                </div>   
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="reason"> ¿Por qué desea adoptar? * </label>
                            <div class="col-sm-7">
                                <textarea id="reason" class="form-control " placeholder="Relate en pocas lineas el porque desea adoptar esta mascota" v-model="reason" rows="9" required />
                            </div>
                            <span v-if="msg.reason"  class="info" >{{msg.reason}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="restingPlace"> ¿Donde dormirá la mascota? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="restingPlace" class="form-control " placeholder="Tiene su casa adecuada para la mascota, donde dormira?" v-model="restingPlace" required>
                            </div>
                            <span v-if="msg.restingPlace"  class="info" >{{msg.restingPlace}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="careOption"> ¿Quién lo cuidara? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="careOption" class="form-control " placeholder="¿Quien cuidara la mascota cuando usted no pueda?" v-model="careOption" required>
                            </div>
                            <span v-if="msg.careOption"  class="info" >{{msg.careOption}}</span>
                        </div>
                        <p></p>
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Hay miembros alergicos en la familia?* </div>
                                <div class="col-sm-7">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="allergies"
                                            id="allergiesYes"
                                            v-model="allergies"
                                            value="true"
                                            required
                                        />
                                        Sí
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="allergies"
                                                id="allergiesNo"
                                                v-model="allergies"
                                                value="false"
                                            />
                                        No
                                        </label>
                                    </div>
                                </div>   
                        </div>
                        <p></p>
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Ha tenido mascotas?  </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="animalExperience"
                                            id="animalExperienceYes"
                                            v-model="animalExperience"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                        </div>  
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceType"> ¿Qué tipos de mascota? </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceType" class="form-control " placeholder="Escriba qué tipos de mascota ha tenido" v-model="experienceType">
                            </div>
                            <span v-if="msg.experienceType"  class="info" >{{msg.experienceType}}</span>
                        </div> 
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceLife"> ¿Cuánto tiempo? </label>
                            <div class="col-sm-7">
                                <input type="number" id="experienceLife" class="form-control " placeholder="Durante cuántos años tuvo esa mascota" v-model="experienceLife">
                            </div>
                            <span v-if="msg.experienceLife"  class="info" >{{msg.experienceLife}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceNow"> Estado actual de mascota </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceNow" class="form-control " placeholder="Describa el estado actual de esa(s) mascota(s)" v-model="experienceNow">
                            </div>
                            <span v-if="msg.experienceNow"  class="info" >{{msg.experienceNow}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceReason"> ¿Por que? </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceReason" class="form-control " placeholder="Causa del actual estado de las mascotas" v-model="experienceReason">
                            </div>
                            <span v-if="msg.experienceReason"  class="info" >{{msg.experienceReason}}</span>
                        </div> 
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Está dispuesto a pasar un periodo de ajuste en el que la mascota aprenda a ir al baño, se adapte a los miembros de la familia y la nueva casa? </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="adjustmentPeriod"
                                            id="adjustmentPeriodYes"
                                            v-model="adjustmentPeriod"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                        </div>
                        <div class="form-group col-12 row" v-if="adjustmentPeriod">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="adjustmentPeriodTime"> ¿Cuánto tiempo? </label>
                            <div class="col-sm-7">
                                <input type="text" id="adjustmentPeriodTime" class="form-control " placeholder="Cuanto tiempo estaria dispuesto" v-model="adjustmentPeriodTime">
                            </div>
                            <span v-if="msg.adjustmentPeriodTime"  class="info" >{{msg.adjustmentPeriodTime}}</span>
                        </div> 
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Está dispuesto a que se realice seguimento para verificar el estado del animal? </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="followingAgreement"
                                            id="followingAgreementYes"
                                            v-model="followingAgreement"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                        </div> 


                        <div class="form-group row">
                            <label for="communication" class="col-sm-4 control-label offset-sm-1">
                                Por cual medio de comunicación prefiere ser contactado * </label>
                            <div class="col-sm-7">
                                <select class="form-select" id="communication" v-model="communication" required>
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option value="Telefono Fijo">Teléfono Fijo</option>
                                    <option value="Telefono celular">Telefono Celular</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                        </div>



                        <div class="form-group row">
                            <button class="col-sm-4 offset-sm-1 btn btn-success" type="submit" :disabled="isDisable" > Enviar Formulario </button>
                            <button class="col-sm-4 offset-sm-2 btn btn-danger" type="button" @click="cancelar" > Cancelar, ir atras </button>


                            <div class="datos botones">
		
                                <button 
                                    class="btn btn-primary publicar" 
                                    @click="publicar" 
                                    type="button" 
                                    :disabled="isDisable">
                                    Publicar
                                </button>

                                <button 
                                    type="button" 
                                    class="btn btn-danger cancelar" 
                                    @click="cancelar">
                                    Cancelar
                                </button>
                            </div>
                            
                        </div>      


                        <div class="datos botones">
		
                            <button 
                                class="btn btn-primary publicar" 
                                @click="publicar" 
                                type="button" 
                                :disabled="isDisable">
                                Publicar
                            </button>

                            <button 
                                type="button" 
                                class="btn btn-danger cancelar" 
                                @click="cancelar">
                                Cancelar
                            </button>
                        </div>


                    </form>
                    <div class="container" v-if="alerta">
                        <div class="alerta">
                            <h3>Parece que hay un error con el servidor, intente mas tarde</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
import municipios from '@/assets/json/municipios.json'

export default {
    name: "applicationForm",
    data(){
        return{
            name: "",
            email: "",
            telNumber: "",
            movilNumber: "",
            city: "",
            department: "",
            address: "",
            age: "",
            occupation: "",
            familyMembers: "",
            averageAge: "",
            whoAutho: "",
            familyAgreement: null,
            reason: "",
            restingPlace: "",
            careOption:"",
            allergies:null,
            animalExperience: false,
            experienceType: "",
            experienceLife:"",
            experienceNow:"",
            experienceReason: "",
            adjustmentPeriod :false,
            adjustmentPeriodTime: "",
            followingAgreement: false,
            communication: "",
            msg: [],
            isDisable: false,
            alerta: false,
            municipios:[],
            ciudades:[],

        }
    },
    watch:{
        name(value){
            this.name = value;
            this.nameVal(value);
            this.allValidation();
        },
        email(value){
            this.email = value;
            this.emailVal(value);
            this.allValidation();
        },
        telNumber(value){
            this.telNumber = value;
            this.telNumberVal(value);
            this.allValidation();
        },
        movilNumber(value){
            this.movilNumber = value;
            this.movilNumberVal(value);
            this.allValidation();
        },
        city(value){
            this.city = value;
            this.cityVal(value);
            this.allValidation();
        },
        department(value){
            var modValue = value.split("-");
            var index = parseInt(modValue[0]);
            this.ciudades = this.municipios[index].ciudades;
            this.department = value;
            this.departmentVal(value);
            this.allValidation();
        },
        address(value){
            this.address = value;
            this.addressVal(value);
            this.allValidation();
        },
        age(value){
            this.age = value;
            this.ageVal(value);
            this.allValidation();
        },
        occupation(value){
            this.occupation = value;
            this.occupationVal(value);
            this.allValidation();
        },
        familyMembers(value){
            this.familyMembers = value;
            this.familyMembersVal(value);
            this.allValidation();
        },
        averageAge(value){
            this.averageAge = value;
            this.averageAgeVal(value);
            this.allValidation();
        },
        whoAutho(value){
            this.whoAutho = value;
            this.whoAuthoVal(value);
            this.allValidation();
        },
        reason(value){
            this.reason = value;
            this.reasonVal(value);
            this.allValidation();
        },
        restingPlace(value){
            this.restingPlace = value;
            this.restingPlaceVal(value);
            this.allValidation();
        },
        careOption(value){
            this.careOption = value;
            this.careOptionVal(value);
            this.allValidation();
        },
        experienceType(value){
            this.experienceType = value;
            this.experienceTypeVal(value);
            this.allValidation();
        },
        experienceLife(value){
            this.experienceLife = value;
            this.experienceLifeVal(value);
            this.allValidation();
        },
        experienceNow(value){
            this.experienceNow = value;
            this.experienceNowVal(value);
            this.allValidation();
        },
        experienceReason(value){
            this.experienceReason = value;
            this.experienceReasonVal(value);
            this.allValidation();
        },
        adjustmentPeriodTime(value){
            this.adjustmentPeriodTime = value;
            this.adjustmentPeriodTimeVal(value);
            this.allValidation();
        },
    },
    props:{
        idPet:{
            Type: Number,
            required: true
        }
    },
    methods:{
        sendForm(){
            if(!(this.animalExperience)){
                this.experienceType = "";
                this.experienceLife = "";
                this.experienceNow = "";
                this.experienceReason = "";
            }
            if(!(this.adjustmentPeriod)){
                this.adjustmentPeriodTime= "";
            }
            
            var date = new Date().toISOString("en-US", {timeZone: "America/Bogota"})
            let json = {
                "name": this.name,
                "email": this.email,
                "telNumber": this.telNumber,
                "movilNumber": this.movilNumber,
                "city": this.city,
                "department": this.department,
                "address": this.address,
                "age": this.age,
                "occupation": this.occupation,
                "familyMembers" : this.familyMembers,
                "averageAge": this.averageAge,
                "whoAutho": this.whoAutho,
                "familyAgreement": this.familyAgreement,
                "reason": this.reason,
                "restingPlace" : this.restingPlace,
                "careOption": this.careOption,
                "allergies": this.allergies,
                "animalExperience" : this.animalExperience,
                "experienceType" : this.experienceType,
                "experienceLife": this.experienceLife,
                "experienceNow":this.experienceNow,
                "experienceReason": this.experienceReason,
                "adjustmentPeriod" :this.adjustmentPeriod,
                "adjustmentPeriodTime": this.adjustmentPeriodTime,
                "followingAgreement": this.followingAgreement,
                "communication": this.communication,
                "date":date,
                "pet_id": this.idPet
            }
            console.log(json)

            /* SERVICE UPDATE*/
            //axios.post("http://localhost:8080/api/apply/form/"+this.idPet, json,)
            //axios.post("https://unpetlife.herokuapp.com/api/apply/form/"+this.idPet, json,)
            /*axios({
					//url: "http://localhost:8080/api/apply/form/"+this.idPet,
					url: "https://unpetlife.herokuapp.com/api/apply/form/"+this.idPet,
					data: json,
					method: "POST",
				})
            .then((data) => {
                if (data.status == 200) {
                    console.log("El registro fue correcto");
                    alert("el registro fue exitoso, se le enviara un mensaje a su correo")
                    this.$router.push('/adopta/1');
                }
            }).catch((error) => {
                var errormes =  "¡Parece que hubo un error de comunicación con el servidor!";
                console.log(errormes);
                this.alerta = true;
            });*/

        },
        onSubmit(){
            this.sendForm();
        },
        cancelar(){
            this.$router.push('/adopta/1');
        },
        nameVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.áéíóú]*$/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) && nonSpace.length > 3 && nonSpace.length < 151) || value.length === 0 ){
                this.msg['name'] = ''
            }else if(nonSpace.length <= 3 || nonSpace.length>=151){
                this.msg['name'] = 'Verifique el nombre ingresado.';
            }else{
                this.msg['name'] = 'Verifique el nombre ingresado, no debe contener números o caracteres especiales.';
            }
        },
        emailVal(value){
            let regex = /\S+@\S+\.(\S+){2,3}/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) &&  nonSpace.length > 5 && nonSpace.length < 51) || nonSpace.length === 0){
                this.msg['email'] = '';
            }else{
                this.msg['email'] = 'Verifique el email ingresado.';
            }
        },
        telNumberVal(value){
            if((value > 0 &&  value.length > 6 && value.length < 10) || value.length === 0 ){
                this.msg['telNumber'] = '';
            }else{
                this.msg['telNumber'] = 'Verifique el número de teléfono.';
            }
        },
        movilNumberVal(value){
            if(( value > 0 &&  value.length > 8 && value.length < 11) || value.length === 0){
                this.msg['movilNumber'] = '';
            }else{
                this.msg['movilNumber'] = 'Verifique el número de teléfono móvil.';
            }
        },
        cityVal(value){
            if((value.length > 0)){
                this.msg['city'] = '';
            }else{
                this.msg['city'] = 'Ingrese una ciudad.';
            }
        },
        departmentVal(value){
            if((value.length >0)){
                this.msg['department'] = '';
            }else{
                this.msg['department'] = 'Ingrese un departamento.';
            }
        },
        addressVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 61) || value.length === 0){
                this.msg['address'] = '';
            }else{
                this.msg['address'] = 'Verifique la dirección ingresada.';
            }
        },
        ageVal(value){
            if((value > 14 && value < 120) || value.length === 0 ){
                this.msg['age'] = '';
            }else if (value < 14) {
                this.msg['age'] = 'Debe ser mayor de 14 años para aplicar.';
            }else if(value > 120){
                this.msg['age'] = 'Parece un número un poco alto ¿seguro que está vivo?';
            }else{
                this.msg['age'] = 'Edad no valida.';
            }
        },
        occupationVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 3 && nonSpace.length < 31) || value.length == 0 ){
                this.msg['occupation'] = '';
            }else{
                this.msg['occupation'] = 'Verifique la ocupación ingresada.';
            }
        },
        familyMembersVal(value){
            if(value < 0 ){
                this.msg['familyMembers'] = 'Verifique la cantidad de miembros ingresados.';
            }else{
                this.msg['familyMembers'] = '';
            }
        },
        averageAgeVal(value){
            if((value < 0 || value > 95) || !value.length === 0 ){
                this.msg['averageAge'] = 'Verifique el promedio ingresado.';
            }else{
                this.msg['averageAge'] = '';
            }
        },
        whoAuthoVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.áéíóú]*$/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) && nonSpace.length > 1 && nonSpace.length < 31) || value.length === 0 ){
                this.msg['whoAutho'] = '';
            }else{
                this.msg['whoAutho'] = 'Verifique la información suministrada.';
            }
        },
        reasonVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 10 && nonSpace.length < 601) || value.length === 0 ){
                this.msg['reason'] = '';
            }else{
                this.msg['reason'] = 'Suministrar información es necesario, ingrese una razón más extensa (max 600 caracteres).';
            }
        },
        restingPlaceVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 101) || value.length === 0 ){
                this.msg['restingPlace'] = '';
            }else{
                this.msg['restingPlace'] = 'Es necesario que el animal descanse en algún lado, revise la información.';
            }
        },
        careOptionVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 101 ) || value.length === 0){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Verifique la información ingresada.';
            }
        },
        experienceTypeVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 2 && nonSpace.length < 51) || value.length === 0 ){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Indique qué tipo de mascotas ha tenido (max 50 caracteres).';
            }
        },
        experienceLifeVal(value){
            if((value > -1 && value < 100) || value.length === 0 ){
                this.msg['experienceLife'] = '';
            }else if(value < 0){
                this.msg['careOption'] = 'Un mascota no puede vivir menos de 0 años.';
            }else if(value > 100){
                this.msg['careOption'] = '¿Está seguro que la mascota vivió tanto? Verifique los datos ingresados.';
            }else{
                this.msg['careOption'] = 'Verifique el dato ingresado.';
            }
        },
        experienceNowVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 4 && nonSpace.length < 91) || value.length === 0 ){
                this.msg['experienceNow'] = '';
            }else{
                this.msg['experienceNow'] = 'Verifique el estado ingresado, no puede ser muy extenso.';
            }
        },
        experienceReasonVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 4 && nonSpace.length < 51) || value.length === 0 ){
                this.msg['experienceReason'] = '';
            }else{
                this.msg['experienceReason'] = 'Verifique el motivo del actual estado de la mascota (max 50).';
            }
        },
        adjustmentPeriodTimeVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 4 && nonSpace.length < 50) || value.length === 0 ){
                this.msg['adjustmentPeriodTime'] = '';
            }else{
                this.msg['adjustmentPeriodTime'] = 'Describa cuánto tiempo en dias, años o meses';
            }
        },
        allValidation(){
            let res = true;
            for(var mens in this.msg){
                if(Object.prototype.hasOwnProperty.call(this.msg,mens)){
                    if(this.msg[mens] !== ""){
                        res = false;
                    }
                }
            }
            this.isDisable = !res;
        }  
    },
    mounted:function(){
        this.municipios = municipios
    },
}
</script>
<style scoped>
.form-control, .form-select, .btn{
    font-size: 16px;
    color: #686868;
}
label{
    margin-top: 3px;
}
.label_info{
    font-size: 18px;
}
.form-group {
    margin-block: 15px;
    color:black;
    font-weight: 400;
    
}
.form-check-inline{
    margin-right: 40px;
}
.info{
    font-size: 16px;
    font-style: oblique;
    font-weight: 300;
    color: rgb(207, 0, 0);
    text-align: center;
}
.alerta{
    font-size: 19px;
    background-color: red;
    border-block: inherit;
    border-color: black;
    margin: 4rem;
    color: beige;
}
#format{
    display: grid;
    background-color: white;
    max-width: 200rem;
    grid-gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem;
    border: #AEAEAE 5px solid;
    border-radius: 5rem;
    margin-bottom: 5rem;
    -webkit-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
    box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
}
/*Title soliciutd */
.title_solicitud{
    color: #6FABF9;
    font-family: "Merienda", cursive;
    font-weight: 600;
    margin: .5rem 0 0.5rem;
}
</style>