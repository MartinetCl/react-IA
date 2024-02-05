import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { v4 as uuidv4 } from 'uuid';    

interface IResponse {
    username: string;
    response: string;
}

interface ITopic {
    topic: string;
}

interface IPlayer {
    client: Socket, 
    username?: string, 
    score: number,
    id: number 
}

@WebSocketGateway({cors: true})
export class RoomGateway {
  @WebSocketServer()
  server: Socket;

  players:IPlayer[] = [];
  responses: IResponse[] = [];

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleConnection(client: Socket) {
    const id = uuidv4();
    console.log('client connected ', id);
    const player = {
        client: client,
        id: id,
        score: 0
    }
    this.players.push(player);
    this.server.emit('player-info', player)
  }

  handleDisconnect(client: any) {
    console.log('client disconnected ', client.id);
    this.players = this.players.filter((p) => p.id !== client.id);
  }

}