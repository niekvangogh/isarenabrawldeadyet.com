import { Controller, Get } from '@nestjs/common';
import { StatusResponse } from './dto/status.response';
import { DataService } from './status/data.service';

@Controller()
export class AppController {

    constructor(
        private readonly dataService: DataService,
    ) { }

    @Get('/status')
    public async getStatus(): Promise<StatusResponse> {
        const playerCount: number = await this.dataService.getArenaPlayerCount();
        const record: number = await this.dataService.getRecord();

        return {
            playerCount,
            record,
        };
    }
}
