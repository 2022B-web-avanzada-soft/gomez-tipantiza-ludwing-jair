// donde va a vivir la logica de negocio, solo abra una instancia de esto en nuestro aplicsativo
import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";

@WebSocketGateway(
    8080,
    {
        cors:{
            origin:'*'
        }
    }
)
export class EventosGateway{
    //boradcast => todos los clientes conectados y que esten escuchando el evento  "escucharEventoHola" les llegue el mensaje
   @SubscribeMessage('hola')//nombre del metodo a recibir eventos
   devolverHola(
       @MessageBody()
       message:{mensaje: string},
       @ConnectedSocket()
       socket:Socket
   ) {
       console.log('message',message);
       socket.broadcast
           .emit(
               'escuchaEventoHola',{
                   message:'Bienvenido'+message.mensaje

       }
           );
       return {message:'ok'};
   }


   // los que escuchan que tienen una tributo en común
    @SubscribeMessage('unirseSala')//nombre del método
    unirseSala(
        @MessageBody()
            message:{salaId: string, nombre: string},
        @ConnectedSocket()
            socket:Socket
    ) {
       // al unirse a una sala en específico
        socket.join(message.salaId);

        const mensajeDeBienvenidaSala={mensaje:`Bienvenido a la sala${message.salaId}`};
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escuchaEventoUnirseSala',
                    mensajeDeBienvenidaSala);
        return {message:'ok'};
    }
}