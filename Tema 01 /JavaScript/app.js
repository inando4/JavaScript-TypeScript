// ==== FUNDAMENTOS DE JAVASCRIPT ====

// ==== VARIABLES ====
// Las tres formas de declarar variables
var nombreAntiguo = "JavaScript"; // Forma tradicional, ámbito de función
let lenguaje = "JavaScript";      // Variable reasignable, ámbito de bloque
const VERSION = 2023;             // Constante, no puede reasignarse

// Ejemplo de ámbito (scope)
function ejemploScope() {
  var x = 10;       // Ámbito de función
  let y = 20;       // Ámbito de bloque
  
  if (true) {
    var x = 30;     // Modifica la x original
    let y = 40;     // Nueva variable y en este bloque
    console.log(x); // 30
    console.log(y); // 40
  }
  
  console.log(x);   // 30 - ¡La variable fue modificada!
  console.log(y);   // 20 - Mantiene su valor original
}

// ==== TIPOS DE DATOS ====
// Primitivos
let edad = 25;                           // Number
let precio = 19.99;                      // Number (decimal)
let nombre = "Elena";                    // String
let activo = true;                       // Boolean
let indefinido;                          // undefined
let vacio = null;                        // null
let identificador = Symbol('id');        // Symbol
let numeroGrande = 9007199254740991n;    // BigInt

// Objetos
let persona = {
  nombre: "Carlos",
  edad: 28,
  esEstudiante: false,
  hobbies: ["música", "deportes", "leer"],
  saludar: function() {
    return `Hola, me llamo ${this.nombre}`;
  }
};

// Arrays
let colores = ["rojo", "verde", "azul", "amarillo"];
let mixto = [1, "dos", true, {tipo: "objeto"}, [5, 6]];

// ==== FUNCIONES ====
// Declaración de función
function sumar(a, b) {
  return a + b;
}

// Expresión de función
const multiplicar = function(a, b) {
  return a * b;
};

// Función flecha (arrow function)
const dividir = (a, b) => {
  if (b === 0) {
    return "No se puede dividir por cero";
  }
  return a / b;
};

// ==== OPERADORES ====
let a = 10;
let b = 5;

// Operadores aritméticos
let suma = a + b;           // 15
let resta = a - b;          // 5
let producto = a * b;       // 50
let division = a / b;       // 2
let modulo = a % b;         // 0
let exponente = a ** b;     // 100000 (10^5)

// Operadores de asignación
let c = 20;
c += 5;                     // c = c + 5 -> 25
c -= 10;                    // c = c - 10 -> 15
c *= 2;                     // c = c * 2 -> 30
c /= 3;                     // c = c / 3 -> 10

// Operadores de comparación
let mayor = a > b;          // true
let menor = a < b;          // false
let igual = a == "10";      // true (compara valor, no tipo)
let estrictamenteIgual = a === "10"; // false (compara valor y tipo)
let diferente = a != b;     // true
let estrictamenteDiferente = a !== "10"; // true

// ==== ESTRUCTURAS DE CONTROL ====
// Condicionales if-else
function evaluarEdad(edad) {
  if (edad < 12) {
    return "Niño";
  } else if (edad < 18) {
    return "Adolescente";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
}
// Operador ternario
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";

// Switch
function obtenerDiaSemana(numero) {
  let dia;
  switch (numero) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Número inválido";
  }
  return dia;
}

// Bucle for
function tablaMultiplicar(numero) {
  console.log(`Tabla del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Bucle while
function cuentaRegresiva(inicio) {
  let contador = inicio;
  while (contador > 0) {
    console.log(contador);
    contador--;
  }
  console.log("¡Despegue!");
}

// Bucle do-while
function pedirNumeroPositivo() {
  let numero;
  do {
    numero = parseInt(prompt("Introduce un número positivo:"));
  } while (numero <= 0);
  return numero;
}

// ==== EJEMPLO PRACTICO ====
function gestionarEstudiantes() {
  // Creamos un array de estudiantes
  const estudiantes = [
    { id: 1, nombre: "Ana", edad: 22, notas: [8, 7, 9] },
    { id: 2, nombre: "Bruno", edad: 19, notas: [6, 5, 7] },
    { id: 3, nombre: "Carmen", edad: 20, notas: [9, 8, 10] },
    { id: 4, nombre: "Daniel", edad: 21, notas: [7, 7, 8] }
  ];

  // Mostrar todos los estudiantes
  console.log("Lista de estudiantes:");
  for (const estudiante of estudiantes) {
    console.log(`- ${estudiante.nombre} (${estudiante.edad} años)`);
  }

  // Filtrar estudiantes mayores de 20 años
  const mayoresDe20 = estudiantes.filter(est => est.edad > 20);
  console.log("\nEstudiantes mayores de 20 años:");
  mayoresDe20.forEach(est => console.log(`- ${est.nombre}`));

  // Calcular promedio de notas por estudiante
  console.log("\nPromedios de notas:");
  for (const estudiante of estudiantes) {
    // Reducimos el array de notas a un solo valor (su suma)
    const sumaNotas = estudiante.notas.reduce(
      (acumulador, nota) => acumulador + nota, 
      0
    );
    
    // Calculamos el promedio
    const promedio = sumaNotas / estudiante.notas.length;
    
    // Evaluamos el resultado con operador ternario
    const estado = promedio >= 7 ? "Aprobado" : "Reprobado";
    
    console.log(`- ${estudiante.nombre}: ${promedio.toFixed(2)} (${estado})`);
  }

  // Buscar un estudiante por ID
  function buscarEstudiante(id) {
    return estudiantes.find(est => est.id === id);
  }

  // Ejemplo de uso con un ID existente y uno que no existe
  console.log("\nBúsqueda de estudiantes:");
  const estudianteEncontrado = buscarEstudiante(3);
  if (estudianteEncontrado) {
    console.log(`Estudiante encontrado: ${estudianteEncontrado.nombre}`);
  } else {
    console.log("Estudiante no encontrado");
  }

  const estudianteNoExiste = buscarEstudiante(10);
  if (estudianteNoExiste) {
    console.log(`Estudiante encontrado: ${estudianteNoExiste.nombre}`);
  } else {
    console.log("Estudiante no encontrado");
  }
}

// Llamada a la función para ejecutar el ejemplo
gestionarEstudiantes();



