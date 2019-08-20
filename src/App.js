import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import NavBar from './Components/NavBar/NavBar';
import Modal from './Components/Modal/Modal';
import TopFive from './Components/TopFive/TopFive';
import players from './lib/nbaMock';
import PlayerFinder from './Components/PlayerFinder/PlayerFinder'

import './Styles/App/App.css';


class App extends Component {
  render() {
    const teamList = ['LAL', 'BOS', 'GWS', 'ATL', 'SAS', 'CHI', 'PHX'];
    const store = createStore(reducer);
    const nba = require("nba");
    const joselo = nba.stats.playerInfo({PlayerID: 203518}).then(res => console.log(res));
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar teams={teamList}/>
          <Modal/>
          <div className="top-five-container">
            <TopFive players={players} />
            <PlayerFinder />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
