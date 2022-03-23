import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Game from './pages/game';
import Login from './pages/login';
import Settings from './pages/settings';
import Feedback from './pages/feedback';
import Ranking from './pages/ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
      <Route path="/settings" component={ Settings } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />
    </Switch>
  );
}
