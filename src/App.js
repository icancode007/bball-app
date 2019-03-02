import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware  } from 'redux';
// import reducers from './reducers';
// import reduxPromise from 'redux-promise';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import TopFive from './Components/TopFive/TopFive';
import players from './lib/nbaMock';

import './App.css';

class App extends Component {
  render() {
    /*
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    <Provider store={store}>
    </Provider>
    */
    const teamList = ['LAL', 'BOS', 'GWS', 'ATL', 'SAS', 'CHI', 'PHX'];
    return (
      <div className="App">
        <NavBar teams={teamList}/>
        <Modal/>
        <TopFive isDisplayingAsRow={true} players={players}/>
      </div>
    );
  }
}

export default App;
