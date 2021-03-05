import { createSlice } from '@reduxjs/toolkit';

// export const increase = createAction('increase');
// export const decrease = createAction('decrease');

const initialState = {
  count: 0,
};

// const rtCounter = createReducer(initialState, {
//   [increase]: (state, action) => { state.count += 1; },
//   [decrease]: (state, action) => { state.count -= 1; },
// });

const rtCounter = createSlice({
  name: 'rtCounter',
  initialState,
  reducers: {
    increase: (state, action) => { state.count += 1; },
    decrease: (state, action) => { state.count -= 1; },
    // increase(state, action) { state.count += 1; },
    // decrease(state, action) { state.count -= 1; },
  },
});

export const { increase, decrease } = rtCounter.actions;
export default rtCounter.reducer;