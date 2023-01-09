
// 09-inquirer.js
// npm init -> package.json -> dependencias -> scripts
// npm install inquirer -> npm i inquirer
// node_modules -> estan las dependencias, no versionar
// no es ineficiente tener diferentes package json en diferentes proyectos, por que cada proyecto ocupa diferentes y únicas dependencias
//lockjson -> ayuda a ver las versiones de cada uno
// si es que dos proyectos ocupan las mismas dependencias, puedo hacerle global -g
// al poner npm install se instala las dependencias que estoy pidiendo en el package.json

const inquirer = require('inquirer');
async function main() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa Tu Nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa Tu Edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e);
    }
}
main();

