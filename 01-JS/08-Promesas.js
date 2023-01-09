//08-promesas.js
const fs = require("fs");
/*
*Una funcion que acepte como parametro  una variable
* del path del archivo y otra variable con el "contenidoArchivo"
*  Utilizar el modulo fs para leer el archivo en ese "path" y anadir el
*  "contenidoArchivo" a ese archivo.
 */

function leerArchivo(path){
    return new Promise(
        (res,rej)=>{
            fs.readFile(
                path, //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
                    if(errorLecturaPrimerArchivo){
                        rej( console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo))
                    }else{
                        res(contenidoPrimerArchivo)
                    }

                }
            )
        }
    );
}

function escribirArchivo(path, contenidoArchivo){
    return new Promise(
        (res,rej)=>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if(errorEscritura){
                        rej(console.log("ERROR ESCRIBIR ARCHIVO", errorEscritura))

                    }else {
                        res(contenidoArchivo)
                    }
                }
            );
        }
    );
}

function ejercicio08(path,contenidoArchivo){
    return leerArchivo(path)
        .then((algo)=>{
            return escribirArchivo(path, algo + contenidoArchivo)
        })
}

ejercicio08("06-ejemplo.txt", " :) lo logramos")
    .then()
    .catch()

/*
function ejercicio(path,contenidoArchivo){
    return new Promise(
        (res,rej)=>{
            fs.readFile(
                path, //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
                    if(errorLecturaPrimerArchivo){
                        rej( console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo))
                    }else{
                        res(contenidoPrimerArchivo)
                    }

                }
            )
        }
    );

}

ejercicio("06-ejemplo.txt", " :) lo logramos")
    .then(
        (algo)=>{
            return escribirArchivo("06-ejemplo.txt", algo+ "uwu")
        })
    .catch()
 */

// ASYNC AWAIT
// REGLAS:
// 1) Estar dentro de una funcion (nombrada o anonima)
// 2) AGREGAR la palabra 'async' antes de la declaracion
//    de la funcion
// 3) AGREGAR la palabra 'await' antes de la declaracion
//    de una promesa
async function asyncAwaitUno(path, nuevoContenido) {
    // Si sabemos que en la promesa PUEDE haber un reject, usamos try y catch
    try {
        //AL SER ASÍNCRONO PUEDE QUE SIGA AVANZANDO LAS LINEAS DE CÓDIGO
        // PERO AL PONER AWAIT ES COMO QUE CORTAMOS ESE FLUJO, Y NO AVANZA HASTA QUE TERMINE ESA FUNCIÓN
        const respuestaContenidoArchivoOriginal = await leerArchivo(path);
        await escribirArchivo(path, respuestaContenidoArchivoOriginal + nuevoContenido );
        // await escribirArchivo(path, (await leerArchivo(path)) + nuevoContenido );
        1 + 1; // caramelo
        leerArchivo().then().catch() // async
        await leerArchivo() // sync

        //ASYN Y AWAIT es la forma en que se eliminó el .then, y .catch (promesas), las promesas arreglan los callbacks
    } catch (error) {
        console.error(error);
    }
}
asyncAwaitUno('06-ejemplo.txt', ' :)  lo logramos!').then().catch()
const asyncAwaitDos = async function () {
}
const asyncAwaitTres = async () => {
}