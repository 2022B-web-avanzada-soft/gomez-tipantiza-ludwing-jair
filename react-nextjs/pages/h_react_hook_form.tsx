// h_react_hook_form
import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Layout from "../components/Layout";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}
export default function () {
    const [nombre, setNombre] = useState('Jair');

    const {handleSubmit, register, formState: {errors, isValid}, control} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Jair',
                estadoCivil: ''
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }
    return (<>
        <Layout title={'Formulario'}>
            <h1>Formulario con react Hook Form</h1>
            <form onSubmit={handleSubmit(controladorSubmit)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text"
                           className="form-control"
                           placeholder="EJ: Jairsin"
                           id="nombre"
                           {...register('nombre', {
                               required: {
                                   value: true,
                                   message: 'Este campo es obligatorio'
                               },
                               maxLength: {
                                   value: 20, message: 'Longitud maxima de 20'
                               },
                               minLength: {value: 5, message: 'Longitud mínima de 20'},
                               validate: {
                                   soloNumeros: (valorActual) => {
                                       if (Number.isNaN(+valorActual)) {
                                           return 'ingrese solo números';
                                       } else {
                                           return true;
                                       }
                                   }

                               }
                           })}
                           aria-describedby="nombreHelp"/>
                    <div id="nombreHelp" className="form-text">
                        Ingresa tu nombre.
                    </div>
                </div>
                <div className="mb-3">
                    <FormControl fullWidth>
                        <InputLabel id="estadoCivilId">Estado Civil</InputLabel>
                        <Controller
                            control={control}
                            rules={{required: {value: true, message: 'EstadoCivil requerido'}}}

                            name="estadoCivil"
                            render={

                                ({field: {onChange, value, onBlur,}}) => {
                                    return <Select
                                        labelId="estadoCivilId"
                                        id="estadoCivilId"
                                        value={value}
                                        label="Estado Civil"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                    >
                                        <MenuItem value="Soltero">Soltero</MenuItem>
                                        <MenuItem value="Casado">Casado</MenuItem>
                                    </Select>
                                }
                            }
                        />
                        {}
                        {errors.estadoCivil && <div className="alert alert-warning" role="alert">
                            Tiene errores {errors.estadoCivil.message}
                        </div>
                        }
                    </FormControl>
                </div>
                <Button type="submit" disabled={!isValid} variant='outlined'>Submit</Button>
            </form>
        </Layout>

    </>)
}