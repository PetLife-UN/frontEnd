<template>
  <div class="container col-8">
    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-3 control-label">Nombre</label>
        <div class="col-sm-9">
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="name"
            placeholder="Ingrese en nombre la mascota"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="age" class="col-sm-3 control-label">Edad</label>
        <div class="col-sm-9">
          <input
            type="number"
            v-model="age"
            class="form-control"
            id="age"
            placeholder="Ingrese la edad aproximada de la mascota"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="sterile" class="col-sm-3 control-label"
          >La mascota es esteril?</label
        >
        <div class="col-sm-9">
          <select class="form-select" id="sterile" v-model="sterile">
            <option selected hidden>Ingrese el estado de la mascota</option>
            <option value="si">Si</option>
            <option value="unknown">Desconocido</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="type" class="col-sm-3 control-label">Tipo mascota</label>
        <div class="col-sm-9">
          <input
            type="text"
            v-model="type"
            class="form-control"
            id="type"
            placeholder="Que tipo de mascota es"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-3">Sexo</div>
        <div class="col-9">
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="sex"
                id="male"
                v-model="sex"
                value="male"
              />
              Macho
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="sex"
                id="female"
                v-model="sex"
                value="female"
              />
              Hembra
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="type" class="col-sm-3 control-label"
          >Raza de la mascota</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            v-model="breed"
            class="form-control"
            id="breed"
            placeholder="Conoce la raza de la mascota, escribala"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="size" class="col-sm-3 control-label">
          Tamaño del animal</label
        >
        <div class="col-sm-9">
          <select class="form-select" id="size" v-model="size">
            <option selected hidden>Ingrese el tamaño de la mascota</option>
            <option value="xs">Pequeño</option>
            <option value="sm">Mediano-Pequeño</option>
            <option value="ml">Mediano-grande</option>
            <option value="lg">Grande</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-3">Tiene las vacunas al día?</div>
        <div class="col-9">
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="vaccines"
                id="vaccineYes"
                v-model="vaccines"
                value="true"
              />
              Si
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="vaccines"
                id="vaccineNo"
                v-model="vaccines"
                value="false"
              />
              No
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="radio"
                name="vaccines"
                id="vaccineUnknown"
                v-model="vaccines"
                value="false"
              />
              Lo desconoce
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="message" class="col-sm-3 control-label"
          >Mensaje de adopción</label
        >
        <div class="col-sm-9">
          <textarea
            v-model="message"
            class="form-control"
            id="message"
            placeholder="Comportamiento del animal, gustos, es amabel con los niños, se adapta a espacios pequeños..."
            rows="7"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="image" class="col-sm-3 control-label">Fotografia</label>
        <div class="dropbox col-sm-4">
          <input type="file" name:="image" :disabled="isSaving"
          @change="filesChange($event.target.files)" accept="image/*"
          class="input-file" id="file">
          <p v-if="isInitial">
            Arrastre la fotografia de la mascota
            <br />
            O haga click.
          </p>
          <p v-if="isSaving">Imagen subida. <br> Arrastre o click para cambiar. </p>
          <p v-if="isLoading">Subiendo imagen</p>
        </div>
        <div class="col-sm-5">
          <img
            src="https://infocusmfg.com/wp-content/uploads/2015/10/brown-basket-400x400.png"
            id="img"
            alt="Image"
          />
        </div>
      </div>
      <div class="form-group row justify-content-md-center">
        <div class="col-3">
          <button class="btn btn-primary" @click="publicar" type="button" :disabled="isDisable"  >
            Publicar
          </button>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-danger" @click="cancelar">Cancelar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
var url = document.getElementById("url");
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_LOADING = 2;
export default {
  name: "animalRegForm",
  data() {
    return {
      currentStatus: STATUS_INITIAL,
      name: "",
      age: "",
      sterile: "",
      type: "",
      sex: "",
      breed: "",
      size: "",
      vaccines: "",
      message: "",
      url: "",
      active: false,
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isLoading(){
      return this.currentStatus === STATUS_LOADING;
    },
    isDisable(){
      return this.checkData();
    }
  },
  methods: {
    reset() {
      this.currentStatus = STATUS_INITIAL;
    },
    filesChange(fileList) {
      this.currentStatus = STATUS_LOADING;
      const img2 = document.getElementById("img");
      /*
          Por si se maneja a segunda opción

          const file3 =fileList[0];
          var reader = new FileReader();
          reader.onloadend = function () {
          img2.src = reader.result;
           }
           if (file3) {
        reader.readAsDataURL(file3);
          } else {
          img.src = "";
      }*/
      img2.src ="https://gifimage.net/wp-content/uploads/2017/09/blue-loading-gif-transparent-4.gif";
      var formdata = new FormData();
      url = document.getElementById("url");
      formdata.append("image", fileList[0]);

      fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID 396329b896dcfdd",
        },
        body: formdata,
      })
        .then((data) => data.json())
        .then((data) => {
          //url.innerText =  data.data.link;
          this.url = data.data.link;
          img2.src = data.data.link;
          this.currentStatus = STATUS_SAVING;
        });
    },
    publicar() {
      let json = {
        "nombre": this.name,
        "edad": this.age,
        "esteril": this.sterile,
        "tipo": this.type,
        "sexo": this.sex,
        "raza": this.breed,
        "tamano": this.size,
        "vacunada": this.vaccines,
        "descripcion": this.message,
        "link_foto": this.url,
      };
      console.log(json);
      const token = localStorage.token;
      axios
        .post("https://unpetlife.herokuapp.com/api/publish/new-publish", json, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        .then((data) => {
          if (data.status == 200) {
            console.log("correcto");
            this.currentStatus= STATUS_INITIAL;
            this.name = null;
            this.age = null;
            this.sterile = null;
            this.type = null;
            this.sex = null;
            this.breed = null;
            this.size = null;
            this.vaccines = null;
            this.message = null;
            this.url = null; 
            this.$router.push('profile');
          }
        })
        .catch((error) => {
          this.error = true;
          if (error.response.status === 400 || error.response.status === 401 || error.response === 403) {
            this.error_msg = "Credenciales incorrectas";
          } else {
            this.error_msg =
              "¡Parece que hubo un error de comunicación con el servidor!";
          }
        });
    },
    cancelar(){
      this.$router.push('profile');
    },
    checkData(){
        return (this.name === "" || this.age === "" || this.sterile === ""  || this.type === ""  || this.sex === ""  || this.breed === ""  || this.size === ""  || this.vaccines === ""  || this.message === ""  || this.url === "")
    },
    mounted() {
      this.reset();
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-block: 15px;
}
.dropbox {
  outline: 2px dashed grey; 
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 100px; 
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; 
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; 
}

.dropbox p {
  font-size: 0.9em;
  text-align: center;
  padding: 50px 0;
}
</style>