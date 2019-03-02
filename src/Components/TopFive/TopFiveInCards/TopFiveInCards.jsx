import React from 'react';
import PropTypes from 'prop-types';

const TopFiveInCards = ({players}) => {
  return (
  <div className = 'top-five-in-cards'>
  {players.map((player, idx) => {
    return(
     <div className = 'player-card' key={idx}>
        <img className = 'player-img' src='/mario.png' alt = ''/>
        <div className = 'player-stats'>
            <div className = 'prop-stats'>{player.ppg}</div>
            <div className = 'prop-stats'>{player.fgp}</div>
            <div className = 'prop-stats'>{player.ast}</div>
            <div className = 'prop-stats'>{player.rbpg}</div>
            <div className = 'prop-stats'>{player.fgp3}</div>
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
