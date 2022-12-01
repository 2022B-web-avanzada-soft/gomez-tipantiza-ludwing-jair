const fs = require('fs');

//console.log('primero');
//lenguaje asincrono
// fs.readFile(
//     './06-ejemplo.txt', //nombre o path del archivo
//     'utf-8', //codificación
//     (errorLecturaPrimerArchivo, contenidoPrimerArchivo) =>{ //Callback
//         if(errorLecturaPrimerArchivo){
//             console.log('errorLecturaPrimerArchivo', errorLecturaPrimerArchivo)
//         }
//         else{
//             console.log('contenido', contenidoPrimerArchivo )
//         }
//     }
//
// )
//console.log('tercero')

fs.readFile(
    './06-ejemplo.txt', //nombre o path del archivo
    'utf-8', //codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) =>{ //Callback
        if(errorLecturaPrimerArchivo){
            console.log('errorLecturaPrimerArchivo', errorLecturaPrimerArchivo)
        }
        else{
            console.log('contenido  primer archivo ejemplo', contenidoPrimerArchivo )
            fs.readFile(
                './01-variables.js', //nombre o path del archivo
                'utf-8', //codificación
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) =>{ //Callback
                    if(errorLecturaSegundoArchivo){
                        console.log('errorLecturaPrimerArchivo', errorLecturaSegundoArchivo)
                    }
                    else{
                        console.log('contenido segundo archivo ejemplo', contenidoSegundoArchivo )
                    }
                    fs.writeFile(
                        './06-nuevo-archivo.txt', //nombre o path del archivo
                        contenidoPrimerArchivo+contenidoSegundoArchivo, //codificación
                        (errorLecturaEscritura) => { //Callback
                            if(errorLecturaEscritura) {
                                console.log('error al escribir')
                            }
                        }

                    )
                }


            )
        }


    }
    // fin primer callback

)