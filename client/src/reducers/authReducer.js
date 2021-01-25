import { FETCH_USER, ADD_CREDITS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case ADD_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };
    default:
      return state;
  }
};
