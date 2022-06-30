const lista = [
    { materia: 'Algebra', nombre: 'Carlos', apellido: 'Andrade', edad: 37, aula: 'A5'},
    { materia: 'Matematica', nombre: 'Pepe', apellido: 'Cardenas', edad: 42, aula: 'A3'},
    { materia: 'Programacion', nombre: 'Nicole', apellido: 'Torres', edad: 30, aula: 'S2' },
    { materia: 'COE', nombre: 'Juan', apellido: 'Perez', edad: 37, aula: 'S1' },
    { materia: 'Base de Datos', nombre: 'Andrea', apellido: 'Sanchez', edad: 35, aula: 'S4' },
    { materia: 'IA', nombre: 'Tomas', apellido: 'Alcivar', edad: 33, aula: 'LAB2' }]

const app = Vue.createApp({
    data() {
        return {
            lista,
        }
    },
    methods: {
        agregarEstudiante(){
            this.lista.unshift({ materia: 'Investigacion', nombre: 'Kelly', apellido: 'Rosales', edad: 29, aula: 'LAB1' })
        }

    }
})

app.mount('#myApp')