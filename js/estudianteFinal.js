const lista = [
    { nombre: 'Ismael', apellido: 'Asimbaya', edad: 22 },
    { nombre: 'Pepe', apellido: 'Asimbaya', edad: 42 },
    { nombre: 'Nicole', apellido: 'Torres', edad: 19 },
    { nombre: 'Carlos', apellido: 'Peres', edad: 22 },
    { nombre: 'Andrea', apellido: 'Sanchez', edad: 25 },
    { nombre: 'Tomas', apellido: 'Alsivar', edad: 25 }]

const app = Vue.createApp({
    //OPtions API
    data() {
        return {
            //Propiedades reactivas
            lista,
            mensaje: '',
            nombre: '',
            apellido: '',
            edad: ''
        }
    },
    methods: {
        agregarEstudianteI() {
            this.lista.unshift({ nombre: this.mensaje, apellido: 'Inicio', edad: 18 })
            this.mensaje = ''
        },
        agregarEstudianteF() {
            this.lista.push({ nombre: this.mensaje, apellido: 'Fin', edad: 18 })
            this.mensaje = ''
        },
        agregarEstudiante(type) {
            if (type === 'I') {
                this.lista.unshift({ nombre: this.mensaje, apellido: 'Inicio', edad: 18 })
            } else {
                this.lista.push({ nombre: this.mensaje, apellido: 'Fin', edad: 18 })
            }
            this.mensaje = ''
        },
        eventoKey(event) {
            if (event.charCode === 13) {
                console.log('Se dispara el evento')
                console.log(event)
                this.lista.unshift({ nombre: this.mensaje, apellido: 'Cardenas', edad: 18 })
            }
        },
        //evento desestructurado
        eventoKeyD({ charCode, key }) {
            //console.log(charCode)
            //console.log(key)
            console.log('Entro al Evento')
            if (charCode === 13) {
                console.log('Se dispara el evento')
                this.lista.unshift({ nombre: this.mensaje, apellido: 'Cardenas', edad: 18 })
            }
        },
        //modificadores de eventos
        eventoFinal() {
            console.log('Entro al Evento')
            this.lista.unshift({ nombre: this.mensaje, apellido: 'Cardenas', edad: 18 })
        },
        //Taller
        agregarEstudianteF(type) {
            if (type === 'I') {
                this.lista.unshift({ nombre: this.nombre, apellido: this.apellido, edad: this.edad })
            } else {
                this.lista.push({ nombre: this.nombre, apellido: this.apellido, edad: this.edad })
            }
            this.nombre = ''
            this.apellido = ''
            this.edad = ''
        }
    }
})

app.mount('#myApp')