const fs = require('fs');
const inquirer = require('inquirer');


// Entidad Marca de Relojes
class WatchBrand {
    constructor(id, name, foundedDate, isLuxury, headquarters) {
        this.id = id;
        this.name = name;
        this.foundedDate = foundedDate;
        this.isLuxury = isLuxury;
        this.headquarters = headquarters;
    }
}

// Entidad Reloj
class Watch {
    constructor(id, brandId, model, releaseDate, price, code) {
        this.id = id;
        this.brandId = brandId;
        this.model = model;
        this.releaseDate = releaseDate;
        this.price = price;
        this.code = code;
    }
}

function leer(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (errorLeerArchivoTxt, contenidoArchivo) => {
            if (errorLeerArchivoTxt) {
                reject("Error al leer el archivo");
            } else {
                resolve(contenidoArchivo);
                return contenidoArchivo
            }
        });
    });
}


// Función para crear una nueva marca de relojes
async function createWatchBrand(watchBrand) {
    fs.readFile('brands.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watchBrands = JSON.parse(data);
        watchBrands.push(watchBrand);
        fs.writeFile('brands.txt', JSON.stringify(watchBrands), (err) => {
            if (err) {
                throw err;
            }
            console.log('La marca de relojes ha sido creada exitosamente.');
        });
    });
}

// Función para leer una marca de relojes
async function readWatchBrand(id) {
    fs.readFile('brands.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watchBrands = JSON.parse(data);
        let watchBrand = watchBrands.find(wb => wb.id === id);
        if (watchBrand) {
            console.log(watchBrand);
        } else {
            console.log('La marca de relojes no existe.');
        }
    });
}

// Función para actualizar una marca de relojes
async function updateWatchBrand(id, updates) {
    fs.readFile('brands.txt', (err, data) => {
        if (err) {
            throw err;
        }
        //Arreglo de objetos de marcas
        let watchBrands = JSON.parse(data);
        // devuelve el indice del areglo de objetos, cuando el indice mandado por parametros se igual al indice de ese indice.
        let watchBrandIndex = watchBrands.findIndex(wb => wb.id === id);
        if (watchBrandIndex !== -1) {
            for (let key in updates) {
                watchBrands[watchBrandIndex][key] = updates[key];
            }
            fs.writeFile('brands.txt', JSON.stringify(watchBrands), (err) => {
                if (err) {
                    throw err;
                }
                console.log('La marca de relojes ha sido actualizada exitosamente.');
            });
        } else {
            console.log('La marca de relojes no existe.');
        }
    });
}

// Función para eliminar una marca de relojes
async function deleteWatchBrand(id) {
    fs.readFile('brands.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watchBrands = JSON.parse(data);
        let watchBrandIndex = watchBrands.findIndex(wb => wb.id === id);
        if (watchBrandIndex !== -1) {
            watchBrands.splice(watchBrandIndex, 1);
            fs.writeFile('brands.txt', JSON.stringify(watchBrands), (err) => {
                if (err) {
                    throw err;
                }
                console.log('La marca de relojes ha sido eliminada exitosamente.');
            });
        } else {
            console.log('La marca de relojes no existe.');
        }
    });
}

// Funciones para CRUD de la entidad Reloj

// Función para crear un nuevo reloj
async function createWatch(watch) {
    fs.readFile('watches.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watches = JSON.parse(data);
        watches.push(watch);
        fs.writeFile('watches.txt', JSON.stringify(watches), (err) => {
            if (err) {
                throw err;
            }
            console.log('El reloj ha sido creado exitosamente.');
        });
    });
}

// Función para leer un reloj
async function readWatch(id) {
    fs.readFile('watches.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watches = JSON.parse(data);
        let watch = watches.find(w => w.id === id);
        if (watch) {
            console.log(watch);
            return watch;
        } else {
            console.log('El reloj no existe.');
        }
    });
}

