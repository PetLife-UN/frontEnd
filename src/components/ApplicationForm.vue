<template>
    <div class="container" >
        <div class="row">
            <div class="col-12 col-sm-10 col-md-8  offset-sm-1">
                <div id="format" class="mt-5">
                    <form class="border border-dark rounded form-inline"  v-on:submit.prevent="onSubmit" style="background-color: aliceblue; margin-bottom: 2rem;" >
                        <h2 class="col-12 text-center text-danger mt-3 mb-5">Formulario de solicitud de Adopción</h2>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="name">Nombre Completo * </label>
                            <div class="col-sm-7">
                                <input type="text" id="name" class="form-control " placeholder="Escriba su nombre completo" v-model="name" required>
                            </div>
                            <span v-if="msg.name"  class="offset-md-3 info" >{{msg.name}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="email">Email * </label>
                            <div class="col-sm-7">
                                <input type="email" id="email" class="form-control " placeholder="Escriba su email" v-model="email" required>
                            </div>
                            <span v-if="msg.email"  class="offset-md-3 info" >{{msg.email}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="telNumber">Telefono Fijo</label>
                            <div class="col-sm-7">
                                <input type="number" id="telNumber" class="form-control " placeholder="Si tiene telefono fijo, escribalo" v-model="telNumber">
                            </div>
                            <span v-if="msg.telNumber"  class="offset-md-3 info" >{{msg.telNumber}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="movilNumber">Telefono Movil * </label>
                            <div class="col-sm-7">
                                <input type="number" id="movilNumber" class="form-control " placeholder="Escriba su número de telefono celular" v-model="movilNumber" required>
                            </div>
                            <span v-if="msg.movilNumber"  class="offset-md-3 info" >{{msg.movilNumber}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="city">Ciudad * </label>
                            <div class="col-sm-7">
                                <input type="text" id="city" class="form-control " placeholder="Escriba la ciudad donde habita" v-model="city" required>
                            </div>
                            <span v-if="msg.city"  class="offset-md-3 info" >{{msg.city}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="department">Departamento * </label>
                            <div class="col-sm-7">
                                <input type="text" id="department" class="form-control " placeholder="Escriba el departamento donde habita" v-model="department" required>
                            </div>
                            <span v-if="msg.department"  class="offset-md-3 info" >{{msg.department}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="address">Dirección * </label>
                            <div class="col-sm-7">
                                <input type="text" id="address" class="form-control " placeholder="Escriba la dirección de residencia, por motivos importantes" v-model="address" required>
                            </div>
                            <span v-if="msg.address"  class="offset-md-3 info" >{{msg.address}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="age">Edad * </label>
                            <div class="col-sm-7">
                                <input type="number" id="age" class="form-control " placeholder="Edad del aplicante" v-model="age" required>
                            </div>
                            <span v-if="msg.age"  class="offset-md-3 info" >{{msg.age}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="age">Ocupación </label>
                            <div class="col-sm-7">
                                <input type="text" id="occupation" class="form-control " placeholder="Escriba su ocupación actual" v-model="occupation">
                            </div>
                            <span v-if="msg.occupation"  class="offset-md-3 info" >{{msg.occupation}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="familyMembers">Miembors familiares * </label>
                            <div class="col-sm-7">
                                <input type="number" id="familyMembers" class="form-control " placeholder="Cuantos miembros viven en su familia" v-model="familyMembers" required>
                            </div>
                            <span v-if="msg.familyMembers"  class="offset-md-3 info" >{{msg.familyMembers}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="averageAge">Edad promedio</label>
                            <div class="col-sm-7">
                                <input type="number" id="averageAge" class="form-control " placeholder="Promedio de edad de la familia" v-model="averageAge">
                            </div>
                            <span v-if="msg.averageAge"  class="offset-md-3 info" >{{msg.averageAge}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="whoAutho">Quien autoriza la adopción * </label>
                            <div class="col-sm-7">
                                <input type="text" id="whoAutho" class="form-control " placeholder="Que miembro de la familia autoriza la adopción" v-model="whoAutho" required>
                            </div>
                            <span v-if="msg.whoAutho"  class="offset-md-3 info" >{{msg.whoAutho}}</span>
                        </div>
                        <div class="row">
                            <div class="col-4 offset-sm-1"> ¿Esta la familia de acuerdo? * </div>
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
                                        Si
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
                            <label class="control-label col-sm-4 offset-sm-1" for="reason"> ¿Por que desea adoptar? * </label>
                            <div class="col-sm-7">
                                <textarea id="reason" class="form-control " placeholder="Relate en pocas lineas el porque desea adoptar esta mascota" v-model="reason" rows="9" required />
                            </div>
                            <span v-if="msg.reason"  class="offset-md-3 info" >{{msg.reason}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="restingPlace"> ¿Donde dormira la mascota? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="restingPlace" class="form-control " placeholder="Tiene su casa adecuada para la mascota, donde dormira?" v-model="restingPlace" required>
                            </div>
                            <span v-if="msg.restingPlace"  class="offset-md-3 info" >{{msg.restingPlace}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1" for="careOption"> Quien lo cuidara? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="careOption" class="form-control " placeholder="¿Quien cuidara la mascota cuando usted no pueda?" v-model="careOption" required>
                            </div>
                            <span v-if="msg.careOption"  class="offset-md-3 info" >{{msg.careOption}}</span>
                        </div>
                        <div class="row">
                            <div class="col-4 offset-sm-1"> ¿Hay miembros alergicos en la familia? * </div>
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
                                        Si
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
                        <div class="row">
                            <div class="col-4 offset-sm-1"> ¿Ha tenido mascotas?  </div>
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
                                        Si
                                        </label>
                                    </div>
                                </div>   
                        </div>  
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1" for="experienceType"> Que tipo de mascota </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceType" class="form-control " placeholder="Escriba que tipos de mascota ha tenido" v-model="experienceType">
                            </div>
                            <span v-if="msg.experienceType"  class="offset-md-3 info" >{{msg.experienceType}}</span>
                        </div> 
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1" for="experienceLife"> Cuanto tiempo </label>
                            <div class="col-sm-7">
                                <input type="number" id="experienceLife" class="form-control " placeholder="Durante cuantos años tuvo esa mascota" v-model="experienceLife">
                            </div>
                            <span v-if="msg.experienceLife"  class="offset-md-3 info" >{{msg.experienceLife}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1" for="experienceNow"> Estado actual de mascota </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceNow" class="form-control " placeholder="Describa el estado actual de esa(s) mascota(s)" v-model="experienceNow">
                            </div>
                            <span v-if="msg.experienceNow"  class="offset-md-3 info" >{{msg.experienceNow}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1" for="experienceReason"> ¿Por que? </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceReason" class="form-control " placeholder="Causa del actual estado de las mascotas" v-model="experienceReason">
                            </div>
                            <span v-if="msg.experienceReason"  class="offset-md-3 info" >{{msg.experienceReason}}</span>
                        </div> 
                        <div class="row">
                            <div class="col-4 offset-sm-1"> ¿Esta dispuesto a pasar un periodo de ajuste en el que la mascota aprenda a ir al baño, se adapte a los miembros de la familia y la nueva casa? </div>
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
                                        Si
                                        </label>
                                    </div>
                                </div>   
                        </div>
                        <div class="form-group col-12 row" v-if="adjustmentPeriod">
                            <label class="control-label col-sm-4 offset-sm-1" for="adjustmentPeriodTime"> ¿Cuanto tiempo? </label>
                            <div class="col-sm-7">
                                <input type="text" id="adjustmentPeriodTime" class="form-control " placeholder="Cuanto tiempo estaria dispuesto" v-model="adjustmentPeriodTime">
                            </div>
                            <span v-if="msg.adjustmentPeriodTime"  class="offset-md-3 info" >{{msg.adjustmentPeriodTime}}</span>
                        </div> 
                        <div class="row">
                            <div class="col-4 offset-sm-1"> ¿Esta dispuesto a que se realice seguimento para verificar el estado del animal? </div>
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
                                        Si
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
                                    <option value="Telefono Fijo">Telefono Fijo</option>
                                    <option value="Telefono celular">Telefono Celular</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <button class="col-sm-4 offset-sm-1 btn btn-success" type="submit" :disabled="isDisable" > Enviar Formulario </button>
                            <button class="col-sm-4 offset-sm-2 btn btn-danger" type="button" @click="cancelar" > Cancelar, ir atras </button>
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
            alerta: false
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
            //var date = new Date();
            //let fecha = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
            //let hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            //let dateTime = fecha+' '+hora;
            
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
            //axios.post("https://unpetlife.herokuapp.com/api/apply/"+this.idPet, json,)
            axios.post("http://localhost:8080/api/apply/"+this.idPet, json,)
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
            });
        },
        onSubmit(){
            this.sendForm();
        },
        cancelar(){
            this.$router.push('/adopta/1');
        },
        nameVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
            if((regex.test(value) && value.length > 3 && value.length < 151) || value.length === 0 ){
                this.msg['name'] = ''
            }else{
                this.msg['name'] = 'Verifique el nombre ingresado, no debe contener números ni caracteres especiales, ni tildes';
            }
        },
        emailVal(value){
            let regex = /\S+@\S+\.(\S+){2,3}/;
            if((regex.test(value) &&  value.length > 5 && value.length < 51) || value.length === 0){
                this.msg['email'] = '';
            }else{
                this.msg['email'] = 'Verifique el email ingresado';
            }
        },
        telNumberVal(value){
            if((value > 0 &&  value.length > 6 && value.length < 10) || value.length === 0 ){
                this.msg['telNumber'] = '';
            }else{
                this.msg['telNumber'] = 'Verifique el número de telefeno';
            }
        },
        movilNumberVal(value){
            if(( value > 0 &&  value.length > 8 && value.length < 11) || value.length === 0){
                this.msg['movilNumber'] = '';
            }else{
                this.msg['movilNumber'] = 'Verifique el número de telefeno movil';
            }
        },
        cityVal(value){
            if((value.length > 3 && value.length < 31) || value.length === 0){
                this.msg['city'] = '';
            }else{
                this.msg['city'] = 'Verifique el valor de la ciudad ingresada';
            }
        },
        departmentVal(value){
            if((value.length > 4 && value.length < 31) || value.length === 0){
                this.msg['department'] = '';
            }else{
                this.msg['department'] = 'Verifique el valor del departamento ingresado';
            }
        },
        addressVal(value){
            if((value.length > 5 && value.length < 61) || value.length === 0){
                this.msg['address'] = '';
            }else{
                this.msg['address'] = 'Verifique la dirección ingresada';
            }
        },
        ageVal(value){
            if((value > 14 && value < 120) || value.length === 0 ){
                this.msg['age'] = '';
            }else if (value < 14) {
                this.msg['age'] = 'Debe ser mayor de 14 años para aplicar';
            }else if(value > 120){
                this.msg['age'] = 'Esta seguro que esta vivo?';
            }else{
                this.msg['age'] = 'Edad no valida';
            }
        },
        occupationVal(value){
            if((value.length > 4 && value.length < 31) || value.length == 0 ){
                this.msg['occupation'] = '';
            }else{
                this.msg['occupation'] = 'Verifique la ocupación ingresada';
            }
        },
        familyMembersVal(value){
            if(value < 0 ){
                this.msg['familyMembers'] = 'Verifique la cantidad de miembros ingresados';
            }else{
                this.msg['familyMembers'] = '';
            }
        },
        averageAgeVal(value){
            if((value < 0 || value > 90) || !value.length === 0 ){
                this.msg['averageAge'] = 'Verifique el promedio ingresado';
            }else{
                this.msg['averageAge'] = '';
            }
        },
        whoAuthoVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
            if((regex.test(value) && value.length > 1 && value.length < 31) || value.length === 0 ){
                this.msg['whoAutho'] = '';
            }else{
                this.msg['whoAutho'] = 'Verifique la información suministrada';
            }
        },
        reasonVal(value){
            if((value.length > 10 && value.length < 601) || value.length === 0 ){
                this.msg['reason'] = '';
            }else{
                this.msg['reason'] = 'Suministrar información es necesario, y tan extenso(max 300 caracteres)';
            }
        },
        restingPlaceVal(value){
            if((value.length > 5 && value.length < 101) || value.length === 0 ){
                this.msg['restingPlace'] = '';
            }else{
                this.msg['restingPlace'] = 'Es necesario que el animal descanse en algún lado, revise la información';
            }
        },
        careOptionVal(value){
            if((value.length > 5 && value.length < 101 ) || value.length === 0){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Verifique la información ingresada';
            }
        },
        experienceTypeVal(value){
            if((value.length > 2 && value.length < 51) || value.length === 0 ){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Indique que tipo de mascota ha tenido (max 50 caracteres)';
            }
        },
        experienceLifeVal(value){
            if((value > -1 && value < 100) || value.length === 0 ){
                this.msg['experienceLife'] = '';
            }else if(value < 0){
                this.msg['careOption'] = 'Un mascota no puede vivir menos de 0 años';
            }else if(value > 100){
                this.msg['careOption'] = 'Esta usted seguro que la mascota tanto, verifique';
            }else{
                this.msg['careOption'] = 'Verifique la edad ingresada';
            }
        },
        experienceNowVal(value){
            if((value.length > 4 && value.length < 91) || value.length === 0 ){
                this.msg['experienceNow'] = '';
            }else{
                this.msg['experienceNow'] = 'Verifique el estado ingresado, no puede ser muy extenso';
            }
        },
        experienceReasonVal(value){
            if((value.length > 4 && value.length < 51) || value.length === 0 ){
                this.msg['experienceReason'] = '';
            }else{
                this.msg['experienceReason'] = 'Verifique el motivo del actual estado de la mascota (max 50)';
            }
        },
        adjustmentPeriodTimeVal(value){
            if((value.length > 4 && value.length < 50) || value.length === 0 ){
                this.msg['adjustmentPeriodTime'] = '';
            }else{
                this.msg['adjustmentPeriodTime'] = 'Describa cuanto tiempo en dias, años o meses';
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
    }
}
</script>
<style scoped>
.form-control, .form-select, .btn{
    font-size: 14px;
}
label{
    margin-top: 3px;
}
.form-group {
    margin-block: 15px;
}
.form-check-inline{
    margin-right: 40px;
}
.info{
    font-size: 12 px;
    font-family: 'Times New Roman', Times, serif;
    font-style: oblique;
    font-weight: 100;
    color: red;
}
.alerta{
    font-size: 19px;
    background-color: red;
    border-block: inherit;
    border-color: black;
    margin: 4rem;
    color: beige;

}
</style>