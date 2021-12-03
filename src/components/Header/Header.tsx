import React, { FC } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header: FC = () => (
  <header className="header flex">
    <h2 className="header_title">Обзор матча</h2>
    <nav className="header_menu">
      <ul className="header_nav-list flex">
        <li className="header_nav-list__item flex">
          <NavLink className="header_menu-link flex" to="/c">
            Сводка
          </NavLink>
        </li>
        <li className="header_nav-list__item">
          <NavLink className="header_menu-link flex" to="/c">
            Составы
          </NavLink>
        </li>
        <li className="header_nav-list__item">
          <NavLink className="header_menu-link flex" to="/match_review/test">
            Подробная статистика
          </NavLink>
        </li>
        <li className="header_nav-list__item">
          <NavLink className="header_menu-link flex" to="/c">
            Анализ матча
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
