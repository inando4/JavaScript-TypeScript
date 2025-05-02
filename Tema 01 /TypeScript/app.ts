// FUNDAMENTOS DE TYPESCRIPT

// -------------- 1. VARIABLES --------------

// En TypeScript, las variables se declaran con let, const o var (menos recomendado)
let nombre: string = "María";
const edad: number = 30;
var estaActivo: boolean = true;  // Mejor usar let en lugar de var

// TypeScript infiere el tipo si no lo declaras explícitamente
let apellido = "González";  // TypeScript infiere que es string

// -------------- 2. TIPOS DE DATOS BÁSICOS --------------

// String (cadenas de texto)
let texto: string = "Hola mundo";
let comillaSimple: string = 'También válido';
let plantilla: string = `Hola, ${nombre}`;

// Number (números)
let entero: number = 42;
let decimal: number = 3.14;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;

// Boolean (booleanos)
let verdadero: boolean = true;
let falso: boolean = false;

// Array (arreglos)
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: Array<string> = ["Ana", "Juan", "Pedro"];

// Tuple (tuplas - arreglos con elementos de tipos diferentes y orden fijo)
let persona: [string, number] = ["Carlos", 25];

// Enum (enumerados)
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
let hoy: DiaSemana = DiaSemana.Miercoles;

// Any (cualquier tipo - evitar usar cuando sea posible)
let cualquierValor: any = 4;
cualquierValor = "ahora soy string";

// Void (ausencia de valor, usado en funciones que no retornan valor)
function saludar(): void {
    console.log("Hola");
}

// Null y Undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Never (funciones que nunca retornan o siempre lanzan excepciones)
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// Object (objetos no primitivos)
let usuario: object = { nombre: "Ana", edad: 28 };

// Type Assertions (aserciones de tipo)
let textoDesconocido: any = "esto es un string";
let longitudTexto: number = (textoDesconocido as string).length;
let otraForma: number = (<string>textoDesconocido).length; // Sintaxis alternativa

// -------------- 3. INTERFACES --------------

// Interfaces definen la estructura que debe tener un objeto
interface Persona {
    nombre: string;
    edad: number;
    direccion?: string;  // El signo ? indica que es opcional
    saludar(): void;     // Método
}

// Usar la interfaz
const empleado: Persona = {
    nombre: "Roberto",
    edad: 35,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

// -------------- 4. FUNCIONES --------------

// Función con parámetros y retorno tipados
function sumar(a: number, b: number): number {
    return a + b;
}

// Función con parámetros opcionales
function mostrarInfo(nombre: string, edad?: number): string {
    if (edad) {
        return `${nombre} tiene ${edad} años`;
    } else {
        return `${nombre}, edad desconocida`;
    }
}

// Parámetros por defecto
function saludarPersona(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}!`;
}

// Parámetros REST
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

// Funciones flecha (arrow functions)
const multiplicar = (a: number, b: number): number => a * b;

// Sobrecarga de funciones
function procesar(valor: number): number;
function procesar(valor: string): string;
function procesar(valor: any): any {
    if (typeof valor === "number") {
        return valor * 2;
    } else if (typeof valor === "string") {
        return valor.toUpperCase();
    }
}

console.log("HOla")