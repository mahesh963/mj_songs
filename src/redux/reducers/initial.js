import {
  GET_SONGS_COLLECTION,
  GET_SONGS_COLLECTION_ERROR,
} from '../actions/initial.js';

export default function initial(state = {}, action) {
  switch (action.type) {
    case GET_SONGS_COLLECTION:
      return {...state, songsList: action.payload};
    case GET_SONGS_COLLECTION_ERROR:
      return {...state, songsListError: action.payload};
  }
  return state;
}
