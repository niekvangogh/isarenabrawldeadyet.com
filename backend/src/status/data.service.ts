import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class DataService {

    constructor(
        private readonly redisService: RedisService,
    ) { }

    public async getRecord(): Promise<number> {
        return this.getCachedNumber('record');
    }

    public async getArenaPlayerCount(): Promise<number> {
        return this.getCachedNumber('playerCount');
    }

    public cache(field: string, count: number) {
        this.redisService.getClient().set(field, count);
        this.redisService.getClient().bgsave();
    }

    public async getCachedNumber(field: string) {
        const result: string = await this.redisService.getClient().get('record');
        if (result) {
            return +result;
        }
        return 0;
    }
}
