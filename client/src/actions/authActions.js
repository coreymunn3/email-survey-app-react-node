import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/currentuser');
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const addCredits = (amount) => async (dispatch) => {
  const { data } = await axios.post('/api/currentuser/addcredits', {
    amount,
  });
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};
