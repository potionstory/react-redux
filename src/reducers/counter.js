const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increment = () => ({
  type: INCREASE,
});

export const decrement = () => ({
  type: DECREASE,
});

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}

export default counter;