import React from 'react';
import PropTypes from 'prop-types';
import NbaConsts from '../../../lib/nbaconstants';

const TopFiveInCards = ({players}) => {
  const {stats} = NbaConsts;

  return (
  <div className = 'top-five-in-cards'>
  {players.map((player, idx) => {
    return(
     <div className = 'player-card' key={idx}>
        <img className = 'player-img' src='/mario.png' alt = ''/>
        <div className = 'player-stats'>
            <div className = 'prop-stats'>{stats.ppg}{player.fgp}</div>
            <div className = 'prop-stats'>{stats.apg}{player.ast}</div>
            <div className = 'prop-stats'>{stats.rpg}{player.rbpg}</div>
            <div className = 'prop-stats'>{stats.ftp}{player.ftp}</div>
        </div>
     </div>
    )}
  )}
  </div>
)};

TopFiveInCards.propTypes = {
  players: PropTypes.array.isRequired,
}

export default TopFiveInCards;
