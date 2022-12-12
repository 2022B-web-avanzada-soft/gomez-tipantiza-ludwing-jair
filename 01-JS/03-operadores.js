const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//operadores
//funciones como parametos

const respuestaFind= arreglo.find(function (valorActual,indiceActual,arregloCompleto)
{
    console.log('valorActual',valorActual)
    console.log('indiceActual',indiceActual)
    console.log('arreglo', arregloCompleto)
    return valorActual.nota<5
})

console.log('respuestaFind', respuestaFind)
// en js es una buena practica es utilizar el triple igual instead doble igual
// la expresión trae undefined si es que no encuentra nada


//para los operadores es importante entender el nombre, entrada y salida

const respuestaFindIndex= arreglo.findIndex(function (valorActual,indiceActual,arregloCompleto)
{
    console.log('valorActual',valorActual)
    console.log('indiceActual',indiceActual)
    console.log('arreglo', arregloCompleto)
    return valorActual.nombre=="Cristian"
})

console.log('respuestaFindIndex', respuestaFindIndex)

//devuelve el menos 1 si no encuentra la psicion

const respuestaForEach= arreglo.forEach(function (valorActual,indiceActual,arregloCompleto)
{
    console.log('valorActual',valorActual)
})

console.log('respuestaForEach', respuestaForEach)

//map modificar o mutar el arreglo y devuelve un nuevo arreglo
const respuestaMap= arreglo.map(function (valorActual,indiceActual,arregloCompleto)
{
    const notaActual= valorActual.nota+1;
    const nuevoElemento = {
        id: valorActual.id,
        nombre:valorActual.nombre,
        nota:notaActual,
        estadoAprobado: notaActual>14,
        Casado:false
    }
    return nuevoElemento
})

console.log('respuestaMap', respuestaMap)
console.log('arrreglo', arreglo)

//fliter
//filtra el arreglo y se crea a un nuevo arreglo

const respuestaFilter= arreglo.filter(function (valorActual,indiceActual,arregloCompleto)
{
    console.log('valorActualFilter',valorActual)
    return valorActual.nota>=14;
})

console.log('respuestaFilter', respuestaFilter)
console.log('arreglo', arreglo)

//some -> expresion
//devuelve booleano
//OR
const respuestaSome= arreglo.some(function (valorActual,indiceActual,arregloCompleto)
{

    return valorActual.nota<9;
})

console.log('respuestaSome', respuestaSome)

//EVERY-> expresion
//devuelve booleano
//AND

const respuestaEvery= arreglo.every(function (valorActual,indiceActual,arregloCompleto)
{

    return valorActual.nota>14
})

console.log('respuesta', respuestaEvery)
//esto es útil para los permisos


//REDUCE  metodo empieza de izq -> der
//REDUCE RIGHT der --> izq
//cualquier tipo de operacion y esa acumularle en una variable
// necesitamos una variable inicial

const respuestaReduce= arreglo.
reduce(
    function (valorAcumulado,valorActual,indice)
{

    return (valorAcumulado+valorActual.nota)
},0)

console.log('respuestaReduce', respuestaReduce/arreglo.length)