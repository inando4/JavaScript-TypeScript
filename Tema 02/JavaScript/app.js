// ===== CLASES EN JAVASCRIPT =====

// Definición básica de una clase
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método de instancia
    saludar() {
      return `Hola, soy ${this.nombre}`;
    }
  
    // Método estático
    static crearAnónimo() {
      return new Persona("Anónimo", 0);
    }
  }
  
  // Herencia de clases
  class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
      super(nombre, edad); // Llama al constructor padre
      this.carrera = carrera;
    }
  
    // Sobrescribe el método del padre
    saludar() {
      return `${super.saludar()}. Estudio ${this.carrera}`;
    }
  }
  
  // Ejemplo de uso
  const persona1 = new Persona("Ana", 25);
  console.log(persona1.saludar()); // "Hola, soy Ana"
  
  const estudiante1 = new Estudiante("Carlos", 22, "Ingeniería");
  console.log(estudiante1.saludar()); // "Hola, soy Carlos. Estudio Ingeniería"
  
  // ===== MÉTODOS DE ARRAYS =====
  
  // Datos para ejemplos
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const frutas = ["manzana", "banana", "naranja", "pera"];
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Teléfono", precio: 800, stock: 10 },
    { id: 3, nombre: "Tablet", precio: 300, stock: 3 }
  ];
  
  // MAP - Transforma cada elemento
  const dobles = numeros.map(n => n * 2); 
  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  
  const nombresProductos = productos.map(p => p.nombre); 
  // ["Laptop", "Teléfono", "Tablet"]
  
  // FILTER - Filtra según condición
  const pares = numeros.filter(n => n % 2 === 0); 
  // [2, 4, 6, 8, 10]
  
  const productosCostosos = productos.filter(p => p.precio > 500); 
  // [{ id: 1, nombre: "Laptop"... }, { id: 2, nombre: "Teléfono"... }]
  
  // FIND - Encuentra el primer elemento que cumple condición
  const primerProductoCaro = productos.find(p => p.precio > 500); 
  // { id: 1, nombre: "Laptop"... }
  
  // REDUCE - Reduce a un solo valor
  const suma = numeros.reduce((total, n) => total + n, 0); 
  // 55
  
  const valorInventario = productos.reduce(
    (total, p) => total + (p.precio * p.stock), 0
  ); // 14900
  
  // SORT - Ordena elementos
  const numerosOrdenados = [...numeros].sort((a, b) => a - b); 
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
  // Ordenados de menor a mayor precio
  
  // REPLACE (String) - Reemplaza texto
  const texto = "Hola, mundo";
  const textoModificado = texto.replace("mundo", "JavaScript");
  // "Hola, JavaScript"
  
  // REPEAT (String) - Repite texto
  const separador = "-".repeat(10); 
  // "----------"
  
  // ===== EJEMPLO INTEGRADO =====
  
  class Tienda {
    constructor(nombre) {
      this.nombre = nombre;
      this.productos = [];
    }
    
    agregarProducto(producto) {
      this.productos.push(producto);
    }
    
    buscarProducto(id) {
      return this.productos.find(p => p.id === id);
    }
    
    productosBajoStock(limite = 5) {
      return this.productos
        .filter(p => p.stock < limite)
        .map(p => p.nombre);
    }
    
    calcularValorTotal() {
      return this.productos.reduce(
        (total, p) => total + (p.precio * p.stock), 0
      );
    }
    
    ordenarPorPrecio() {
      return [...this.productos].sort((a, b) => a.precio - b.precio);
    }
  }
  
  // Uso del ejemplo integrado
  const miTienda = new Tienda("Mi Tienda");
  miTienda.agregarProducto({ id: 1, nombre: "Laptop", precio: 1200, stock: 5 });
  miTienda.agregarProducto({ id: 2, nombre: "Tablet", precio: 300, stock: 3 });
  
  console.log(miTienda.buscarProducto(2)); // { id: 2, nombre: "Tablet"... }
  console.log(miTienda.productosBajoStock()); // ["Tablet"]
  console.log(miTienda.calcularValorTotal()); // 6900