import React from 'react';
import PropTypes from 'prop-types';
import TopFiveInCards from './TopFiveInCards/TopFiveInCards';

const TopFive = ({ isDisplayingAsRow, players }) => {
  return(
    <div>
      { isDisplayingAsRow ?
        <TopFiveInCards players={players} /> :
        <div className = 'columns'/>
      }
    </div>
  )
}

TopFive.propTypes = {
  isDisplayingAsRow: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
}

export default TopFive;
