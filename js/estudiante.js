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
            //lst: lista
            lista,
        }
    },
    methods: {
        agregarEstudiante(){
            this.lista.unshift({nombre: 'Kelly',apellido: 'Cardenas',edad: 18})
        }

    }
})

app.mount('#myApp')