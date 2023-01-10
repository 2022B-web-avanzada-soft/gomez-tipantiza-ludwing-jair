// b_componentes/Componente.tsx
import {useState} from "react";

type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar: boolean;
};
// interface PropiedadesComponente{
//
// }
export default function (props: PropiedadesComponente){
    const { url, iteraciones, mostrar } = props;
    // const url = props.url;
    // const iteraciones = props.iteraciones;
    // const mostrar = props.mostrar;

    //HOOKS
    const [iteracion, setIteracion]=useState(iteraciones);

    //use state para declarar variables

    return (
        <>
            <a target="_blank" href={url}>IR A GOOGLE</a>
            {mostrar ? <p>Hello</p> : <></>}
            <div>
                {iteracion}
            </div>
            <button className="bg-blue-500" onClick={
                (event) => {
                   console.log(event)
                    console.log('Dio click')
                    setIteracion(iteracion+1)


                }
            }>Aumentar</button>
        </>
    )
}