import EComponenteC from "./EComponenteC";
import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";

export default function (){
    const contenedorContexto = useContext(ContenedorContext);
    return (
        <>
            Componete B
            <p>{
                contenedorContexto.nombreUsuario
            }         </p>
            <button onClick={
                e => {
                    e.preventDefault();
                    contenedorContexto.setNombreUsuario('CompB')
                }}> Actualizar
            </button>


            <EComponenteC></EComponenteC>
        </>
    )
}