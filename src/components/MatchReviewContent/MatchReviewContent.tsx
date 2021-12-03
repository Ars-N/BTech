import React, { FC, useEffect, useState } from 'react';
import './MatchReviewContent.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InputRadio from '../InputRadio';
import PlayerCard from './PlayerCard';
import { PlayerChart } from './PlayerChart';
import { RootReducerType } from '../../store';
import { IPlayer } from '../../store/types';
import { asyncGetPlayers, asyncGetStats, selectPlayer } from '../../store/actions/playersActions';

const MatchReviewContent: FC = () => {
  const dispatch = useDispatch();
  const players = useSelector<RootReducerType, IPlayer[]>((state) => state.players.players);
  const currentPlayer = useSelector<RootReducerType, string>(
    (state) => state.players.currentPlayer,
  );

  const [labels, setLabels] = useState<string[]>([]);
  const [metricValues, setMetricValues] = useState<number[]>([]);

  useEffect(() => {
    dispatch(asyncGetPlayers());
    dispatch(asyncGetStats());
  }, [dispatch]);

  useEffect(() => {
    setLabels([]);
    setMetricValues([]);
    players.forEach(({ playerId, metricsList }) => {
      if (playerId === currentPlayer) {
        metricsList.forEach(({ metricName, value }) => {
          setLabels((prev) => [...prev, metricName]);
          setMetricValues((prev) => [...prev, value]);
        });
      }
    });
  }, [currentPlayer, players]);

  return (
    <div className="match-review-content">
      <header className="match-review-content_header">
        <nav>
          <ul className="flex">
            <li>
              <NavLink className="match-review-content_nav__link flex" to="/any">
                Атака
              </NavLink>
            </li>
            <li>
              <NavLink className="match-review-content_nav__link flex" to="/any">
                Оборона
              </NavLink>
            </li>
            <li>
              <NavLink className="match-review-content_nav__link flex" to="/any">
                Пасы
              </NavLink>
            </li>
            <li>
              <NavLink className="match-review-content_nav__link flex active" to="/any">
                BT Score
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="BT-Score">
        <div className="select-player">
          <h5 className="select-player_title">Выбрать игрока</h5>

          {players.map((player) => (
            <InputRadio
              key={player.playerId}
              onChange={() => dispatch(selectPlayer(player.playerId))}
              name="radio"
              player={`player${player.playerId}`}
              isChecked={currentPlayer === player.playerId}
            />
          ))}
        </div>

        <div className="player-data">
          <div className="statistics">
            <h5 className="statistics_title">
              Значимость каждого показателя в расчете оценки игрока
            </h5>
            <PlayerCard playerName="E.Ponce" playerRating={8.2} />
          </div>

          <PlayerChart labels={labels} metricValues={metricValues} />
        </div>
      </div>
    </div>
  );
};
export default MatchReviewContent;
