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
    id: string 
}

interface IRoom {
    players: IPlayer[],
    responses: IResponse[],
    topics: ITopic[],
    id: string,
    password?: string
}

@WebSocketGateway({cors: true})
export class RoomGateway {
  @WebSocketServer()
  server: Socket;

  players:IPlayer[] = [];
  responses: IResponse[] = [];
  rooms: IRoom[] = [];

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

  @SubscribeMessage('set-username')
  handleSetUsername(client: Socket, payload: any) {
    const player = this.findPlayerById(client.id);
    player.username = payload.username;
    this.server.emit('player-info', player);
  }

  @SubscribeMessage('create-room')
  handleCreateRoom(client: Socket, payload: any) {
    const player = this.findPlayerById(client.id);
    const roomId = uuidv4();
    const room: IRoom = { 
        players: [player],
        responses: [],
        topics: [],
        id: roomId,
        password: payload.password
    }
    //emit ? 
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(client: Socket, payload: any) {
    const player = this.findPlayerById(client.id);
    const room = this.findRoomById(payload.roomId);
    if(room) {
        if (room.password && room.password !== payload.password) {
            return;
        }
        room.players.push(player);
        this.server.emit('room-info', room);
    }
  }


  handleDisconnect(client: any) {
    console.log('client disconnected ', client.id);
    this.players = this.players.filter((p) => p.id !== client.id);
  }


  private findPlayerById(id: string): IPlayer {
    return this.players.find((p) => p.id === id);
  }

  private findRoomById(id: string): IRoom {
    return this.rooms.find((r) => r.id === id);
  }

}