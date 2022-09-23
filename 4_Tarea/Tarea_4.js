//  -- Tarea_4

const nombre = "Jose";
const apellido = " Cordova ";
const estudiante = nombre.concat(" ").concat(apellido);

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const estudianteLength = estudiante.length;

/////////////////////////////////////////////////////////

let input_1 = "estudianteMayus";
let input_2 = "estudianteMinus";

// toLowerCase() - toUpperCase()

console.log(input_1.toLowerCase());
console.log(input_2.toUpperCase());

/////////////////////////////////////////////////////////

let str_3 = "estudiante";
console.log(str_3.length);

console.log(nombre[0]);

console.log(apellido.trim().length);


////////////////////////////////////////////////////////

// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
const finalApellido = apellido.substring(apellido.length - 1, apellido.length);

// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEnEstudiante = estudiante.includes(nombre);