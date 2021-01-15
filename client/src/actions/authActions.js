import axios from 'axios';
import { FETCH_USER, LOGOUT } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/currentUser');
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const logOut = () => async (dispatch) => {
  await axios.get('/api/logout');
  dispatch({
    type: LOGOUT,
  });
};