// Función para actualizar un reloj
async function updateWatch(id, updates) {
    fs.readFile('watches.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watches = JSON.parse(data);
        let watchIndex = watches.findIndex(w => w.id === id);
        if (watchIndex !== -1) {
            for (let key in updates) {
                watches[watchIndex][key] = updates[key];
            }
            fs.writeFile('watches.txt', JSON.stringify(watches), (err) => {
                if (err) {
                    throw err;
                }
                console.log('El reloj ha sido actualizado exitosamente.');
            });
        } else {
            console.log('El reloj no existe.');
        }
    });
}

// Función para eliminar un reloj
async function deleteWatch(id) {
    fs.readFile('watches.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let watches = JSON.parse(data);
        let watchIndex = watches.findIndex(w => w.id === id);
        if (watchIndex !== -1) {
            watches.splice(watchIndex, 1);
            fs.writeFile('watches.txt', JSON.stringify(watches), (err) => {
                if (err) {
                    throw err;
                }
                console.log('El reloj ha sido eliminado exitosamente.');
            });
        } else {
            console.log('El reloj no existe.');
        }
    });
}

async function leerOpcion() {
    try {
        const respuesta = await inquirer
            .prompt([{
                type: 'input', name: 'opcion', message: '...'
            }])
        return respuesta['opcion'];
    } catch (e) {
        console.log(e);
    }
}

async function mainRelojes() {
    let opcion;
    while (opcion != 5) {
        console.log('\t RELOJ');
        console.log('1.- Leer\n2.- Crear\n3.- Modificar\n4.- Eliminar\n5.- Salir');
        console.log('Ingresa la opción...')
        opcion = Number(await leerOpcion());
        let watches = null;
        switch (opcion) {
            case 1 :

                watches = JSON.parse(await leer('watches.txt'));
                watches.forEach(watch => {
                    console.log('Codigo del reloj en el mercado:', watch['code']);
                    console.log('Modelo al que pertenece:', watch['model']);
                    console.log('Precio en el mercado:', watch['price']);
                    console.log('Fecha de lanzamiento al mercado:', watch['releaseDate'], '\n');
                    readWatchBrand(watch['brandId']);
                });

                break;
            case 2 :
                let id = 0;
                try {
                    const respuesta = await inquirer
                        .prompt([{
                            type: 'number', name: 'brandId', message: 'Ingresa el id de la marca a la que pertenece'
                        }, {
                            type: 'input', name: 'code', message: 'Ingresa el código del reloj'
                        }, {
                            type: 'input', name: 'model', message: 'Ingresa el modelo del reloj'
                        }, {
                            type: 'number', name: 'price', message: 'Ingresa el precio del reloj'
                        }, {
                            type: 'input',
                            name: 'release',
                            message: 'Ingresa la fecha de lanzamiento del reloj',
                            validate: function (value) {
                                const fecha = new Date(value);
                                if (!isNaN(fecha.getTime())) {
                                    return true;
                                } else {
                                    return 'Ingrese una fecha valida';
                                }
                            }
                        }]);

                    const relojes = JSON.parse(await leer('watches.txt'));
                    relojes.forEach(reloj => {
                        if (id < reloj["id"]) {
                            id = reloj["id"];
                        }
                    });
                    id++;
                    let reloj = new Watch(id, respuesta['brandId'], respuesta["model"], respuesta['releaseDate'], respuesta['price'], respuesta['code']);

                    await createWatch(reloj);


                } catch (e) {
                    console.log(e);
                }

            case 3 :
                console.log('Ingrese el id del reloj a modificar')
                let modificar = Number(await leerOpcion());
                let reloj = await readWatch(modificar);
                try {
                    const respuesta = await inquirer
                        .prompt([{
                            type: 'input', name: 'model', message: 'Ingresa el nuevo nombre de la marca'
                        },{
                            type: 'number', name: 'price', message: 'Ingresa el nuevo precio de la marca'
                        },{
                            type: 'number', name: 'code', message: 'Ingresa el nuevo código de la marca'
                        }, {
                            type: 'input',
                            name: 'release',
                            message: 'Ingresa de nuevo la fecha de lanzamiento',
                            validate: function (value) {
                                const fecha = new Date(value);
                                if (!isNaN(fecha.getTime())) {
                                    return true;
                                } else {
                                    return 'Ingrese una fecha valida';
                                }
                            }
                        }]);
                    let relojNuevo = new WatchBrand(modificar,reloj['brandId'], respuesta['model'], respuesta['release'], respuesta['price'], respuesta['code']);
                    await updateWatch(modificar, relojNuevo)

                } catch (e) {
                    console && console.log(e)
                }
                break;
            case 4 :
                console.log('Ingrese el id de la marca a eliminar')
                let eliminar = Number(await leerOpcion());
                await deleteWatch(eliminar)
                break;
            default :
                break;
        }
    }
}

