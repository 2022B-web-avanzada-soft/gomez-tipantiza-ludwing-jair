import {useRouter} from "next/router";
import {Watch} from "@/interfaces/Watch";
import {useEffect, useState} from "react";
import {WatchService} from "@/services/watch.service";
import Layout from "@/components/Layout";
import Link from "next/link";
import List from "@/components/List";
import {GetStaticPaths, GetStaticProps} from "next";
import {BrandService} from "@/services/brand.service";

export default  function () {
    const router = useRouter();
    const [watches, setWatches] = useState<Watch[]>([]);


    const obtenerWatches = async () => {
        // Initialize state with fetched data
        const id =    router.query.id?.toString();
        if(id !==undefined) {
            const watchService = new WatchService();
            const items: Watch[] = await watchService.getWatchByBrand(parseInt(id))
            setWatches(items);
        }
    };
    useEffect(() => {
        obtenerWatches();

    },[router.query]);

    return (
        <Layout title="relojes de la marca">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 >Relojes</h1>
                <button className="btn btn-outline-warning" style={{padding:"10px 50px"}}>
                    <Link href="/brands/[id]/watches/create" as={`/brands/${router.query.id?.toString()}/watches/create`} style={{textDecoration:"none", color:"black"}}> Agregar Componente</Link>
                </button>
            </div>

            <List items={watches} setWatch={setWatches} />
        </Layout>
    );

};
export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on computadoras
    const brandService = new BrandService();
    const listBrands = await brandService.getBrands();

    const paths = listBrands.map((brand) => ({
        params: { id: brand.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const brand = new BrandService()
        const listBrands = await brand.getBrands();
        const item = listBrands.find((brand) => brand.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item, id } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}