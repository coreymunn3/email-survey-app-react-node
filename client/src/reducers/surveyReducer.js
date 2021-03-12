import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_CURRENT_SURVEY,
  SURVEY_LOADING,
  SURVEY_ERROR,
  FILTER_SURVEYS,
  CLEAR_FILTER,
} from '../actions/types';

const initialState = {
  surveys: [],
  filteredSurveys: null,
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
    case FILTER_SURVEYS:
      return {
        ...state,
        filteredSurveys: state.surveys.filter((survey) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return survey.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredSurveys: null,
      };
    default:
      return state;
  }
};
