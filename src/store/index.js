import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
	state: {
		statusMessage: "",
		token: localStorage.getItem("token") || "",
		user: {},
		error: false
	},
	mutations: {
		login_request(state) {
			state.statusMessage = "performing login";
		},
		login_success(state, token, email) {
			state.token = token;
			state.user = email;
			state.statusMessage = "success";
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
		},
		logout(state) {
			state.status = "";
			state.token = "";
		},
	},
	actions: {
		login({ commit }, jsonData) {
			return new Promise((resolve, reject) => {
				commit("login_request");
				axios({
					url: "https://unpetlife.herokuapp.com/api/auth/login",
					data: jsonData,
					method: "POST",
				})
				.then((response) => {
					const token = response.data.data.token;
					const email = response.data.data.email;
					localStorage.setItem("token", token);
					axios.defaults.headers.common["Authorization"] =
						"Bearer  ${token}";
					commit("login_success", token, email);
					resolve(response);
				})
				.catch((error) => {
					const errorMsg = error.response.data.message;
					switch (errorMsg) {
						case "Usuario no registrado":
							commit("not_registered_user");
							break;
						case "Error: Unauthorized":
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
	},
	getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.statusMessage,
        errorBoolean: state => state.error
    },
});
