import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BrandEntity} from "./brand.entity";
import {BrandController} from "./brand.controller";
import {BrandService} from "./brand.service";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [BrandEntity],
            'default'
        ),
        ],
    providers: [BrandService],
    exports:[BrandService],
    controllers:[BrandController]
})
export class BrandModule{

}