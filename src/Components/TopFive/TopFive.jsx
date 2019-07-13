import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopFiveInCards from './TopFiveInCards/TopFiveInCards';
import TopFiveInRows from './TopFiveInRows/TopFiveInRows';
import { displayTopFive } from '../../actions';

const TopFive = ({ isDisplayingAsRow, onClick, players }) => {
  return (
    <div className="top-five">
      <div onClick={onClick}>
        toggle
      </div>
        {
          isDisplayingAsRow
          ? <TopFiveInCards players={players} />
          : <TopFiveInRows players={players} />
        }
    </div>
  )
}

TopFive.propTypes = {
  players: PropTypes.array.isRequired,
}

export default connect((state) => ({
    isDisplayingAsRow: state.isDisplayingAsRow
  }),
  dispatch => ({
    onClick: event => dispatch(displayTopFive())
  })
)(TopFive);
