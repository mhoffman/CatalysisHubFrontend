/*
 *
 * PeriodicTableSelector reducer
 *
 */

import {
  DEFAULT_ACTION,
  ELEMENT_CLICKED,
  CLEAR_SELECTION,
} from './constants';

const initialState = {
  selection: '',
};

function periodicTableSelectorReducer(state = initialState, action) {
  let newSelection;
  switch (action.type) {

    case CLEAR_SELECTION:

      return {
        ...state,
        selection: '',
      };
    case ELEMENT_CLICKED:
      if (state.selection.trim() === '') {
        newSelection = action.payload;
      } else if (action.payload.trim() === '') {
        newSelection = state.selection;
      } else {
        newSelection = [state.selection, action.payload].join(' & ');
      }

      return {
        ...state,
        selection: newSelection,
      };
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default periodicTableSelectorReducer;