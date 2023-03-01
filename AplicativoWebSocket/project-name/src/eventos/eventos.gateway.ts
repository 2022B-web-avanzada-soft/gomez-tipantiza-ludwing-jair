import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';
@WebSocketGateway(
    11202, // Puerto donde esta escuchando el servidor de websockets
    {
        cors: {
            origin: '*', // Habilitando la conexion desde cualquier IP
        }
    })
export class EventosGateway {
    @SubscribeMessage('notificarGolLocal')
    // Nombre del método para recibir/escuchar eventos de los clientes
    recibirGolLocal(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        // Lo que se realizara en el servidor
        console.log('mensaje recibido en el servidor', message);
        socket.broadcast // broadcast = > TODOS LOS CLIENTES CONECTADOS Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharGolLocal',{
                    // OBJETO A ENVIAR, que recibira el cliente

                    mensaje: 'GOOOOOOOOOOOOOOOOOOOOOOOOL LOCAL'
                });
        return {mensaje: 'ok'}; // Callback del metodo "hola"
    }
    @SubscribeMessage('notificarGolVisitante') // Nombre del método para recibir/escuchar eventos de los clientes
    recibirGolVisitante(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket // import {Server, Socket} from 'socket.io';
    ) {
        console.log('mensaje recibido en el servidor', message);
        socket.broadcast // broadcast = > TODOS LOS CLIENTES CONECTADOS Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharGolVisitante',{
                    // OBJETO A ENVIAR, que recibira el cliente

                    mensaje: 'GOOOOOOOOOOOOOOOOOOOOOOOOL VISITANTE'
                });
        return {mensaje: 'ok'}; // Callback del metodo "hola"
    }
    @SubscribeMessage('notificarTarjetaLocal') // Nombre del método para recibir/escuchar eventos de los clientes
    recibirTarjetaLocal(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket // import {Server, Socket} from 'socket.io';
    ) {
        console.log('mensaje recibido en el servidor', message);
        socket.broadcast // broadcast = > TODOS LOS CLIENTES CONECTADOS Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharTarjetaLocal',{
                    // OBJETO A ENVIAR, que recibira el cliente

                    mensaje: 'AMONESTADO EL NUMERO 6' + message
                });
        return {mensaje: 'ok'}; // Callback del metodo "hola"
    }

    @SubscribeMessage('notificarTarjetaVisitante') // Nombre del método para recibir/escuchar eventos de los clientes
    recibirTarjetaVisitante(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket // import {Server, Socket} from 'socket.io';
    ) {
        console.log('mensaje recibido en el servidor', message);
        socket.broadcast // broadcast = > TODOS LOS CLIENTES CONECTADOS Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharVisitanteLocal',{
                    // OBJETO A ENVIAR, que recibira el cliente
                    mensaje: 'AMONESTADO EL NUMERO 15' + message
                });
        return {mensaje: 'ok'}; // Callback del metodo "hola"
    }

    @SubscribeMessage('notificarMinutosAdicion') // Nombre del método para recibir/escuchar eventos de los clientes
    recibirMinutosAdicion(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket // import {Server, Socket} from 'socket.io';
    ) {
        console.log('mensaje recibido en el servidor', message);
        socket.broadcast // broadcast = > TODOS LOS CLIENTES CONECTADOS Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                //evento que debe ser escuchado y estar atento desde el cliente
                'escucharMinutosAdicion',{
                    // OBJETO A ENVIAR, que recibira el cliente
                    mensaje: 'SE HAN AGREGADO +5'
                });
        return {mensaje: 'ok'}; // Callback del metodo "hola"
    }
}
