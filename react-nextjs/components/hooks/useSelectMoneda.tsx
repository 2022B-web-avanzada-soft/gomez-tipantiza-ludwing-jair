// hooks/useSelectMoneda.tsx
import {MonedasInterface} from "../../interfaces/moneda";
import {useState} from "react";

export default function (label: string, opciones: MonedasInterface[]) {
    // DEVOLVER select del arreglo de monedas (html - jsx element en react)
    // valor de esa moneda
    const [moneda, setMoneda] = useState('');
    // funcion que no recibe nada pero que recibe un jsx element
    const generarJSXElementMonedas: () => JSX.Element[] = () => {
        //En react usualmente se itera con el map, no con el for
        return opciones.map(
            (moneda) =>
                ( // Iteracion (KEY ES REQUERIDO)
                    <option key={moneda.id} id={moneda.id} value={moneda.id}>
                        {moneda.nombre}
                    </option>
                )
        );
    };
    const UseSelectMonedas = (
        <>
            <label className="form-label" htmlFor={label}> {label} </label>
            <select className="form-select"
                    name={label}
                    id={label}
                    value={moneda}
                    onChange={e => {
                        e.preventDefault();
                        setMoneda(e.target.value)
                    }}
            >
                <option value="">Seleccione opción</option>
                {generarJSXElementMonedas()}
            </select>
        </>
    )
    return [moneda, UseSelectMonedas];
}