import { Module, HttpService, HttpModule } from "@nestjs/common";
import HypixelApiService from "./hypixelApi.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: configService.get('HYPIXEL_API_URL')
            }),
            inject: [
                ConfigService,
            ],
        }),
    ],
    exports: [
        HypixelApiService,
    ],
    providers: [
        HypixelApiService,
    ],
})
export class HypixelApiModule { }