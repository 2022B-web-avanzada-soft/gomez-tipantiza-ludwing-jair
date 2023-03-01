import io from "socket.io-client";
import {useEffect, useState} from "react";
import {MensajeChatProps} from "../components/i_websockets/MensajeChat";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export default function () {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mensajesLocal, setMensajes] = useState([])
    const [mensajesVisitante, setMensajesV] = useState([])
    useEffect(
        () => {

            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharGolLocal', (data: { mensaje: string }) => {
                console.log('esucho lo que el servidor me manda');
                const nuevoMensaje = data.mensaje;
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, "\n\n"+nuevoMensaje]);
            });


            socket.on('escucharGolVisitante', (data: { mensaje: string }) => {
                console.log('esucho lo que el servidor me manda');
                const nuevoMensaje = data.mensaje+"\n";
                setMensajesV((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });

            socket.on('escucharTarjetaLocal', (data: { mensaje: string }) => {
                console.log('esucho lo que el servidor me manda');
                const nuevoMensaje = data.mensaje+"\n";
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            socket.on('escucharVisitanteLocal', (data: { mensaje: string }) => {
                console.log('esucho lo que el servidor me manda');
                const nuevoMensaje = data.mensaje+"\n";
                setMensajesV((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });

            socket.on('escucharMinutosAdicion', (data: { mensaje: string }) => {
                console.log('esucho lo que el servidor me manda');
                const nuevoMensaje = data.mensaje+"\n";
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                setMensajesV((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });


        },
        []
    )
    return (
        <>
            <h1>INGRESAR EVENTOS DEL PARTIDO</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 border-right">
                        <h3>LOCAL</h3>
                        {mensajesLocal.map((mensaje) =>
                            <div>{mensaje}</div>)}
                    </div>
                    <div className="col-sm-6 border-right">
                        <h3>VISITANTE</h3>
                        {mensajesVisitante.map((mensaje) =>
                            <div>{mensaje}</div>)}
                    </div>
                </div>
            </div>
        </>
    )
}