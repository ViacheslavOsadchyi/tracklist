import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import radioApp from './reducers';
import './App.css';
import './components/TopTracksX';
import TopTracksX from './components/TopTracksX';

const store = createStore(
  radioApp,
  applyMiddleware(logger, thunk),
);

class App extends Component {
  render() {
    console.log(store);

    return (
      <Provider store={store}>
        <div className="App">
          <TopTracksX />
        </div>
      </Provider>
    );
  }
}

export default App;
