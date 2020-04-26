import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HypixelApiModule } from './hypixel/hypixelApi.module';
import { ConfigModule } from '@nestjs/config';
import { DataService } from './status/data.service';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    HypixelApiModule,
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
