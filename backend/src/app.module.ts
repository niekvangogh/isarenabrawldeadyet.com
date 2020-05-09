import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';
import { HypixelApiModule } from './hypixel/hypixelApi.module';
import { DataService } from './status/data.service';
import { TasksService } from './status/job.service';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      },
    ),
    HypixelApiModule,
    RedisModule.register({
      url: 'redis://redis',
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    DataService,
    TasksService,
  ],
  exports: [
  ],
})
export class AppModule { }
