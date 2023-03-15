import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {WatchEntity} from "./watch.entity";

@Injectable()
export class WatchService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }
    public watchRepository= this.datasource.getRepository(WatchEntity);

    find(opciones:FindManyOptions<WatchEntity>){
        return this.watchRepository.find(opciones)
    }
    findOneById(id:number){
        return this.watchRepository.findOne({
            where:{
                id:id
            }
        })
    }
    create(datosCrear:any){
        return this.watchRepository.save(datosCrear)
    }
    update(datosActualizar:any, id:number){
        return this.watchRepository.save({
            ...datosActualizar,id
        })
    }
    delete(id:number){
        return this.watchRepository.delete(id);
    }
}