import {Watch} from "@/interfaces/Watch";

const url = "http://localhost:11201/watch"
export class WatchService {
    async getWatches(): Promise<Watch[]> {
        const response = await fetch(url)
        const watch = await response.json() as Watch[]
        return watch;
    }

    async getWatchByBrand(id:number): Promise<Watch[]> {
        const response = await fetch(url+"/brand/"+id.toString())
        const watch =  await  response.json()
        return watch;
    }
    static async   deleteWatch(id: number){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch(url + "/" + id.toString(), options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async   updateWatch(id: number, watch:Watch){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(watch),
        };
        await fetch(url + "/" + id.toString(), options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async createWatch(watch: Watch){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(watch),
        };
        await fetch(url, options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

}