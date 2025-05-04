// 1. Definición básica de clase
class Persona {
  // Propiedades públicas por defecto
  nombre: string;
  edad: number;

  // Propiedad readonly (solo lectura)
  readonly id: number;

  // Propiedad privada
  private password: string;

  // Propiedad protegida
  protected email: string;

  // Constructor
  constructor(nombre: string, edad: number, id: number, password: string, email: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.id = id;
      this.password = password;
      this.email = email;
  }

  // Método público
  saludar(): void {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }

  // Getter
  get correo(): string {
      return this.email;
  }

  // Setter
  set correo(nuevoEmail: string) {
      this.email = nuevoEmail;
  }

  // Método privado
  private mostrarPassword(): void {
      console.log(`Password: ${this.password}`);
  }

  // Método protegido
  protected mostrarEmail(): void {
      console.log(`Email: ${this.email}`);
  }

  // Método estático
  static crearAnonimo(): Persona {
      return new Persona("Anónimo", 0, 0, "1234", "anonimo@email.com");
  }
}

// 2. Herencia
class Empleado extends Persona {
  puesto: string;

  constructor(nombre: string, edad: number, id: number, password: string, email: string, puesto: string) {
      super(nombre, edad, id, password, email);
      this.puesto = puesto;
  }

  // Sobrescribir método
  saludar(): void {
      super.saludar();
      console.log(`Trabajo como ${this.puesto}.`);
  }

  // Acceso a método protegido
  mostrarInfo(): void {
      this.mostrarEmail();
  }
}

// 3. Clases abstractas
abstract class Figura {
  abstract area(): number;
  describir(): void {
      console.log("Soy una figura.");
  }
}

class Circulo extends Figura {
  radio: number;
  constructor(radio: number) {
      super();
      this.radio = radio;
  }
  area(): number {
      return Math.PI * this.radio * this.radio;
  }
}

// Uso de las clases
const persona1 = new Persona("Ana", 30, 1, "secreto", "ana@email.com");
persona1.saludar();
console.log(persona1.correo); // getter
persona1.correo = "nuevo@email.com"; // setter

const empleado1 = new Empleado("Luis", 40, 2, "clave", "luis@email.com", "Desarrollador");
empleado1.saludar();
empleado1.mostrarInfo();

const anonimo = Persona.crearAnonimo();
anonimo.saludar();

const circulo = new Circulo(5);
circulo.describir();
console.log("Área del círculo:", circulo.area());