import Link from 'next/link'

import FormularioBrand from "@/components/FormularioBrand";
import Layout from "@/components/Layout";

export default  function () {

    return (
        <Layout title="Users List | Next.js + TypeScript Example">
            <h1>Agregar nueva Marca </h1>
            <FormularioBrand></FormularioBrand>
        </Layout>
    );
};