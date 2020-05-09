import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HypixelApiModule } from './hypixel/hypixelApi.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from 'nestjs-redis';
import { DataService } from './status/data.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      },
    ),
    HypixelApiModule,
    RedisModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    DataService,
  ],
  exports: [
  ],
})
export class AppModule { }
