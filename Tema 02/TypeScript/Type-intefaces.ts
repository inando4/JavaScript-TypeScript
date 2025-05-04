// --- TYPE ---
// Un type permite definir un alias para un tipo de dato, objeto, unión, etc.
type Punto = {
    x: number;
    y: number;
  };
  
  type ID = string | number; // Unión de tipos
  
  // Type también puede ser una unión o intersección
  type Animal = { nombre: string };
  type Volador = { vuela: boolean };
  type Ave = Animal & Volador; // Intersección
  
  const puntoA: Punto = { x: 10, y: 20 };
  const idUsuario: ID = "abc123";
  
  // --- INTERFACE ---
  // Una interface define la forma de un objeto y puede ser extendida o implementada por clases
  interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
  }
  
  // Las interfaces pueden extender otras interfaces
  interface Empleado extends Persona {
    puesto: string;
  }
  
  // Implementación de una interface en una clase
  class Trabajador implements Empleado {
    nombre: string;
    edad: number;
    puesto: string;
  
    constructor(nombre: string, edad: number, puesto: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.puesto = puesto;
    }
  
    saludar(): void {
      console.log(`Hola, soy ${this.nombre} y trabajo como ${this.puesto}.`);
    }
  }
  
  // --- DIFERENCIAS PRINCIPALES ---
  // - type puede ser usado para tipos primitivos, uniones, intersecciones, tuplas, etc.
  // - interface solo para la forma de objetos y clases, pero permite herencia múltiple y declaración incremental (puedes extender la misma interface en varios lugares).
  
  // Ejemplo de declaración incremental con interface:
  interface Producto {
    nombre: string;
  }
  interface Producto {
    precio: number;
  }
  const prod: Producto = { nombre: "Mouse", precio: 100 };
  
  // --- USO DE TYPE E INTERFACE ---
  const persona: Persona = {
    nombre: "Ana",
    edad: 28,
    saludar() {
      console.log("¡Hola!");
    }
  };
  
  const ave: Ave = { nombre: "Loro", vuela: true };