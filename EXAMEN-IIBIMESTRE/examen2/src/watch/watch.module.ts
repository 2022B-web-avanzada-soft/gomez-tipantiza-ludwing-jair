import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {WatchEntity} from "./watch.entity";
import {WatchService} from "./watch.service";
import {WatchController} from "./watch.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [WatchEntity],
            'default'
        ),
    ],
    providers: [WatchService],
    exports:[WatchService],
    controllers:[WatchController]
})
export class WatchModule{

}