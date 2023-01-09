// 02-interfaces
export class A {
}
let user = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
