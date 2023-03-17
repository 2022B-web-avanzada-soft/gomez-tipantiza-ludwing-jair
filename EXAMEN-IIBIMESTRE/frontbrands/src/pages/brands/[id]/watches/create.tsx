import Link from 'next/link'
import Layout from '../../../../components/Layout'

import {useEffect, useState} from "react";

import {useRouter} from "next/router";
import id from "../../[id]";
import {GetStaticPaths, GetStaticProps} from "next";
import FormularioWatch from "@/components/FormularioWatch";
import {Brand} from "@/interfaces/Brand";
import {Watch} from "@/interfaces/Watch";

type Props = {
    item?: Watch|Brand;
    idComputador: string;
    errors?: string;
}

export default  function ({ item, errors, idComputador }: Props) {
    const router = useRouter();
    useEffect(()=>{

    },[router.query])
    return (
        <Layout title="Crear Componente">
            <h1>Guardar nuevo Reloj</h1>
            <FormularioWatch idBrand={router.query.id?.toString()}></FormularioWatch>
        </Layout>
    );
};