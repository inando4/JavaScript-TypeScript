// FUNDAMENTOS DE TYPESCRIPT
// -------------- 1. VARIABLES --------------
// En TypeScript, las variables se declaran con let, const o var (menos recomendado)
var nombre = "María";
var edad = 30;
var estaActivo = true; // Mejor usar let en lugar de var
// TypeScript infiere el tipo si no lo declaras explícitamente
var apellido = "González"; // TypeScript infiere que es string
// -------------- 2. TIPOS DE DATOS BÁSICOS --------------
// String (cadenas de texto)
var texto = "Hola mundo";
var comillaSimple = 'También válido';
var plantilla = "Hola, ".concat(nombre);
// Number (números)
var entero = 42;
var decimal = 3.14;
var hexadecimal = 0xf00d;
var binario = 10;
// Boolean (booleanos)
var verdadero = true;
var falso = false;
// Array (arreglos)
var numeros = [1, 2, 3, 4, 5];
var nombres = ["Ana", "Juan", "Pedro"];
// Tuple (tuplas - arreglos con elementos de tipos diferentes y orden fijo)
var persona = ["Carlos", 25];
// Enum (enumerados)
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var hoy = DiaSemana.Miercoles;
// Any (cualquier tipo - evitar usar cuando sea posible)
var cualquierValor = 4;
cualquierValor = "ahora soy string";
// Void (ausencia de valor, usado en funciones que no retornan valor)
function saludar() {
    console.log("Hola");
}
// Null y Undefined
var nulo = null;
var indefinido = undefined;
// Never (funciones que nunca retornan o siempre lanzan excepciones)
function error(mensaje) {
    throw new Error(mensaje);
}
// Object (objetos no primitivos)
var usuario = { nombre: "Ana", edad: 28 };
// Type Assertions (aserciones de tipo)
var textoDesconocido = "esto es un string";
var longitudTexto = textoDesconocido.length;
var otraForma = textoDesconocido.length; // Sintaxis alternativa
// Usar la interfaz
var empleado = {
    nombre: "Roberto",
    edad: 35,
    saludar: function () {
        console.log("Hola, soy ".concat(this.nombre));
    }
};
// -------------- 4. FUNCIONES --------------
// Función con parámetros y retorno tipados
function sumar(a, b) {
    return a + b;
}
// Función con parámetros opcionales
function mostrarInfo(nombre, edad) {
    if (edad) {
        return "".concat(nombre, " tiene ").concat(edad, " a\u00F1os");
    }
    else {
        return "".concat(nombre, ", edad desconocida");
    }
}
// Parámetros por defecto
function saludarPersona(nombre, saludo) {
    if (saludo === void 0) { saludo = "Hola"; }
    return "".concat(saludo, ", ").concat(nombre, "!");
}
// Parámetros REST
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, num) { return total + num; }, 0);
}
// Funciones flecha (arrow functions)
var multiplicar = function (a, b) { return a * b; };
function procesar(valor) {
    if (typeof valor === "number") {
        return valor * 2;
    }
    else if (typeof valor === "string") {
        return valor.toUpperCase();
    }
}
console.log("HOla");
