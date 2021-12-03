import { CURRENT_PLAYER_ID, GET_PLAYERS } from '../actions/actionTypes';
import { IPlayers, PlayersActions } from '../types';

const initialState: IPlayers = {
  players: [
    {
      playerId: '1',
      metricsList: [
        { metricName: 'metrics1', value: 3.2 },
        { metricName: 'metrics2', value: 1.0 },
        { metricName: 'metrics3', value: 2.8 },
        { metricName: 'metrics4', value: -2.8 },
        { metricName: 'metrics5', value: -1.5 },
        { metricName: 'metrics6', value: -3.5 },
      ],
    },
    {
      playerId: '2',
      metricsList: [
        { metricName: 'metrics1', value: 1.4 },
        { metricName: 'metrics2', value: 2 },
        { metricName: 'metrics3', value: 1.1 },
        { metricName: 'metrics4', value: -2 },
        { metricName: 'metrics5', value: -1.5 },
      ],
    },
    {
      playerId: '3',
      metricsList: [
        { metricName: 'metrics1', value: -1.2 },
        { metricName: 'metrics2', value: 4.0 },
        { metricName: 'metrics3', value: 1.8 },
        { metricName: 'metrics4', value: -1 },
        { metricName: 'metrics5', value: -2.5 },
      ],
    },
  ],
  currentPlayer: '1',
};

export default function playersReducer(state = initialState, action: PlayersActions): IPlayers {
  switch (action.type) {
    case CURRENT_PLAYER_ID: {
      return {
        ...state,
        currentPlayer: action.payload,
      };
    }
    case GET_PLAYERS: {
      return {
        ...state,
        players: action.payload,
      };
    }

    default:
      return state;
  }
}
