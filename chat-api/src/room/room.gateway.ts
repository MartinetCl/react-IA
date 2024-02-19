import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { v4 as uuidv4 } from 'uuid';    

export interface IResponse {
    username: string;
    response: string;
}

export interface ITopic {
    topic: string;
}

export interface IPlayer {
    username?: string, 
    score: number,
    id: string 
}

export interface IRoom {
    players: IPlayer[],
    responses: IResponse[],
    topics: ITopic[],
    id: string,
    password?: string
}

@WebSocketGateway({cors: true})
export class RoomGateway implements OnGatewayConnection, OnGatewayDisconnect {
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
    let id = uuidv4();
    console.log('client connected ', id);
    let player: IPlayer = {
        id: id,
        score: 0
    }
    this.players.push(player);
    this.server.emit('player-info', player);
  }

  @SubscribeMessage('set-username')
  handleSetUsername(client: Socket, payload: {id: string, username: string}) {
    let player = this.findPlayerById(payload.id);
    if (payload.username && player) {
      player.username = payload.username;
      this.server.emit('player-info', player);
    }
  }

  @SubscribeMessage('create-room')
  handleCreateRoom(client: Socket, payload: any) {
    let player = this.findPlayerById(client.id);
    let roomId = uuidv4();
    let room: IRoom = { 
        players: [player],
        responses: [],
        topics: [],
        id: roomId,
        password: payload.password
    }
    //emit ? 
  }

  @SubscribeMessage('make-question')
  handleMakeQuestion(client: Socket, payload: any) {
    
  }

  @SubscribeMessage('get-response')
  handleGetResponse(client: Socket, payload: any) {
    
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(client: Socket, payload: any) {
    let player = this.findPlayerById(client.id);
    let room = this.findRoomById(payload.roomId);
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
    return this.players.find((p) => p.id == id);
  }

  private findRoomById(id: string): IRoom {
    return this.rooms.find((r) => r.id === id);
  }

}