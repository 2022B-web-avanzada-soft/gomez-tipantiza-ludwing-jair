import { GetStaticProps, GetStaticPaths } from 'next'
import {Brand} from "@/interfaces/Brand";
import Layout from "@/components/Layout";
import ListDetail from "@/components/ListDetail";
import {BrandService} from "@/services/brand.service";


type Props = {
    item?: Brand
    errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
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
            {item && <ListDetail item={item} />}
        </Layout>
    )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on computadoras
    const brand = new BrandService();
    const listaBrands = await brand.getBrands();

    const paths =  listaBrands.map((brand) => ({
        params: { id: brand.id.toString() },

    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const brands = new BrandService();
        const listBrands = await brands.getBrands();
        const item = listBrands.find((brand) => brand.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}