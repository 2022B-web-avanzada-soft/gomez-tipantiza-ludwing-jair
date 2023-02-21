import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {DataSource} from "typeorm";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectDataSource()
        public usuarioRepository: DataSource
    ) {
    }

}