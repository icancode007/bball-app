import React from 'react';
import PropTypes from 'prop-types';

const TopFiveInRows = ({players}) => {
  <div className = 'top-five-in-rows'>
    {players.map((player, idx) => {22
      <div className = 'player-card' key={idx}>
        <img className = 'player-img' src=''/>
        <div className = 'player-stats'>
            {player.ppg}
            {player.}
        </div>
      </div>
    })}
  </div>
}

TopFiveInRows.propTypes = {
  players: PropTypes.array.isRequired,
}

export default TopFiveInRows;
