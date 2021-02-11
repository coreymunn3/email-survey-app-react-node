import {
  CREATE_SURVEY,
  FETCH_SURVEY,
  SURVEY_LOADING,
  SURVEY_ERROR,
} from '../actions/types';

const initialState = {
  surveys: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SURVEY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SURVEY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_SURVEY:
      return {
        ...state,
        surveys: [...state.surveys, action.payload],
        loading: false,
      };
    case FETCH_SURVEY:
      return {
        ...state,
        surveys: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
