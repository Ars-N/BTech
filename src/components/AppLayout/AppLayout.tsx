import React, { FC } from 'react';
import './AppLayout.scss';
import Aside from '../Aside';

const AppLayout: FC = ({ children }) => (
  <>
    <Aside />

    <div className="page">{children}</div>
  </>
);

export default AppLayout;
