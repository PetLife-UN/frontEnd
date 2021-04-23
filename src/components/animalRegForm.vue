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
            v-model="name"
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
                value="yes"
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
                value="no"
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
                value="unknown"
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
          <input type="file" multiple name:="image" :disabled="isSaving"
          @change="filesChange($event.target.name, $event.target.files)"
          accept="image/*"
          class="input-file" id="file">
          <p v-if="isInitial">
            Arrastre la fotografia de la mascota
            <br />
            O haga click para seleccionar la imagen
          </p>
          <p v-if="isSaving">Imagenes subidas {{ fileCount }} archivos...</p>
        </div>
        <div class="col-sm-5">  
          <img src="https://infocusmfg.com/wp-content/uploads/2015/10/brown-basket-400x400.png" id="img" alt="Image" >
          <p id="url" > </p> 
        </div>
      </div>
      <div class="form-group row justify-content-md-center">
        <div class="col-3">
          <button class="btn btn-primary" >Publicar</button>
        </div>
        <div class="col-3">
          <button class="btn btn-danger">Cancelar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
var img = document.getElementById("img");
var url = document.getElementById("url");
var file2 = document.getElementById("file");
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
const BASE_URL = "https://api.imgur.com";
export default {
  name: "animalRegForm",
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      unloadFieldName: "photos",
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      this.currentStatus = STATUS_SAVING;
      this.upload(formData)
        .then((x) => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
          const img2 = document.getElementById("img");
          const file3 =fileList[0];
          var reader = new FileReader();
        
          reader.onloadend = function () {
          img2.src = reader.result;
           }
           if (file3) {
        reader.readAsDataURL(file3);
          } else {
          img.src = "";
      }
      
          var formdata  = new FormData();
          url = document.getElementById("url");
          formdata.append("image", fileList[0]);

          fetch("https://api.imgur.com/3/image", {
          method:"POST",
          headers:{
            Authorization: "Client-ID 396329b896dcfdd"
          },
          body:formdata
          }).then(data => data.json()).then(data => {
            url.innerText =  data.data.link
          })
        
    },
    upload(formData) {  
        const img = document.getElementById("img");
        const url = document.getElementById("url");
        const file2 = document.getElementById("file");
        file2.addEventListener("change", ev => {
          const formdata = new FormData();
          formdata.append("image", ev.target.files[0])
          fetch("https://api.imgur.com/3/image/", {
          method:"post",
          headers:{
            Authorization: "Client-ID 1c5017417c5c518"
          },
          body:formdata}).then(data => data.json()).then(data => console.log(data))
        })
  },
  mounted() {
    this.reset();
  },
}};
</script>

<style scoped>
.form-group {
  margin-block: 15px;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>