import axios from 'axios';
import { FETCH_USER, CREATE_CHECKOUT_SESSION } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/currentuser');
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

// export const handleToken = (token) => async (dispatch) => {

// }
