import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {BrandService} from "./brand.service";
import {BrandEntity} from "./brand.entity";
import {validate} from "class-validator";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";

@Controller('brand')
export class BrandController {
    constructor(
        private readonly brandService: BrandService
    ) {
    }

    @Get("/")
    @HttpCode(200)
    findGeneral(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<BrandEntity> = {
            relations:['watches'],
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<BrandEntity> []
        if (queryParams.nameBrand) {
            consultaWhere.push({
                nameBrand: Like('%' + queryParams.nameBrand + '%'),
                isLuxury: queryParams.isLuxury ? queryParams.isLuxury : undefined,
                headquarters: queryParams.headquarters ? queryParams.headquarters : undefined,
                foundedDate: queryParams.foundedDate ? queryParams.foundedDate : undefined
            })
        }
        if (queryParams.headquarters) {
            consultaWhere.push({
                nameBrand: queryParams.nameBrand ? queryParams.nameBrand : undefined,
                isLuxury: queryParams.isLuxury ? queryParams.isLuxury : undefined,
                headquarters: queryParams.headquarters ? queryParams.headquarters : undefined,
                foundedDate: queryParams.foundedDate ? queryParams.foundedDate : undefined
            })
        }
        if (consultaWhere.length > 0) {
            consulta.where = consultaWhere;
        }
        return this.brandService.findParameters(consulta)

    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        @Param() params) {
        return this.brandService.findOneById(+params.id);
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ){
        return this.brandService.create(bodyParams);
    }


    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params) {
        return this.brandService.delete(+params.id);
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

        return this.brandService.update(
            bodyParams,
            +params.id
        );
    }


}