import {
	FETCH_ALBUMS_REQUEST,
	FETCH_ALBUMS_FAILURE,
	FETCH_ALBUMS_SUCCESS
} from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });


export function fetchAlbums() {
  // Instead of plain objects, we are returning function.
  return function(dispatch) {
    // Dispatching REQUEST action, which tells our app, that we are started requesting albums.
    dispatch({
      type: FETCH_ALBUMS_REQUEST
    });
    return fetch('https://itunes.apple.com/us/rss/topalbums/limit=25/json')
      // Here, we are getting json body(in our case it will contain `albums` or `error` prop, depending on request was failed or not) from server response
      // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          // If request was failed, dispatching FAILURE action.
          dispatch({
            type: FETCH_ALBUMS_FAILURE,
            error: body.error
          });
        } else {
          // When everything is ok, dispatching SUCCESS action.
          dispatch({
            type: FETCH_ALBUMS_SUCCESS,
            albums: body
          });
        }
      });
  }
}