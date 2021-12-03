import axios from 'axios';
import { IMetric, IPlayer } from '../store/types';

const instance = axios.create({
  baseURL: '/api/v1/',
});

export const getPlayers = (gameId: string, teamId: string): Promise<IPlayer[]> => {
  return instance.get(`games/${gameId}/lineup/?team_id=${teamId}`);
};

export const getStats = (gameId: string, teamId: string): Promise<IMetric[]> => {
  return instance.get(`stats/features/?game_id=${gameId}&team_id=${teamId}`);
};
