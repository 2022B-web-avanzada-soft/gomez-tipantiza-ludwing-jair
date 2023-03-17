import * as React from 'react'
import {Watch} from "@/interfaces/Watch";
import {Brand} from "@/interfaces/Brand";
import FormularioWatch from "@/components/FormularioWatch";
import FormularioBrand from "@/components/FormularioBrand";


type ListDetailProps = {
    item: Brand |Watch
    idBrand? : string
}

const ListDetail = ({ item : artefacto, idBrand }: ListDetailProps) => (
    <div className="col-md-6 mx-auto">
        {("nameBrand" in artefacto) && (
            <div className="col">{artefacto.nameBrand}</div>

        )}
        {("code" in artefacto)?(
            <FormularioWatch watch={artefacto} idBrand={idBrand}></FormularioWatch>

        ) :(
            <FormularioBrand  brand={artefacto} >
            </FormularioBrand>
        )}


    </div>
)

export default ListDetail