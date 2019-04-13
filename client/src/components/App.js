import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import TrackList from './TrackList';
import NotFound from './NotFound';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/results' component={TrackList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
