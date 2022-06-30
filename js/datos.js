const app = Vue.createApp({
    //OPtions API
    data() {
        return {
            //Propiedades reactivas
            mensaje: 'Hola Mundo',
            mensaje1: 'Mi primer mensaje'
        }
    },
    methods: {
        cambiarMensaje(event) {
            console.log(event)
            this.mensaje = 'texto cambiado'
        },
        cambiarMensajeMayuscula(){
            this.mensaje1 = this.mensaje1.toUpperCase()
        },
        cambiarTodo(){
            this.cambiarMensaje()
            this.cambiarMensajeMayuscula()
        }

    }
})

app.mount('#myApp')