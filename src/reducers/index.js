import {
  DISPLAY_ROW_OR_COLUMN
} from '../actions/constants';

const initialState = {
  isDisplayingAsRow: false,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROW_OR_COLUMN:
      return { ...state, isDisplayingAsRow: !state.isDisplayingAsRow }
    default:
      return state

  }
}
