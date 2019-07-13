import React from 'react';
import Button from '../../Button/Button';
import NbaConsts from '../../../lib/nbaconstants';
import PropTypes from 'prop-types';

const TopFiveInCards = ({players, onClick}) => {
  const { stats } = NbaConsts;
  const btnText = "Remove";
  return (
    <div className = 'top-five-in-cards'>
      {players.map((player, idx) => {
        return(
         <div className = 'player-card' key={idx}>
            <img className = 'player-img' src='/mario.png' alt = 'placeholder' />
            <div className = 'player-stats'>
                <div className = 'prop-stats'>{stats.ppg}{player.fgp}</div>
                <div className = 'prop-stats'>{stats.apg}{player.ast}</div>
                <div className = 'prop-stats'>{stats.rpg}{player.rbpg}</div>
                <div className = 'prop-stats'>{stats.ftp}{player.ftp}</div>
                <Button onClick={() => alert('HEY')} text={btnText} rvmBtn />
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
