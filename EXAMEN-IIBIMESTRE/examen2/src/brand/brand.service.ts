import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {BrandEntity} from "./brand.entity";

@Injectable()
export class BrandService {
    constructor(
        @InjectDataSource()
        public dataSource: DataSource
    ) {
    }

    public brandRepository = this.dataSource.getRepository(BrandEntity)

    findParameters(opciones: FindManyOptions<BrandEntity>) {
        return this.brandRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.brandRepository.findOne({
            where: {
                id: id,

            }
        })
    }

    create(brand: BrandEntity) {
        return this.brandRepository.save(brand);
    }

    update(brand: BrandEntity, id: number) {
        return this.brandRepository.save(
            {...brand, id}
        )
    }

    delete(id: number) {
        return this.brandRepository.delete(id);
    }
}