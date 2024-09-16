//TIPO DE DATOS

//3
let text: string = "Hola, TYPESCRIPT";
let num: number = 123;
let logico: boolean = true;
let fecha: Date = new Date(`8/9/2024`);

const contTipoDatos: HTMLElement | null =
  document.getElementById("tipos_datos");

if (contTipoDatos) {
  contTipoDatos.innerHTML = `
    <h2>Tipo de datos: </h2>
    <h4>3: </h4>
    <p>Texto: ${text}</p>
    <p>Número: ${num}</p> 
    <p>Booleano: ${logico}</p> 
    <p>Fecha: ${fecha}</p>
    `;

  //4
  function cadenaTexto(num: number): String {
    let numConvertido: String = num.toString();
    return numConvertido;
  }

  contTipoDatos.innerHTML += `
        <h4>4: </h4>
        <p>Número convertido a cadena = ${cadenaTexto(456)}
    `;

  //5

  let arrayNum: number[] = [2, 4, 6, 8, 1];
  let arregloSumado: number = 0;
  function sumaArreglo(numArreglo: number[]): number {
    for (let i = 0; i < numArreglo.length; i++) {
      arregloSumado = arregloSumado + numArreglo[i];
    }
    return arregloSumado;
  }
  contTipoDatos.innerHTML += `
        <h4>5: </h4>
        <p>Suma del array = ${sumaArreglo(arrayNum)}
    `;

  //6
  const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemática",
  };

  contTipoDatos.innerHTML += `
    <h4>6: </h4>
    <p>Estudiante: ${estudiante.nombre}</p>
    <p>Edad: ${estudiante.edad} </p>
    <p>Curso: ${estudiante.curso}</p>
  `;

  //7
  type Direccion = {
    calle: string;
    ciudad: string;
    cp: number;
  };

  const direccion1: Direccion = {
    calle: "Roca 4545",
    ciudad: "Mendoza",
    cp: 5500,
  };

  contTipoDatos.innerHTML += `
    <h4>7: </h4>
    <p>Dirección: Calle: ${direccion1.calle}, Ciudad: ${direccion1.ciudad}, CP: ${direccion1.cp}</p>
  `;

  //8

  interface Usuario {
    nombre: string;
    correo: string;
    saludar(): void;
  }

  const usuario1: Usuario = {
    nombre: "Juan",
    correo: "juanlopez@gmail.com",
    saludar() {
      contTipoDatos.innerHTML += `
            <h4>8: </h4>
            <p>Hola, mi nombre es ${this.nombre}</p>
        `;
    },
  };

  usuario1.saludar();
}

//9
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  presentarse(): void {
    if (contTipoDatos) {
      contTipoDatos.innerHTML += `
                <h4>9: </h4>
                <p>Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años</p>
            `;
    }
  }
}

const persona1 = new Persona("Juana", 20);
persona1.presentarse();

//10

class Caja<T> {
  private valor?: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  getValor() {
    return this.valor;
  }
}
const caja1 = new Caja<string>("Caja Secreta");
const caja2 = new Caja<number>(42);

console.log(`Valor de caja1: ${caja1.getValor()}, tipo: ${typeof caja1.getValor()}`);
console.log(`Valor de caja2: ${caja2.getValor()}, tipo: ${typeof caja2.getValor()}`);

if (contTipoDatos) {
  contTipoDatos.innerHTML += `
    <h4>10: </h4>
    <p>Valor de caja1: ${caja1.getValor()}, tipo: ${typeof caja1.getValor()}</p>
    <p>Valor de caja2: ${caja2.getValor()}, tipo: ${typeof caja2.getValor()}</p>
  `;
}

//11: