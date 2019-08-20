// const NBA = require('nba');

import {
  DISPLAY_ROW_OR_COLUMN,
  SEARCH_FOR_PLAYER
} from './constants';

export const displayTopFive = () => ({
    type: DISPLAY_ROW_OR_COLUMN,
  });

export const searchForPlayer = (player) => ({
  type: SEARCH_FOR_PLAYER,
})
