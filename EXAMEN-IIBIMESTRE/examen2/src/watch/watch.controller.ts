import {BrandService} from "../brand/brand.service";
import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
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

}