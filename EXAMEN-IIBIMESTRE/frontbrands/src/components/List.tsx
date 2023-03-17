import * as React from 'react'
import ListItem from './ListItem'
import {Brand} from "@/interfaces/Brand";
import {Watch} from "@/interfaces/Watch";


type Props = {
    items: Brand[] | Watch[]
    setBrand?: any
    setWatch?: any
}
//receives list of items either brands or watches
const List = ({ items,setBrand,setWatch }: Props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item-header">
                {setBrand&&(
                    <div className="row" style={{textAlign:"center"}}>
                        <div className="col">ID</div>
                        <div className="col">Nombre</div>
                        <div className="col">Sede</div>
                        <div className="col">Lujoso</div>
                        <div className="col">Fecha</div>
                        <div className="col">Relojes</div>
                        <div className="col">Actualizar</div>
                        <div className="col">Eliminar</div>
                    </div>
                )
                }
                {setWatch&&(
                    <div className="row" style={{textAlign:"center"}}>
                        <div className="col">ID</div>
                        <div className="col">Modelo</div>
                        <div className="col">Fecha de Lanzamiento</div>
                        <div className="col">Precio</div>
                        <div className="col">Código</div>
                        <div className="col" >ID Marca</div>
                        <div className="col">Actualizar</div>
                        <div className="col">Eliminar</div>
                    </div>
                )
                }
            </li>
            {items.map((item) => (

                <li className="list-group-item" key={item.id}>
                    {setBrand? (
                        <ListItem data={item}   setBrand={setBrand} />
                    ):(
                        <ListItem data={item}   setWatch={setWatch} />
                    )}

                </li>
            ))}
        </ul>
    )
}



export default List