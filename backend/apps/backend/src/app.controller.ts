import { Controller, Get } from "@nestjs/common";
import HypixelApiService from "./hypixel/hypixelApi.service";
import { StatusResponse } from "./dto/status.response";
import { DataService } from "./status/data.service";

@Controller()
export class AppController {

    constructor(
        private readonly hypixelApiService: HypixelApiService,
        private readonly dataService: DataService,
    ) {
    }

    @Get('/status')
    public async getStatus(): Promise<StatusResponse> {
        const playerCount: number = await this.dataService.getArenaPlayerCount();
        const record: number = this.dataService.getRecord();

        return {
            playerCount: playerCount,
            record,
        };
    }
}