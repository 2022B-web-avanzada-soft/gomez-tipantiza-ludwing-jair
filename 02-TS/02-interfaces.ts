//02-interfaces

// para tipos de datos que tenemos disponibles y que no vale la pena crear una clase
// frontend utiliza interfaz para que no sea tan pesado


export class A{

}
export interface B{

}

//? es opcional
// backend  -> json que vamos a usarlo en el frontend para no ocupar mucho espacio definimos una interafaz, por que ya sabemos lo que nos esta llegando

//contrato de interfaz definida
interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number | undefined;
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    //funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; //opcional
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}

let user: Usuario ={
    nombre: 'Marco',
    apellido: 'Salazar',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        //no es bueno utilizar, pero hay veces en la que se hace referncia
        // es mejor user.
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (user.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}