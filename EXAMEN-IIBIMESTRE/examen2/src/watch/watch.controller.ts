import {BrandService} from "../brand/brand.service";
import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from "@nestjs/common";
import {WatchService} from "./watch.service";


@Controller('watch')
export class WatchController{

    constructor(
        private readonly watchService: WatchService
    ) {
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ){
        return this.watchService.create(bodyParams);
    }
    @Get("/")
    @HttpCode(200)
    async find(){
        return this.watchService.find({
            relations:['brand']
        })
    }
    @Get("/brand/:idBrand") // GET /usuario/1
    @HttpCode(200)
    findByBrand(
        @Param() params
    ){
        return this.watchService.findByBrand(+params.idBrand);
    }
    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params) {
        return this.watchService.delete(+params.id);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams) {
        /*
        validaciones
        const nuevoRegistro = new BrandEntity();
        nuevoRegistro.nameBrand = bodyParams.nameBrand;
        nuevoRegistro.foundedDate = bodyParams.foundedDate;
        nuevoRegistro.isLuxury = bodyParams.isLuxury;
        nuevoRegistro.headquarters = bodyParams.headquarters;

        const arregloErrores = await validate(
            nuevoRegistro
        );
        if (arregloErrores.length > 0) {
            console.error({arregloErrores})
            throw  new BadRequestException({
                mensaje: 'Envio mal de datos'
            })
        }

         */

        return this.watchService.update(
            bodyParams,
            +params.id
        );
    }

}