// capturar los nodos (etiquetas html) necesarios para comentar
// const nombrevariable ="valor variable"

const boton = document.querySelector(".boton") // document es todo mi html
const input = document.querySelector(".input")
const comentarios =document.querySelector(".comentarios")
// console.log("boton",boton) ver en consola de nodo

// crear una función que se ejecute cuando haga click al boton
function comentar() {
    // capturar el valor del input = console.log(input.value)
    // agregar un comentario al div con clase comentarios
    comentarios.innerHTML += `<p class="respuestas" >${input.value}</p>`
    input.value = ""
}


