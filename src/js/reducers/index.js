import { combineReducers } from 'redux';
import {
	FETCH_ALBUMS_REQUEST,
	FETCH_ALBUMS_FAILURE,
	FETCH_ALBUMS_SUCCESS
} from "../constants/action-types";

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  error: undefined
};

function albumsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      // This time, you may want to display loader in the UI.
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_ALBUMS_SUCCESS:
      // Adding derived albums to state
      return Object.assign({}, state, {
        isFetching: false,
        items: action.albums
      });
    case FETCH_ALBUMS_FAILURE:
      // Providing error message to state, to be able display it in UI.
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default combineReducers({
  albums: albumsReducer
});