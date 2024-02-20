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