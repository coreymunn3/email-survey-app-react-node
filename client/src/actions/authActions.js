import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/currentUser');
    dispatch({
      type: FETCH_USER,
      payload: data,
    });
  };
};
