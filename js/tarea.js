const lista = [

]

const app = Vue.createApp({
    data() {
        return {
            lista,
            tarea: ''
        }
    },
    methods: {
        agregarTarea() {
            this.lista.push({ tarea: this.tarea })
            this.tarea = ''
        }
    }
})

app.mount('#myApp')