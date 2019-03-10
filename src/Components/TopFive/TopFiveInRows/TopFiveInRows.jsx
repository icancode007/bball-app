import React from 'react';
import PropTypes from 'prop-types';
import NbaConsts from '../../../lib/nbaconstants';
import Button from '../../Button/Button';

const TopFiveInRows = ({players}) => {
  const {stats} = NbaConsts;
  const btnText = 'Remove';

  return (
    <div className = 'top-five-in-rows'>
      {players.map((player, idx) => {
        return (
          <div className = 'player-row' key={idx}>
            <div className = 'player-stats-for-row'>
              <div className = 'top-idx'>{idx + 1}</div>
              <img className = 'player-img-for-row' src='/mario.png'/>
              <div className = 'prop-stats-for-row'>
                <span className = 'stat'>{stats.ppg}</span>
                  {player.fgp.toFixed(1)}
              </div>
              <div className = 'prop-stats-for-row'>
                <span className = 'stat'>{stats.apg}</span>
                  {player.ast.toFixed(1)}
              </div>
              <div className = 'prop-stats-for-row'>
                <span className = 'stat'>{stats.rpg}</span>
                  {player.rbpg.toFixed(1)}
              </div>
              <div className = 'prop-stats-for-row'>
                <span className = 'stat'>{stats.ftp}</span>
                  {player.ftp.toFixed(1)}
              </div>
              <div className = 'prop-stats-for-row'>
                <span className = 'stat'>{stats.fgp3}</span>
                  {player.fgtp.toFixed(1)}
              </div>
              <Button onClick={() => alert('HEY')} text={btnText} rvmBtn/>
            </div>
          </div>
      );
      })}
    </div>
  );
}

TopFiveInRows.propTypes = {
  players: PropTypes.array.isRequired,
}

export default TopFiveInRows;
