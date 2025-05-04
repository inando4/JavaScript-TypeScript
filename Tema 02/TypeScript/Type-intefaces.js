var puntoA = { x: 10, y: 20 };
var idUsuario = "abc123";
// Implementación de una interface en una clase
var Trabajador = /** @class */ (function () {
    function Trabajador(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    Trabajador.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y trabajo como ").concat(this.puesto, "."));
    };
    return Trabajador;
}());
var prod = { nombre: "Mouse", precio: 100 };
// --- USO DE TYPE E INTERFACE ---
var persona = {
    nombre: "Ana",
    edad: 28,
    saludar: function () {
        console.log("¡Hola!");
    }
};
var ave = { nombre: "Loro", vuela: true };
