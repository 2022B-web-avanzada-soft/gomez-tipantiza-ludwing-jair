import {Watch} from "@/services/watch.service";

export interface Brand{
    id:number,
    nameBrand: string;
    foundedDate: string;
    isLuxury: number;
    headquarters: number;
}
const url = "http://localhost:3000/"
export class BrandService {
    async getBrands(): Promise<Brand[]> {
        const response = await fetch(url+"brand")
        const brand = await response.json() as Brand[]
        return brand;
    }
    async getBrand(id:number): Promise<Brand> {
        const response = await fetch(url+"brand/"+id.toString())
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

        await fetch(url + "brand/" + id.toString()+"/", options)
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
        await fetch(url + "brand/" + id.toString()+"/", options)
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
        await fetch(url + "brand", options)
            .then(response => {
                // Manejar la respuesta
            })
            .catch(error => {
                console.log(error);
            });
    }

}