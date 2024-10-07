import { ADD_SCORE } from './actions';

const initialState = {
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

export default reducer;
