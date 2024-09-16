//TIPO DE DATOS
//3
var text = "Hola, TYPESCRIPT";
var num = 123;
var logico = true;
var fecha = new Date("8/9/2024");
var contTipoDatos = document.getElementById("tipos_datos");
if (contTipoDatos) {
    contTipoDatos.innerHTML = "\n    <h2>Tipo de datos: </h2>\n    <h4>3: </h4>\n    <p>Texto: ".concat(text, "</p>\n    <p>N\u00FAmero: ").concat(num, "</p> \n    <p>Booleano: ").concat(logico, "</p> \n    <p>Fecha: ").concat(fecha, "</p>\n    ");
    //4
    function cadenaTexto(num) {
        var numConvertido = num.toString();
        return numConvertido;
    }
    contTipoDatos.innerHTML += "\n        <h4>4: </h4>\n        <p>N\u00FAmero convertido a cadena = ".concat(cadenaTexto(456), "\n    ");
    //5
    var arrayNum = [2, 4, 6, 8, 1];
    var arregloSumado_1 = 0;
    function sumaArreglo(numArreglo) {
        for (var i = 0; i < numArreglo.length; i++) {
            arregloSumado_1 = arregloSumado_1 + numArreglo[i];
        }
        return arregloSumado_1;
    }
    contTipoDatos.innerHTML += "\n        <h4>5: </h4>\n        <p>Suma del array = ".concat(sumaArreglo(arrayNum), "\n    ");
    //6
    var estudiante = {
        nombre: "Juan",
        edad: 20,
        curso: "Matemática",
    };
    contTipoDatos.innerHTML += "\n    <h4>6: </h4>\n    <p>Estudiante: ".concat(estudiante.nombre, "</p>\n    <p>Edad: ").concat(estudiante.edad, " </p>\n    <p>Curso: ").concat(estudiante.curso, "</p>\n  ");
    var direccion1 = {
        calle: "Roca 4545",
        ciudad: "Mendoza",
        cp: 5500,
    };
    contTipoDatos.innerHTML += "\n    <h4>7: </h4>\n    <p>Direcci\u00F3n: Calle: ".concat(direccion1.calle, ", Ciudad: ").concat(direccion1.ciudad, ", CP: ").concat(direccion1.cp, "</p>\n  ");
    var usuario1 = {
        nombre: "Juan",
        correo: "juanlopez@gmail.com",
        saludar: function () {
            contTipoDatos.innerHTML += "\n            <h4>8: </h4>\n            <p>Hola, mi nombre es ".concat(this.nombre, "</p>\n        ");
        },
    };
    usuario1.saludar();
}
//9
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        if (contTipoDatos) {
            contTipoDatos.innerHTML += "\n                <h4>9: </h4>\n                <p>Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os</p>\n            ");
        }
    };
    return Persona;
}());
var persona1 = new Persona("Juana", 20);
persona1.presentarse();
//10
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.valor = valor;
    }
    Caja.prototype.getValor = function () {
        return this.valor;
    };
    return Caja;
}());
var caja1 = new Caja("Caja Secreta");
var caja2 = new Caja(42);
console.log("Valor de caja1: ".concat(caja1.getValor(), ", tipo: ").concat(typeof caja1.getValor()));
console.log("Valor de caja2: ".concat(caja2.getValor(), ", tipo: ").concat(typeof caja2.getValor()));
if (contTipoDatos) {
    contTipoDatos.innerHTML += "\n    <h4>10: </h4>\n    <p>Valor de caja1: ".concat(caja1.getValor(), ", tipo: ").concat(typeof caja1.getValor(), "</p>\n    <p>Valor de caja2: ").concat(caja2.getValor(), ", tipo: ").concat(typeof caja2.getValor(), "</p>\n  ");
}
//11:
