import {Brand} from "@/interfaces/Brand";


const url = "http://localhost:11201/brand"
export class BrandService {
    async getBrands(): Promise<Brand[]> {
        const response = await fetch(url)
        const brand = await response.json() as Brand[]
        return brand;
    }
    async getBrand(id:number): Promise<Brand> {
        const response = await fetch(url+"/"+id.toString())
        const brand =  await  response.json()
        return brand;
    }
    static async   deleteBrand(id: number){
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

    static async   updateBrand(id: number, brand:Brand){
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(brand),
        };
        await fetch(url + "/" + id.toString(), options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }
    static async   createBrand(brand:Brand){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(brand),
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