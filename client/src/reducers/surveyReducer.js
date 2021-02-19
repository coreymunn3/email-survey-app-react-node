import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_CURRENT_SURVEY,
  SURVEY_LOADING,
  SURVEY_ERROR,
} from '../actions/types';

const initialState = {
  surveys: [],
  current: {
    yes: 0,
    no: 0,
    title: null,
    subject: null,
    body: null,
    recipients: [],
  },
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
    case FETCH_SURVEYS:
      return {
        ...state,
        surveys: action.payload,
        loading: false,
      };
    case FETCH_CURRENT_SURVEY:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
