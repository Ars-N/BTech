import React, { ChangeEventHandler, FC } from 'react';
import './InputRadio.scss';

interface InputRadioProps {
  name: string;
  player: string;
  isChecked?: boolean;
  onChange: ChangeEventHandler;
}

const InputRadio: FC<InputRadioProps> = ({ name, player, isChecked, onChange }) => (
  <label htmlFor={player} className="container">
    <div className="input-radio__player-data">
      <span>{player}</span>
      <span>00.00</span>
    </div>
    <input onChange={onChange} id={player} type="radio" defaultChecked={isChecked} name={name} />
    <span className="checkmark" />
  </label>
);

export default InputRadio;
