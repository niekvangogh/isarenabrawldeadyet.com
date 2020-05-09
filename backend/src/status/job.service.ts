import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import HypixelApiService from 'src/hypixel/hypixelApi.service';
import { DataService } from './data.service';

@Injectable()
export class TasksService {

    constructor(
        private readonly hypixelApiService: HypixelApiService,
        private readonly dataService: DataService,
    ) { }

    @Interval(5000)
    async handleCron() {
        const { data } = await this.hypixelApiService.getGameCounts();
        const playerRecord = await this.dataService.getRecord();
        let playerCount: number = null;
        if (data.success) {
            playerCount = data.games?.LEGACY?.modes?.ARENA;
            if (playerCount) {
                this.dataService.cache('playerCount', playerCount);

                if (playerCount > playerRecord) {
                    this.dataService.cache('record', playerCount);
                }
            }
        }
    }
}
