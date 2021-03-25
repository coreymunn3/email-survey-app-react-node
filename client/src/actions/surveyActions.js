import axios from 'axios';
import { fetchUser } from './authActions';
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_CURRENT_SURVEY,
  SURVEY_LOADING,
  SURVEY_ERROR,
  FILTER_SURVEYS,
  CLEAR_FILTER,
} from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SURVEY_LOADING,
  });
};

export const setError = (err) => (dispatch) => {
  dispatch({
    type: SURVEY_ERROR,
    payload: err,
  });
};
export const createSurvey = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.post('/api/surveys', formData);
    dispatch({
      type: CREATE_SURVEY,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
  // get the new user now
  dispatch(fetchUser());
};

export const fetchSurveys = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get('/api/surveys');
    dispatch({
      type: FETCH_SURVEYS,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

export const fetchCurrentSurvey = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`/api/surveys/${id}`);
    dispatch({
      type: FETCH_CURRENT_SURVEY,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

export const filterSurveys = (query) => (dispatch) => {
  dispatch({
    type: FILTER_SURVEYS,
    payload: query,
  });
};

export const clearFilter = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTER,
  });
};
