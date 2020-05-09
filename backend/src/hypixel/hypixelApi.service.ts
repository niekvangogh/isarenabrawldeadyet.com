import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class HypixelApiService {

    private readonly apiKey: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.apiKey = this.configService.get('HYPIXEL_API_KEY');
    }

    public getGameCounts(): Promise<any> {
        return this.httpService.get('/gameCounts', {
            params: {
                key: this.apiKey,
            },
        }).toPromise();
    }
}
