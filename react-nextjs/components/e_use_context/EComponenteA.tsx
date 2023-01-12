import {ContenedorContext} from "./ContenedorContext";
import EComponenteA from "./EComponenteA";
import EComponenteB from "./EComponenteB";
import {useContext, useEffect} from "react";

export default function () {
    const contenedorContexto = useContext(ContenedorContext);
    useEffect(
        ()=>{
            console.log("Cambio en algun lado el nombre", contenedorContexto.nombreUsuario)
        },
        [contenedorContexto.nombreUsuario]
    )

    return (
        <>
            Componete A
            <p>{
                contenedorContexto.nombreUsuario
            }         </p>
            <button className={"bg-blue-500 m-2"} onClick={
                e => {
                    e.preventDefault();
                    contenedorContexto.setNombreUsuario('CompA')
                }}> Actualizar
            </button>


            <EComponenteB></EComponenteB>
        </>
    )
}