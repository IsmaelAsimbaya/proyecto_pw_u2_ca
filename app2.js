console.log('Objetos y librerias de Vue.js')
console.log(Vue)

const app = Vue.createApp({
    //backticks
    //vue utiliza una representacion declarativa para evaluar/ejecutar
    /*template: `
    <h1>Hola Mundo desde Vue.js</h1>
    <p>Expresion JS</p>
    <p> {{ 1+1 }} </p>
    <h2>Arreglo</h2>
    <p>{{ [1,2,3,4,,5] }} </p>
    <h2>Objeto</h2>
    <p> {{ {nombre: "Ismael", apellido: "Asimbaya"} }} </p>
    <h2>Funcion ternaria</h2>
    <p>{{ true ? 'Activo' : 'Inactivo' }}</p>
    `*/
    data() {
        return {
            mensaje: 'Mensaje desde un atributo DATA',
            mensaje2: 'Prueba M2'
        }
    }
})

app.mount('#myApp')
