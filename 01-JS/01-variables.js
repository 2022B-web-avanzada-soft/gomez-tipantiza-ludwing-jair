//mutables e inmutables
//reasignar es cuando utilizo igual
//mutables
//var let
//inmutables
//val const
//vamos a preferir CONST>LET>VAR!(CASI NUNCA)
const numero = 1;
const sueldo = 1.2;
const texto = 'jair';
const texto1 = "Gomez"
const booleano = true;
const hijos = null;
const zapatos = undefined;

console.log(typeof numero);
console.log(typeof sueldo)
console.log(typeof texto)
console.log(typeof texto1)
console.log(typeof booleano)
console.log(typeof hijos)
console.log(typeof zapatos)
// false and true
if ("") {
    console.log("String vacio es verdader")
} else {
    console.log("String vacio es false")
}

if ("Adrina") {
    console.log("String con datos es truty")
} else {
    console.log("String con datos es false")
}
//number
if (-1) {
    console.log("negativos es truty")
} else {
    console.log("negativos es Falso")
}
if (0) {
    console.log("Cero es truty")
} else {
    console.log("Cero es Falso")
}

if (1) {
    console.log("Posi es truty")
} else {
    console.log("Posi es Falso")
}
if (null) {
    console.log("null es truty")
} else {
    console.log("null es Falso")
}

if (undefined) {
    console.log("undefined es truty")
} else {
    console.log("undefined es Falso")
}

//objeto
const jair = {
    "nombre": "Jair",
    'apellido': 'Gomez',
    edad: 21,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['osi', 'chino', 'lilo'],
}
console.log(jair)

// crear nuevo atributo
jair.sueldo; //undefined
jair.sueldo = 1000.2;
console.log(jair.sueldo)
jair["gastos"] = 0.0
console.log(jair.gastos)
console.log(jair)

console.log(Object.keys(jair))
console.log(jair);


//delete propiedad
// elimina definitivamente la llave del objeto

delete jair.nombre;
console.log(Object.keys(jair))
console.log(jair);

//variables por valor o referencia
//variables por valor en js son las primitivas

let edadJair=21;
let edadMagaly=edadJair;

console.log(edadJair)
console.log(edadMagaly)
edadJair=edadJair+1;
console.log(edadJair)
//no es que es dinámico, solo se queda con la inicializada de la primera vez
console.log(edadMagaly)

let notas= {
    total:10
}

let notasSegundoBimestre=notas; //IGUALANDO LA REFERENCIA
notasSegundoBimestre.total= notasSegundoBimestre.total+1;

console.log(notas)
console.log(notasSegundoBimestre)

//Para clonar objetos (para que actúe como con las primitivas)
let notasTercerBimestre=Object.assign({},notas)
notasSegundoBimestre.total=notasSegundoBimestre.total +1;
console.log('notas',notas);
console.log('notas2',notasSegundoBimestre);
console.log('notas3',notasTercerBimestre);