import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {WatchEntity} from "./watch.entity";
import {BrandEntity} from "../brand/brand.entity";
import {BrandService} from "../brand/brand.service";

@Injectable()
export class WatchService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource,
    ) {
    }

    public watchRepository = this.datasource.getRepository(WatchEntity);
    public brandRepository = this.datasource.getRepository(BrandEntity)

    find(opciones: FindManyOptions<WatchEntity>) {
        return this.watchRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.watchRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async findByBrand(idBrand: number) {
        let brandRecibido: BrandEntity;
        brandRecibido = await
            this.brandRepository.findOne({
            where: {
                id: idBrand
            }
        })
        return this.watchRepository.find({
            where: {
                brand: brandRecibido
            },
            relations:['brand']
        })
    }

    create(datosCrear: any) {
        return this.watchRepository.save(datosCrear)
    }

    update(datosActualizar: any, id: number) {
        return this.watchRepository.save({
            ...datosActualizar, id
        })
    }

    delete(id: number) {
        return this.watchRepository.delete(id);
    }
}