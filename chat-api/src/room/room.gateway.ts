import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";
import ChatGptService from "src/services/chatGptService";
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
    difficulty: number,
    topics: ITopic[],
    gameIsStarted:boolean,
    id: string,
    password?: string
}

@WebSocketGateway({cors: true})
export class RoomGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Socket;
  chatGptService: ChatGptService;

  players:IPlayer[] = [];
  responses: IResponse[] = [];
  rooms: IRoom[] = [];

  public constructor(chatGptService: ChatGptService) { 
    this.chatGptService = chatGptService;
  }

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
  handleCreateRoom(client: Socket, payload: {topics: ITopic[], difficulty: number, password?: string}) {
    let roomId = uuidv4();
    let room: IRoom = { 
        players: [],
        responses: [],
        topics: payload.topics,
        difficulty: payload.difficulty,
        gameIsStarted: false,
        id: roomId,
    }
    if (payload.password) {
        room.password = payload.password;
    }
    this.rooms.push(room);
    this.server.emit('room-info', room); 
  }

  @SubscribeMessage('make-question')
  async handleMakeQuestion(client: Socket, payload: any) {
    try {
      let question = await this.chatGptService.askQuestion(payload.topic, payload.difficulty);
      this.server.emit('question', question);
    } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API ChatGPT:', error);
    }
  }

  @SubscribeMessage('check-response')
  async handleCheckResponse(client: Socket, payload: any) {
    try {
      let result = await this.chatGptService.askResponse(payload.question, payload.response);
      this.server.emit('result', result);
    } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API ChatGPT:', error);
    }
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