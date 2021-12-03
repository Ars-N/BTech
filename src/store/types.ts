import { CURRENT_PLAYER_ID, GET_PLAYERS, GET_STATS } from './actions/actionTypes';

export interface ICurrentPlayerId {
  type: typeof CURRENT_PLAYER_ID;
  payload: string;
}
export interface IGetPlayers {
  type: typeof GET_PLAYERS;
  payload: IPlayer[];
}
export interface IGetStats {
  type: typeof GET_STATS;
  payload: IMetric[];
}
export type PlayersActions = ICurrentPlayerId | IGetPlayers | IGetStats;

// Store

export interface IPlayers {
  players: IPlayer[];
  currentPlayer: string;
}

// todo перенести в отдельные типы
export interface IMetric {
  metricName: string;
  value: number;
}

export interface IPlayer {
  playerId: string;
  metricsList: IMetric[];
}
