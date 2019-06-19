import axios from 'axios';
export const FETCH_STARWARS_START = 'FETCH_STARWARS_START';
export const FETCH_STARWARS_SUCCESS = 'FETCH_STARWARS_SUCCESS';
export const FETCH_STARWARS_ERROR = 'FETCH_STARWARS_ERROR';


export const getStarWars = data => dispatch => {

    dispatch({ type: FETCH_STARWARS_START });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({ type: FETCH_STARWARS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_STARWARS_ERROR }));
}

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
