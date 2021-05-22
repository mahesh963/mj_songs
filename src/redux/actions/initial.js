export const GET_SONGS_COLLECTION = 'GET_SONGS_COLLECTION';
export const GET_SONGS_COLLECTION_ERROR = 'GET_SONGS_COLLECTION_ERROR';

export function getCollection() {
  return async dispatch => {
    const res = await fetch(
      'https://itunes.apple.com/search?term=Michael+jackson',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        return dispatch({
          type: GET_SONGS_COLLECTION,
          payload: responseJson,
        });
      })
      .catch(err => {
        console.log('signUp_123_error', err);
        return dispatch({
          type: GET_SONGS_COLLECTION_ERROR,
          payload: err,
        });
      });
  };
}

export default {
  GET_SONGS_COLLECTION,
  GET_SONGS_COLLECTION_ERROR,
  getCollection,
};
