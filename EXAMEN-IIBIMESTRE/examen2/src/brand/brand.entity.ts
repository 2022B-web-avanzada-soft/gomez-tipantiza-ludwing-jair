import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {WatchEntity} from "../watch/watch.entity";

@Entity('Brand')
export class BrandEntity {
    @PrimaryGeneratedColumn()
    id: number;
    // Columna en la bdd
    @Column({
        name: 'nameBrand', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    nameBrand: string; // nombre campo

    // Columna en la bdd
    @Column({
        name: 'foundedDate', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    foundedDate: string; // nombre campo
    // Columna bdd
    @Column({
        name: 'isLuxury', // nombre campo bdd
        type: 'integer', /// tipo campo bdd
        nullable: false, // Si es nullable
        default: 1, // Valor por defecto
        // comentario en la base de datos
    })
    isLuxury: number;

    @Column({
        name: 'headquarters', // nombre campo bdd
        type: 'varchar', /// tipo campo bdd
        length: 50, // longitud
        nullable: false, // Si es nullable
        // comentario en la base de datos
    })
    headquarters: string;


    @OneToMany(
        () => WatchEntity, // Entidad HIJA
        (instanciaWatchEntity) =>
            instanciaWatchEntity.brand) // Campo Relacionado
    watches: WatchEntity[]
}