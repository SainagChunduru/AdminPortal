import { globalActionTypes } from '../actions/action-types';
const initialState = {
  loaderEnabled: false,
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActionTypes.SHOW_LOADER: {
      return {
        ...state,
        loaderEnabled: true,
      }
    }
    case globalActionTypes.HIDE_LOADER: {
      return {
        ...state,
        loaderEnabled: false,
      }
    }
    default: return state;
  }
}

export default globalReducer;