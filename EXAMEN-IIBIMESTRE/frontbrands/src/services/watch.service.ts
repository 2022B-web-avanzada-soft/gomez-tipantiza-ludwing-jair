export interface Watch{
    id: number;
    model: string;
    release: string;
    price: number;
    code: number;
    brand:number;
}
const url = "http://localhost:3000/"
export class WatchService {
    async getWatches(): Promise<Watch[]> {
        const response = await fetch(url+"watch")
        const watch = await response.json() as Watch[]
        return watch;
    }
    async getWatch(id:number): Promise<Watch> {
        const response = await fetch(url+"watch/"+id.toString())
        const watch =  await  response.json()
        return watch;
    }
    static async   deleteComputador(id: number){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch(url + "watch/" + id.toString()+"/", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async   updateComputador(id: number, watch:Watch){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(watch),
        };
        await fetch(url + "watch/" + id.toString()+"/", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }
    static async   createComputer(watch:Watch){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(watch),
        };
        await fetch(url + "watch", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

}