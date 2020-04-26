import { Injectable } from "@nestjs/common";
import HypixelApiService from "src/hypixel/hypixelApi.service";

@Injectable()
export class DataService {

    constructor(
        private readonly hypixelApiService: HypixelApiService,
    ) {

    }

    public getRecord(): number {
        return 38;
    }

    public async getArenaPlayerCount(): Promise<number> {
        const { data } = await this.hypixelApiService.getGameCounts();
        if (data.success) {
            let players: number = data.games?.LEGACY?.modes?.ARENA;
            if (!players) {
                return 0;
            }
            return players;
        }
    }
}