let arreglo = [6,7,8,9,10,11,12,13,14,15]
//for of devuelve los valores
//for in devuelve el índice

for(let numero of arreglo){
    console.log(numero)
}

for(let indice in arreglo){
    console.log('indice: ',indice)
}

let objetoPrueba={a:'1',b:'2',c:'3'}
for(let llave in objetoPrueba){
    console.log('llave',llave)
}

arreglo.push(11);
arreglo.pop();
arreglo.unshift(5); // añadir al principio
console.log(arreglo)
arreglo.splice(0,0,4)
console.log(arreglo)
const indiceNueve=arreglo.indexOf(14)
console.log(indiceNueve)
arreglo.splice(indiceNueve,2)
console.log(arreglo)