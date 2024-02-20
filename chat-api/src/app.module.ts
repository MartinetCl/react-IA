import { Module } from '@nestjs/common';
import { RoomGateway } from './room/room.gateway';
import { RoomModule } from './room/app.module';
import { ConfigModule } from '@nestjs/config';
import ChatGptService from './services/chatGptService';

@Module({
  imports: [RoomModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env.local'
  })],
  controllers: [],
  providers: [ChatGptService],
})
export class AppModule { }
