import { Dispatch } from 'redux';
import { ICurrentPlayerId, IGetPlayers, IGetStats, IMetric, IPlayer } from '../types';
import { getPlayers, getStats } from '../../api/fetchData';
import { CURRENT_PLAYER_ID, GET_PLAYERS, GET_STATS } from './actionTypes';

export const selectPlayer = (currentPlayerId: string): ICurrentPlayerId => {
  return {
    type: CURRENT_PLAYER_ID,
    payload: currentPlayerId,
  };
};

export const GetPlayers = (players: IPlayer[]): IGetPlayers => {
  return {
    type: GET_PLAYERS,
    payload: players,
  };
};
export const GetStats = (players: IMetric[]): IGetStats => {
  return {
    type: GET_STATS,
    payload: players,
  };
};
export const asyncGetPlayers = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const players = await getPlayers('1', '1');
      dispatch(GetPlayers(players));
    } catch (e) {
      console.error(e);
    }
  };
};
export const asyncGetStats = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const players = await getStats('1', '1');
      dispatch(GetStats(players));
    } catch (e) {
      console.error(e);
    }
  };
};
