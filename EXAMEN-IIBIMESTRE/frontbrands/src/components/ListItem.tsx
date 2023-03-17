import React from 'react'
import Link from 'next/link'


import {Brand} from "@/interfaces/Brand";
import {Watch} from "@/interfaces/Watch";
import {BrandService} from "@/services/brand.service";
import {WatchService} from "@/services/watch.service";

type PropsA = {
    data: Brand | Watch
    setBrand?: any
    setWatch?: any
}
const borrarBrand = (id: number) => {
    return BrandService.deleteBrand(id);
}

const borrarWatch = (idComponente: number) => {
    return WatchService.deleteWatch(idComponente)
}
const ListItem = ({data, setBrand, setWatch}: PropsA) => {
    return (<>
        {setBrand ? (
            <div className="row" style={{textAlign: "center"}}>
                <div className="col">{data.id}</div>
                {("nameBrand" in data) && (
                    <div className="col">{data.nameBrand}</div>

                )}
                {("headquarters" in data) && (
                    <div className="col">{data.headquarters}</div>

                )}
                {("isLuxury" in data) && (
                    <div className="col">{data.isLuxury}</div>

                )}
                {("foundedDate" in data) && (
                    <div className="col">{data.foundedDate}</div>

                )}


                <div className="col">
                    <button className="btn btn-success">
                        <Link href="/brands/[id]/watches" as={`/brands/${data.id}/watches`}
                              style={{textDecoration: "none", color: "white"}}> Ver </Link>
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-success">
                        <Link href="/brands/[id]" as={`/brands/${data.id}`}
                              style={{textDecoration: "none", color: "white"}}> Editar </Link>
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={(e) => {
                        //button to delete
                        borrarBrand(data.id).then(r => alert("Eliminado con éxito"));
                        //update list after delete
                        setBrand((oldBrands: any[]) => {
                            // eliminar la que tiene el id que quieres eliminar
                            // Devolver la nueva versión de la lista de computadoras
                            return oldBrands.filter(
                                (brand) => brand.id !== data.id
                            );
                        });

                    }}>Eliminar
                    </button>
                </div>


            </div>
        ) : (

            <div className="row" style={{textAlign: "center"}}>
                <div className="col">{data.id}</div>
                {("model" in data) && (
                    <div className="col">{data.model}</div>

                )} {("release" in data) && (
                <div className="col">{data.release}</div>

            )}
                {("price" in data) && (
                    <div className="col">{data.price}</div>

                )}

                {("code" in data) && (
                    <div className="col">{data.code}</div>

                )}

                {("brand" in data) && (
                    <div className="col">{data.brand}</div>

                )}
                <div className="col">
                    {("brand" in data) && (
                        <button className="btn btn-success">
                            <Link href="/brands/[id]/watches/[idWatches]"
                                  as={`/brands/${data.brand}/watches/${data.id}`}
                                  style={{textDecoration: "none", color: "white"}}> Editar </Link>
                        </button>
                    )}
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={(e) => {
                        if ("brand" in data) {
                            borrarWatch(data.id).then(r => alert("borrado con éxito"));
                        }
                        setWatch((watchesAnteriores: any[]) => {
                            // Filtrar la lista de computadoras y eliminar la que tiene el id que quieres eliminar
                            // Devolver la nueva versión de la lista de computadoras
                            return watchesAnteriores.filter(
                                (watch) => watch.id !== data.id
                            );
                        });

                    }}>Eliminar
                    </button>
                </div>


            </div>
        )}


    </>)
}


export default ListItem