import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import TrackList from './TrackList';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/results' component={TrackList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
