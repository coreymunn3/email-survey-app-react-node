import axios from 'axios';
import { fetchUser } from './authActions';
// import types...

export const createSurvey = (formData) => async (dispatch) => {
  const { data } = await axios.post('/api/surveys', formData);
  dispatch({
    type: 'CREATE_SURVEY',
    payload: data,
  });
  // get the new user now
  dispatch(fetchUser());
};
