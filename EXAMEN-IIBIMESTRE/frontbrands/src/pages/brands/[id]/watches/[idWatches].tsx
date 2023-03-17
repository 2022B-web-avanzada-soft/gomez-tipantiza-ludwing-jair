import {GetStaticProps, GetStaticPaths, GetStaticPathsContext} from 'next'
import Layout from '../../../../components/Layout'
import ListDetail from '../../../../components/ListDetail'

import {useRouter} from "next/router";
import React, {useState} from "react";
import {Brand} from "@/interfaces/Brand";
import {Watch} from "@/interfaces/Watch";
import {WatchService} from "@/services/watch.service";

type Props = {
    item: Brand;
    idBrand: string;
    errors?: string;
}


const StaticPropsDetail = ({item, errors, idBrand}: Props) => {

    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{color: 'red'}}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
                <Layout

                    title={`${
                        item ? item.nameBrand : 'User Detail'
                    } | Next.js + TypeScript Example`}
                >
                    {item && <ListDetail item={item} idBrand={idBrand}/>}
                </Layout>


    )
}

export default StaticPropsDetail
export const getStaticPaths: GetStaticPaths = async () => {
    const watchService = new WatchService()
    const watches = await watchService.getWatches()
    const paths = watches.map((watch) => ({
        params: {idWatches: watch.id.toString(), id: watch.brand.toString()},
    }))

    return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const idBrand = params?.id.toString()
    const idWatch = params?.idWatches.toString()

    const componenteService = new WatchService()
    // @ts-ignore
    const listaComponentes = await componenteService.getWatches();
    const item = listaComponentes.find((componente) => componente.id === Number(idWatch))

    if (!item) {
        return {notFound: true}
    }

    return {props: {item, idBrand}}
}