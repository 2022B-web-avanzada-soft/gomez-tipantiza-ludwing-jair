import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Watch} from "@/interfaces/Watch";
import {WatchService} from "@/services/watch.service";

type WatchProps = {
    watch?: Watch;
    children?: React.ReactNode; // incluir children como una propiedad opcional
    idBrand? : string;
}

export default function ({watch,children, idBrand}: WatchProps) {
    const router = useRouter();

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            id: watch? watch.id : 0,
            model: watch? watch.model : "",
            release: watch? watch.release : "",
            price: watch? watch.price : 0,
            code: watch? watch.code : 0,
            brand: parseInt(idBrand as string),
        },
        mode: 'all'
    });

    const actualizarOCrear = async (data: Watch) => {
        const id = router.query.id?.toString();
        if(watch){

            await WatchService.updateWatch(data.id, data);
        }else{

            await WatchService.createWatch(data);

        }
        window.location.href = "/brands/"+id+"/watches/";

    }
    //TODO idk
    useEffect(()=>{
        console.log(idBrand);
    }, [router.query])


    return(<>
        <form  onSubmit={handleSubmit(actualizarOCrear)}>

            {watch&&(
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Ej: 1234"
                           readOnly
                           value={ watch.id}
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
                       {...register("model",{required: "Modelo requerido"})}
                       aria-describedby="nombreHelp"
                />
                <div id="nombreHelp" className="form-text">
                    Ingresa el modelo.
                </div>
                {errors.model &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.model.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Code</label>
                <input type="number"
                       className="form-control"
                       placeholder="Ej: Acer"
                       id = "marca"
                       {...register("code")}
                       aria-describedby="marca"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa el código
                </div>
                {errors.code &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.code.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: 600.50"
                       id = "precio"
                       {...register("price",{
                           pattern: /^[0-9]+(\.[0-9]{1,2})?$/i,
                       })}
                       aria-describedby="Precio"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa el Precio
                </div>
                {errors.price &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores el precio: {errors.price.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Release</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: Acer"
                       id = "release"
                       {...register("release")}
                       aria-describedby="release"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa la fecha
                </div>
                {errors.release &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.release.message}
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