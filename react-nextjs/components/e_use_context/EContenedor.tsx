import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
import {useEffect, useState} from "react";
import EComponenteA from "./EComponenteA";

export default function(){
    const [nombreUsuario, setNombreUsuario] = useState("Adrian")

    const objetoContenedorContext: ContenedorContextObject = {nombreUsuario, setNombreUsuario};
   useEffect( ()=>{
        console.log("ContenedorContext")
    },
        [objetoContenedorContext.nombreUsuario]
)

    return (
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>

            </>
    )
}