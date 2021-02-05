// import action types...

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SURVEY':
      return [...state, action.payload];
    default:
      return state;
  }
};
