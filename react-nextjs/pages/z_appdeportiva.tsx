import io from "socket.io-client";
import MySportsFeeds from "mysportsfeeds-node";
import {useEffect, useState} from "react";
import MensajeChat, {MensajeChatProps} from "../components/i_websockets/MensajeChat";
import {MensajeSala} from "./i_websockets";
import Layout from "../components/Layout";
import {useForm} from "react-hook-form";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export default function () {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            mensaje: '',
            numeroL: '',
            numeroV: '',
            minutos: ''
        },
        mode: 'all'
    })


    const enviarEventoGolLocal = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'GOL DEL EQUIPO LOCAL',
            nombre: '',
            posicion: 'I'
        };
        socket.emit(
            'notificarGolLocal', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evento
                console.log("Comprobado que fue al servidor, y devuelve callback")
                console.log("Impreso en el cliente")
                console.log(datosEventoHola) // {mensaje: 'ok'};
            }
        )
    }

    const enviarEventoGolVisitante = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'GOL DEL EQUIPO VISITANTE',
            nombre: '',
            posicion: 'I'
        };
        socket.emit(
            'notificarGolVisitante', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evento
                console.log("Comprobado que fue al servidor, y devuelve callback")
                console.log("Impreso en el cliente")
                console.log(datosEventoHola) // {mensaje: 'ok'};
            }
        )
    }

    const enviarTarjetaLocal = (numero: String) => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'TARJETA AMARILLA PARA' + numero + ' DEL EQUIPO LOCAL',
            nombre: '',
            posicion: 'I'
        };
        socket.emit(
            'notificarTarjetaLocal', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evento
                console.log("Comprobado que fue al servidor, y devuelve callback")
                console.log("Impreso en el cliente")
                console.log(datosEventoHola) // {mensaje: 'ok'};
            }
        )
    }

    const enviarTarjetaVisitante = (numero: String) => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'TARJETA AMARILLA PARA ' + numero + ' DEL EQUIPO VISITANTE',
            nombre: '',
            posicion: 'I'
        };
        socket.emit(
            'notificarTarjetaVisitante', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evento
                console.log("Comprobado que fue al servidor, y devuelve callback")
                console.log("Impreso en el cliente")
                console.log(datosEventoHola) // {mensaje: 'ok'};
            }
        )
    }

    const notificarMinutos = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'SE HAN AGREGADO +5 min',
            nombre: '',
            posicion: 'I'
        };
        socket.emit(
            'notificarMinutosAdicion', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evento
                console.log("Comprobado que fue al servidor, y devuelve callback")
                console.log("Impreso en el cliente")
                console.log(datosEventoHola) // {mensaje: 'ok'};
            }
        )
    }

    return (
        <>
            <h1>INGRESAR EVENTOS DEL PARTIDO</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 border-right">
                        <h3>LOCAL</h3>
                        <button className={'btn btn-success'} onClick={() => enviarEventoGolLocal()}>INGRESAR GOL
                        </button>
                        <div className="mb-5"/>
                        <div className="mb-5"/>

                        <div className="mb-3">
                            <label htmlFor="numeroJugador" className="form-label">Numero del jugador
                                amonestado </label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="EJ: 15"
                                   id="numeroJugador"
                                   name="numeroV"
                                   {...register('numeroV', {required: 'Ingresar numeroJugador'})}
                                   aria-describedby="numeroJugadordHelp"

                            />

                            {errors.numeroV &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.numeroV.message}
                                </div>
                            }
                        </div>
                        <button type="submit"
                                className="btn btn-warning" onClick={() => enviarTarjetaLocal("6")}>
                            Enviar Tarjeta
                        </button>
                        <button type="reset"
                                className="btn btn-danger">
                            Reset
                        </button>
                    </div>
                    <div className="col-sm-6 border-right">
                        <h3>VISITANTE</h3>
                        <button className={'btn btn-success'} onClick={() => enviarEventoGolVisitante()}>INGRESAR GOL
                        </button>
                        <div className="mb-5"/>

                        <div className="mb-3">
                            <label htmlFor="numeroJugador" className="form-label">Numero del jugador
                                amonestado </label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="EJ: 15"
                                   id="numeroJugador"
                                   name="numeroV"
                                   {...register('numeroV', {required: 'Ingresar numeroJugador'})}
                                   aria-describedby="numeroJugadordHelp"

                            />

                            {errors.numeroV &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.numeroV.message}
                                </div>
                            }
                        </div>
                        <button type="submit"
                                className="btn btn-warning" onClick={() => enviarTarjetaVisitante("15")}>
                            Enviar Tarjeta
                        </button>
                        <button type="reset"
                                className="btn btn-danger">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <br/>
            <div className="mb-5"/>
            <div className="mb-3">
                <label htmlFor="minutos" className="form-label">Minutos agregados: +</label>
                <input type="text"
                       className="form-control"
                       placeholder="EJ: 6"
                       id="minutos"

                       aria-describedby="minutosHelp"/>
            </div>
            <button type="submit"
                    className="btn btn-warning" onClick={() => notificarMinutos()}>
                Enviar Minutos de Adición
            </button>
            <button type="reset"
                    className="btn btn-danger">
                Reset
            </button>
        </>
    )
}