async function main() {
    let opcion;
    while (opcion != 6) {
        console.log('\t MARCAS DE RELOJES');
        console.log('1.- Leer\n2.- Crear\n3.- Modificar\n4.- Eliminar\n5.- RELOJ\n6.- Salir');
        console.log('Ingresa la opción')
        opcion = Number(await leerOpcion());
        let brands = null;
        switch (opcion) {
            case 1 :

                brands = JSON.parse(await leer('brands.txt'));
                brands.forEach(brands => {
                    console.log('Nombre de la empresa:', brands['name']);
                    console.log('Su sede es:', brands['headquarters']);
                    console.log('Es lujosa:', brands['isLuxury']);
                    console.log('Fecha de fundación:', brands['foundedDate'], '\n');
                });

                break;
            case 2 :
                let id = 0;
                try {
                    const respuesta = await inquirer
                        .prompt([{
                            type: 'input', name: 'nombre', message: 'Ingresa el nombre de la empresa'
                        }, {
                            type: 'input', name: 'sede', message: 'Ingresa la sede de la empresa'
                        }, {
                            type: 'confirm',
                            name: 'esLujosa',
                            message: '¿La marca es prestigiosa, reconocida por ser de alta clase?'
                        }, {
                            type: 'input',
                            name: 'fundación',
                            message: 'Ingresa la fecha de fundación',
                            validate: function (value) {
                                const fecha = new Date(value);
                                if (!isNaN(fecha.getTime())) {
                                    return true;
                                } else {
                                    return 'Ingrese una fecha valida';
                                }
                            }
                        }]);

                    const marcasReloj = JSON.parse(await leer('brands.txt'));
                    marcasReloj.forEach(marca => {
                        if (id < marca["id"]) {
                            id = marca["id"];
                        }
                    });
                    id++;
                    let brand = new WatchBrand(id, respuesta['nombre'], respuesta['fundacion'], respuesta['esLujosa'], respuesta['sede']);
                    await createWatchBrand(brand);
                    console.log("\n")


                } catch (e) {
                    console.log(e);
                }

            case 3 :
                console.log('Ingrese el id de la marca a modificar')
                let modificar = Number(await leerOpcion());
                try {
                    const respuesta = await inquirer
                        .prompt([{
                            type: 'input', name: 'nombre', message: 'Ingresa el nuevo nombre de la empresa'
                        }, {
                            type: 'input', name: 'sede', message: 'Ingresa la nueva sede de la empresa'
                        }, {
                            type: 'confirm',
                            name: 'esLujosa',
                            message: 'Ingrese de nuevo si considera que la marca es lujosa'
                        }, {
                            type: 'input',
                            name: 'fundación',
                            message: 'Ingresa de nuevo la fecha de fundación',
                            validate: function (value) {
                                const fecha = new Date(value);
                                if (!isNaN(fecha.getTime())) {
                                    return true;
                                } else {
                                    return 'Ingrese una fecha valida';
                                }
                            }
                        }]);
                    let brand = new WatchBrand(modificar, respuesta['nombre'], respuesta['fundacion'], respuesta['esLujosa'], respuesta['sede']);
                    await updateWatchBrand(modificar, brand)

                } catch (e) {
                    console && console.log(e)
                }
                break;
            case 4 :
                console.log('Ingrese el id de la marca a eliminar')
                let eliminar = Number(await leerOpcion());
                await deleteWatchBrand(eliminar);
                break;
            case 5 :
                await menuRelojes();
            default :
                break;
        }
    }
}

main()

