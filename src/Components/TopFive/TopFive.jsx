import React from 'react';
import PropTypes from 'prop-types';
import TopFiveInCards from './TopFiveInCards/TopFiveInCards';
import TopFiveInRows from './TopFiveInRows/TopFiveInRows';

const TopFive = ({ isDisplayingAsRow, players }) => {
  return(
    <div>
      { isDisplayingAsRow ?
        <TopFiveInCards players={players} /> :
        <TopFiveInRows players={players} />
      }
    </div>
  )
}

TopFive.propTypes = {
  isDisplayingAsRow: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
}

export default TopFive;
