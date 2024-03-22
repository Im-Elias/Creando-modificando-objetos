//Funciones constructoras
function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente;
}

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });
  var _edad = edad;
  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    },
  });
  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });
  var _rut = rut;
  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    },
  });
  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });
  var _diagnostico = diagnostico;
  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    },
  });
  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

Consultorio.prototype.buscarPorNombre = function (nombre) {
  const pacienteEncontrado = this.paciente.find(
    (paciente) => paciente._getNombre === nombre
  );

  return pacienteEncontrado;
};

Consultorio.prototype.mostrarTodos = function () {
  this.paciente.forEach((element) => {
    console.log(
      element._getNombre,
      element._getEdad,
      element._getRut,
      element._getDiagnostico
    );
  });
};
// Testeo de objetos
const paciente1 = new Paciente("Roerto", 25, "123456789-0", "Covid");
const paciente2 = new Paciente("Juanito", 30, "223456789-0", "Tifus");
const paciente3 = new Paciente("Lucho", 35, "323456789-0", "Ebola");
console.log(paciente1, paciente2, paciente3);

const consultorio1 = new Consultorio("Consultorio 1", [
  paciente1,
  paciente2,
  paciente3,
]);
console.log(consultorio1);
