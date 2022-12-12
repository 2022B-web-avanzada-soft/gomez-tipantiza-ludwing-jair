// const fs = require('fs');

//promesa es una clase que recibe una funcion con dos objetos como parametreros

// function promesaEsPar(numero){
//     const miPrimerPromesa = new Promise(
//         (resolve, reject) =>{
//             // resolve(1)
//             // reject(":C")
//             if(numero % 2=== 0){
//                 resolve("si es par",numero)
//             }
//             else{
//                 reject("no es par")
//             }
//
//             //como no tiene return, hace caso al primero que resuelve el codigo
//         }
//
//     );
//     return miPrimerPromesa
// }
//
// function promesaElevarAlCuadrado(numero){
//     return new Promise((res)=> res(Math.pow(numero,2)));
// }
//
// promesaEsPar(4)
//     .then(//try
//         (data)=>{
//             console.log("DATA",data);
//             return promesaElevarAlCuadrado(data)
//         }
//     )
//     .then(
//         (data)=>{
//             console.log("DATA",data);
//             return promesaElevarAlCuadrado(data)
//         }
//     )
//     .then(
//         (data)=>{
//             console.log("DATA Final",data);
//         }
//     )
//     .catch( //catch
//         (error)=>{ console.error("ERROR",error)}
//     )
//     .finally( //finally
//         ()=>{ console.log(("Finally"))}
// );
const fs = require("fs");

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve,reject)=>{
            if(numero %2 === 0){ resolve(numero); /*return (then)*/}
            else {reject("No es par"); /* throw (catch) */}
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero){
    return new Promise((res)=> res(Math.pow(numero,2)));
}

promesaEsPar(4)
    .then(//try
        (data)=>{
            console.log("DATA",data);
            return promesaElevarAlCuadrado(data)
        }
    )
    .then(
        (data)=>{
            console.log("DATA",data);
            return promesaElevarAlCuadrado(data)
        }
    )
    .then(
        (data)=>{
            console.log("DATA Final",data);
        }
    )
    .catch( //catch
        (error)=>{ console.error("ERROR",error)}
    )
    .finally( //finally
        ()=>{ console.log(("Finally"))}
    );
