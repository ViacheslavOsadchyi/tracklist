import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from "react-router-dom";
import radioApp from './reducers';
import './App.css';
import './components/TopTracksX';
import TopTracksX from './components/TopTracksX';
import ArtistX from './components/ArtistX';

const store = createStore(
  radioApp,
  applyMiddleware(logger, thunk),
);

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={TopTracksX} />
            <Route path="/artist/:name" component={ArtistX} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
