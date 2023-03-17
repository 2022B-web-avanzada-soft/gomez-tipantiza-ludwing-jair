import {Watch} from "@/interfaces/Watch";
import {WatchService} from "@/services/watch.service";
import {useEffect, useState} from "react";
import Layout from "@/components/Layout";
import List from "@/components/List";


export default  function () {
    const [watches, setWatches] = useState<Watch[]>([]);

    const obtenerComputadores = async () => {
        // Initialize state with fetched data
        const componentes = new WatchService();
        const items: Watch[] = await componentes.getWatches()
        setWatches(items);
    };
    useEffect(() => {
        obtenerComputadores();
    },[]);

    return (
        <Layout title="Componentes">
            <h1>Relojes </h1>
            <List items={watches} setWatch={setWatches} />
        </Layout>
    );
};
