import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import TrackList from './TrackList';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/results' component={TrackList} />
          <Route
            component={() => (
              <h1
                className='ui text container'
                style={{ 'text-align': 'center' }}>
                Sorry, that page does not exist.
              </h1>
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
