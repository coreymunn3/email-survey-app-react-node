import axios from 'axios';
import { FETCH_USER, ADD_CREDITS } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/currentuser');
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const addCredits = (amount) => async (dispatch) => {
  dispatch({
    type: ADD_CREDITS,
    payload: amount,
  });
};
