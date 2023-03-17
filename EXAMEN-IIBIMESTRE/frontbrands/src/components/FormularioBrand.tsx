
import {useForm} from "react-hook-form";
import {useState} from "react";
import {number} from "prop-types";
import Link from "next/link";
import {Brand} from "@/interfaces/Brand";
import {BrandService} from "@/services/brand.service";

type BrandProps = {
    brand?: Brand;
    children?: React.ReactNode; // incluir children como una propiedad opcional
}
//forms for update and create
export default function ({brand,children}: BrandProps) {

    // manage form
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        //same such as Object
        defaultValues: {
            id: brand? brand.id : 0,
            nameBrand: brand? brand.nameBrand : "",
            headquarters: brand? brand.headquarters : "",
            isLuxury: brand? brand.isLuxury : 1,
            foundedDate: brand? brand.foundedDate : ""

        },
        //TODO idk
        mode: 'all'
    });
    //method for filter if is updtae o create, if in the props exist brand is create
    const actualizarOCrear = async (data: Brand) => {
        if(brand){
            await BrandService.updateBrand(data.id, data);
        }else{
            await BrandService.createBrand(data);
        }
        window.location.href = "/brands";

    }

    //html to show
    return(<>
        <form  onSubmit={handleSubmit(actualizarOCrear)}>
            {brand&&(
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="input"
                           className="form-control"
                           placeholder="Ej: 1234"
                           readOnly
                           value={ brand.id}
                           id = "id"
                           {...register("id")}
                           aria-describedby="id"
                    />
                    {errors.id &&
                        <div className="alert alert-warning" role="alert">
                            Tiene errores: {errors.id.message}
                        </div>
                    }
                </div>
            )}

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: Kevin"
                       id = "nombre"
                       {...register("nameBrand",{required: "Nombre requerido"})}
                       aria-describedby="nombreHelp"
                />
                <div id="nombreHelp" className="form-text">
                    Ingresa tu nombre.
                </div>
                {errors.nameBrand &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.nameBrand.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="fechaVenta" className="form-label">Fecha Venta</label>
                <input type="datetime-local"
                       className="form-control"
                       placeholder="Ej: fechaVenta"
                       id = "fechaVenta"
                       {...register("foundedDate")}
                       aria-describedby="mensajeHelp"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa la Fecha
                </div>
                {errors.foundedDate &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.foundedDate.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="disponibilidad" className="form-label">Disponibilidad</label>
                <br></br>
                <input type="radio"
                       id="disponible"
                       {...register("isLuxury")}
                       value="0"
                    // valor predeterminado verdadero
                />
                <label htmlFor="disponible">Sí</label>

                <input type="radio"
                       id="no-disponible"
                       {...register("isLuxury")}
                       value="1"
                       defaultChecked
                />
                <label htmlFor="disponible">No</label>
                <div id="mensajeHelp" className="form-text">
                    Disponible:
                </div>

                {errors.isLuxury &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.isLuxury.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="serial" className="form-label">Sede</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: 0001"
                       id = "serial"
                       {...register("headquarters")}
                       aria-describedby="Serial"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa tu Sede
                </div>
                {errors.headquarters &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.headquarters.message}
                    </div>
                }
            </div>
            <button type="submit" className="btn btn-success" disabled={!isValid}>
                Actualizar
            </button>

            <button type="reset"
                    className="btn btn-danger">
                Reset
            </button>
        </form>
    </>)
}