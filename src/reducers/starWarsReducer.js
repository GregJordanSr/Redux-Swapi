import { FETCH_STARWARS_START } from "../actions";
import { FETCH_STARWARS_SUCCESS } from "../actions";
import { FETCH_STARWARS_ERROR } from "../actions";

const initialState = {
  error: '',
  characters: [],
  isLoading: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_STARWARS_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };

    case FETCH_STARWARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };

      case FETCH_STARWARS_ERROR:
        return {
          ...state,
          isLoading: false,
          error: 'NO, NO, NO'
        }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
