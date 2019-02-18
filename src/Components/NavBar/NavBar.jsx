import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({teams}) => {
  return (
    <nav>
      {
      teams.map((team, idx) => {
        return (<div className={'teamIcon'} key={idx}>{team}</div>);
      })
    }
    </nav>
  )
};

NavBar.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default NavBar;
