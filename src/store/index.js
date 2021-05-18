import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
	state: {
		statusMessage: "",
		token: localStorage.getItem("token") || "",
		user: {},
		error: false,
		errorRecoverPassword: false,
		successRecoverPassword: false,
	},
	mutations: {
		login_request(state) {
			state.statusMessage = "performing login";
		},
		login_success(state, token, email) {
			state.token = token;
			state.user = email;
			state.statusMessage = "success";
			state.error = false;
			
		},
		not_registered_user(state) {
			state.statusMessage =
				"El correo ingresado no se encuentra registrado";
            state.error = true;
		},
		credentials_error(state) {
			state.statusMessage = "La Contraseña ingresada es errónea";
			state.error = true;
		},
		non_activated(state) {
			state.statusMessage =
				"El usuario no está activado, actívalo desde tu correo electrónico";
            state.error = true;
		},
		default_error(state, error) {
			state.statusMessage = error;
			state.error = true;
		},
		logout(state) {
			state.status = "";
			state.token = "";
		},
		email_sent_recover(state){
			state.successRecoverPassword = true;
			state.errorRecoverPassword = false;
		},
		error_sent_recover(state){
			state.errorRecoverPassword = true;
			state.successRecoverPassword = false;
		},
		goback_recover(state){
			state.successRecoverPassword = false;
			state.errorRecoverPassword = false;
		},
	},
	actions: {
		login({ commit }, json) {
            console.log(json)
			return new Promise((resolve, reject) => {
				commit("login_request");
				axios({
					url: "https://unpetlife.herokuapp.com/api/auth/login",
					//url: "http://localhost:8080/api/auth/login",
					data: json,
					method: "POST",
				})
				.then((response) => {
					const token = response.data.token;
					const email = response.data.email;
					localStorage.setItem("token", token);
					axios.defaults.headers.common["Authorization"] = 'Bearer ' +token;
					commit("login_success", token, email);
                    console.log("sucess")
					resolve(response);
                    
				})
				.catch((error) => {
					const errorMsg = error.response.data.message;
					switch (errorMsg) {
						case "Usuario no registrado":
							commit("not_registered_user");
							break;
						case "Error: Unauthorized Bad credentials":
							commit("credentials_error");
							break;
						case "Usuario no activado":
							commit("non_activated");
							break;
						default:
							commit("default_error", errorMsg);
							break;
					}
					localStorage.removeItem("token");
					reject(error);
				})
            });
		},
		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit("logout");
				localStorage.removeItem("token");
				delete axios.defaults.headers.common["Authorization"];
				resolve();
			});
		},
		//Recuperar contraseña
		recoverPassword({ commit }, json){
			//console.log(json)
			return new Promise((resolve, reject)=>{
				axios({
					url: "https://unpetlife.herokuapp.com/api/passrecover/sendLink/${this.email}",
					//url: "http://localhost:8080/api/passrecover/sendLink/"+json.username,
					data: json,
					method: "POST",
				})
				.then((response)=>{
					commit("email_sent_recover");
					console.log("Correo enviado");
					resolve(response);
				})
				.catch((error)=>{
					commit("error_sent_recover");
					reject(error);
				})
			})
		},
		goBackRecover({ commit }) {
			return new Promise((resolve, reject) => {
				commit("goback_recover");
				resolve();
			});
		},

	},
	getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.statusMessage,
        errorBoolean: state => state.error,
		recoverStatus: state => state.messageRecover,
		errorSentRecover: state => state.errorRecoverPassword,
		successSentRecover: state => state.successRecoverPassword,
    },
});
