var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Definición básica de clase
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, edad, id, password, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
        this.password = password;
        this.email = email;
    }
    // Método público
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    Object.defineProperty(Persona.prototype, "correo", {
        // Getter
        get: function () {
            return this.email;
        },
        // Setter
        set: function (nuevoEmail) {
            this.email = nuevoEmail;
        },
        enumerable: false,
        configurable: true
    });
    // Método privado
    Persona.prototype.mostrarPassword = function () {
        console.log("Password: ".concat(this.password));
    };
    // Método protegido
    Persona.prototype.mostrarEmail = function () {
        console.log("Email: ".concat(this.email));
    };
    // Método estático
    Persona.crearAnonimo = function () {
        return new Persona("Anónimo", 0, 0, "1234", "anonimo@email.com");
    };
    return Persona;
}());
// 2. Herencia
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, id, password, email, puesto) {
        var _this = _super.call(this, nombre, edad, id, password, email) || this;
        _this.puesto = puesto;
        return _this;
    }
    // Sobrescribir método
    Empleado.prototype.saludar = function () {
        _super.prototype.saludar.call(this);
        console.log("Trabajo como ".concat(this.puesto, "."));
    };
    // Acceso a método protegido
    Empleado.prototype.mostrarInfo = function () {
        this.mostrarEmail();
    };
    return Empleado;
}(Persona));
// 3. Clases abstractas
var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.describir = function () {
        console.log("Soy una figura.");
    };
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.area = function () {
        return Math.PI * this.radio * this.radio;
    };
    return Circulo;
}(Figura));
// Uso de las clases
var persona1 = new Persona("Ana", 30, 1, "secreto", "ana@email.com");
persona1.saludar();
console.log(persona1.correo); // getter
persona1.correo = "nuevo@email.com"; // setter
var empleado1 = new Empleado("Luis", 40, 2, "clave", "luis@email.com", "Desarrollador");
empleado1.saludar();
empleado1.mostrarInfo();
var anonimo = Persona.crearAnonimo();
anonimo.saludar();
var circulo = new Circulo(5);
circulo.describir();
console.log("Área del círculo:", circulo.area());
