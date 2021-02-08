import axios from 'axios';
import { fetchUser } from './authActions';
import { CREATE_SURVEY, SET_LOADING, SURVEY_ERROR } from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
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
    console.log(error);
    dispatch(setError(error));
  }
  // get the new user now
  dispatch(fetchUser());
};

// export const fetchSurveys = () => async (dispatch) => {}
