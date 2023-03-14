import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BrandEntity} from "../brand/brand.entity";

@Entity('Watch')
export class WatchEntity {
    @PrimaryGeneratedColumn()
    id: number;
    // Columna en la bdd
    @Column({
        name: 'model', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    model: string; // nombre campo

    // Columna en la bdd
    @Column({
        name: 'release', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    release: string; // nombre campo
    // Columna bdd
    @Column({
        name: 'price', // nombre campo bdd
        type: 'real', /// tipo campo bdd
        nullable: false, // Si es nullable
        // comentario en la base de datos
    })
    price: number;

    @Column({
        name: 'code', // nombre campo bdd
        type: 'integer', /// tipo campo bdd
        nullable: false, // Si es nullable
        // comentario en la base de datos
    })
    code: number;

    @ManyToOne(
        () => BrandEntity,
        (instanciaPadreEntity) =>
            instanciaPadreEntity.watches,
        {
            nullable: false
        }
    )
    brand: BrandEntity;
}