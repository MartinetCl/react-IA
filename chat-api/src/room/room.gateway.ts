import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";

interface IQuestion {
    question: string;
}

@WebSocketGateway({cors: true})
export class RoomGateway {
  @WebSocketServer()
  server: Socket;

  players: { client: Socket; username: string }[] = [];
  questions: IQuestion[] = [];

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }


}