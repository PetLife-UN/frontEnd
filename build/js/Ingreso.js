// Ingreso de los datos
const ingreso = Vue.createApp({
	data() {
		return {
			Email: 'Usuario',
			Password: 'Contraseña',
			boton: 'Ingresar'
		}
	},
	methods: {
		IngresaUsuario() {
			console.log('ingresar');
		}
	}
});

ingreso.mount('.ingresar');
