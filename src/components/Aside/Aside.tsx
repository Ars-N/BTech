import React, { FC } from 'react';
import AsideNavList from './AsideNavList';
import './Aside.scss';
import CurrentClub from '../CurrentClub';

const Aside: FC = () => {
  return (
    <aside className="aside">
      <section className="app-title aside_section">
        <h1 className="visually-hidden" tabIndex={-1}>
          bayes coach
        </h1>
        <img src="./img/logo.svg" alt="bayes coach" />
      </section>

      <section className="aside_section">
        <h4 className="section_title">Меню</h4>
        <AsideNavList />
      </section>

      <section className="aside_section">
        <h4 className="section_title">Текущий клуб</h4>
        <CurrentClub />
      </section>

      <button className="feedback_btn flex" type="button">
        <svg height="24" viewBox="0 0 26 24">
          <path
            d="M17.5434 11.0211C18.3384 11.0211 18.9828 10.3767 18.9828 9.58178C18.9828 8.78685 18.3384 8.14243 17.5434 8.14243C16.7485 8.14243 16.1041 8.78685 16.1041 9.58178C16.1041 10.3767 16.7485 11.0211 17.5434 11.0211Z"
            fill="white"
            strokeWidth="0.2"
          />
          <path
            d="M13.1284 11.0211C13.9233 11.0211 14.5678 10.3767 14.5678 9.58178C14.5678 8.78685 13.9233 8.14243 13.1284 8.14243C12.3335 8.14243 11.6891 8.78685 11.6891 9.58178C11.6891 10.3767 12.3335 11.0211 13.1284 11.0211Z"
            fill="white"
            strokeWidth="0.2"
          />
          <path
            d="M8.73827 11.0211C9.5332 11.0211 10.1776 10.3767 10.1776 9.58178C10.1776 8.78685 9.5332 8.14243 8.73827 8.14243C7.94334 8.14243 7.29893 8.78685 7.29893 9.58178C7.29893 10.3767 7.94334 11.0211 8.73827 11.0211Z"
            fill="white"
            strokeWidth="0.2"
          />
          <path
            d="M5.59338 23.0398L5.59974 23.043L5.60648 23.0453L5.6095 23.0463C5.68331 23.0709 5.77066 23.1 5.88613 23.1C6.03597 23.1 6.18053 23.0406 6.29337 22.956L6.29345 22.9561L6.29739 22.9528L12.0734 18.1395H24.4138C24.7914 18.1395 25.0842 17.8467 25.0842 17.469V1.57046C25.0842 1.1928 24.7914 0.9 24.4138 0.9H1.57046C1.1928 0.9 0.9 1.1928 0.9 1.57046V17.469C0.9 17.8467 1.1928 18.1395 1.57046 18.1395H5.48266L5.24078 22.3965C5.21263 22.6609 5.35881 22.9225 5.59338 23.0398ZM6.7083 17.0097L6.70136 17.001L6.69268 16.9941C6.55979 16.8878 6.3893 16.7985 6.20857 16.7985H2.24092V2.24092H23.7929V16.7985H11.8636C11.6911 16.7985 11.5463 16.8564 11.4315 16.9425L11.4315 16.9424L11.4275 16.9458L6.66979 20.9145L6.87854 17.5048C6.90776 17.3153 6.81209 17.1394 6.7083 17.0097Z"
            fill="white"
            strokeWidth="0.2"
          />
        </svg>
        Дать обратную связь
      </button>
    </aside>
  );
};

export default Aside;
