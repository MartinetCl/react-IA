import { Module } from '@nestjs/common';
import { RoomGateway } from './room.gateway';
import ChatGptService from 'src/services/chatGptService';

@Module({
  imports: [],
  controllers: [],
  providers: [RoomGateway, ChatGptService],
})
export class RoomModule {}