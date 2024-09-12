/*
//1)INTRODUCCION

//EJERCICIO 2

let a = 5
let b = 10 
let c

c = a + b
console.log("La suma de a y b es: "+c);

//EJERCICIO3

let nombre = prompt("Ingrese su nombre: ")

console.log(`Hola, ${nombre}!`);

//2)OPERADORES LÓGICOS Y CONDICIONALES

//EJERCICIO 1
let d = 12
let e = 14 
let f = 11

if(d > e && d > f){
    console.log("El mayor de los tres números es: "+d)
}else if(e > d && e >f){
    console.log("El mayor de los tres números es: "+e)
}else{
    console.log("El mayor de los tres números es: "+f)
}

//EJERCICIO 2
let numIngresado = prompt("Ingresa un número y te dire si es par o impar: ")

if(numIngresado % 2 == 0){
    console.log("El número ingresado es par")
}else{
    console.log("El número ingresado es impar")
}

//3)Operadores de asignacion y bucles

//EJERCICIO1 

let num_2= 10

while(num_2 > 0){
    console.log(num_2)
    num_2 = num_2 - 1
}

//EJERCICIO 2
let num_3
do {
    num_3 = prompt("Ingrese un número mayor que 100: ")
} while (num_3 < 100);

console.log(num_3)

//4)FUNCIONES

//EJERCICIO 1 

function esPar(num){
    if(num % 2 == 0){
        console.log(`El número ${num} es par: `+ true)
    }else{
        console.log(`El número ${num} es par: `+ false)
    }
}

esPar(8)
esPar(7)

//EJERCICIO 2 

function convertirCelsiusAFahrenheit(grados_c){
    let grados_f = grados_c *1.8+ 32 
    console.log(`${grados_c}°C equivalen a ${grados_f}°C`)
}

convertirCelsiusAFahrenheit(12)

//5)OBJETOS

//EJERCICIO 1 

let persona = {
    nombre: "Maria",
    edad: 19,
    ciudad: "Londres",
    
    actualizarCiudad : function(nuevaCiudad){
        this.ciudad = nuevaCiudad
    }
}
persona.actualizarCiudad("Barcelona")

console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`)

//EJERCICIO 2

let libro = {
    titulo: "Titán del gol y de la vida",
    autor: "Martin Palermo",
    ano: 2011,
    antiguedadLibro: function(){
        let antiguedad = 2024 - (this.ano)
        
        if(antiguedad > 10 ){
            return true
        }else{
            return false
        }
    }
}

console.log(`El libro ${libro.titulo} es antiguo: ${libro.antiguedadLibro()}`)


//6)ARRAYS

//EJERCICIO 1 

let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosNuevos = []

for(let i = 0 ; i <= 9; i++){
    numerosNuevos.push(numeros[i]*2)
}

console.log(`Números originales : ${numeros.join(", ")}`)
console.log(`Números nuevos : ${numerosNuevos.join(", ")}`)


*/ 
//EJERCICIO 2
// let pares = []

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         pares.push(i)
//     } else {
//         console.log("HOAL");

//     }
// }

// console.log(pares.join(", "))


//7)DOM

//EJERCICIO 1
const buttonDiv1 = document.getElementById("button__div1")
const buttonDiv2 = document.getElementById("button__div2")

function cambiarColor() {
    const parrafos = document.querySelectorAll(".parrafo__div1");

    
    parrafos.forEach(parrafo => {
        if (parrafo.style.color === "blue") {
            parrafo.style.color = ""; 
        } else {
            parrafo.style.color = "blue";
        }
    });
}
function cambiarColor_Div2() {
    const parrafos = document.querySelectorAll(".parrafo__div2");

    
    parrafos.forEach(parrafo => {
        if (parrafo.style.color === "blue") {
            parrafo.style.color = ""; 
        } else {
            parrafo.style.color = "blue";
        }
    });
}

buttonDiv1.addEventListener("click", cambiarColor)
buttonDiv2.addEventListener("click", cambiarColor_Div2)

//EJERCICIO 2

const buttonAlert = document.getElementById("button__alerta")
const input__1 = document.getElementById("input__1")

console.log(input__1.value);

buttonAlert.addEventListener("click", ()=>{
    alert(`Has ingresado: ${input__1.value}`)
})

//8)EVENTOS DOM

//EJERCICIO 1 

const elementosLista = document.querySelectorAll(".elementos_lista");

function mostrarLi(event) {
    console.log(event.target.textContent); 
}

elementosLista.forEach(li => {
    li.addEventListener("click", mostrarLi);
});

//EJERCICIO 2

const buttonDeshabilitar = document.getElementById("button__deshabilitar")
const buttonHabilitar = document.getElementById("button__habilitar")
const campo = document.getElementById("input__texto__botones")

buttonHabilitar.addEventListener("click", ()=>{
    campo.style.display = "block"
})
buttonDeshabilitar.addEventListener("click", ()=>{
     campo.style.display = "none"
})