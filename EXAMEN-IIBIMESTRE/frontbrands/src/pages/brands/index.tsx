import Link from 'next/link'

import {useEffect, useState} from "react";
import {BrandService} from "@/services/brand.service";
import {Brand} from "@/interfaces/Brand";
import Layout from "@/components/Layout";
import List from "@/components/List";

export default function () {
    const [brands, setBrands] = useState<Brand[]>([]);

    const obtenerBrands = async () => {
        // Initialize state with fetched data
        const brands = new BrandService();
        const items: Brand[] = await brands.getBrands();
        setBrands(items);
    };
    useEffect(() => {
        obtenerBrands();
    }, []);

    return (
        <Layout title="Computadoras">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1 style={{marginRight: '10px'}}>Marca </h1>
                <button className="btn btn-outline-warning" style={{padding: "10px 50px"}}>
                    <Link href="/brands/create" style={{textDecoration: "none", color: "black"}}> Agregar Marca</Link>
                </button>
            </div>

            <List items={brands} setBrand={setBrands}/>
        </Layout>
    );
};