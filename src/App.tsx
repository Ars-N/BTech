import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MatchReview from './pages/MatchReview';

const App: FC = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/match_review" component={MatchReview} />

        <Redirect from="*" to="/match_review" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
