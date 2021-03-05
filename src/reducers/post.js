import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'post';

const initialState = {
  isLoading: false,
  data: [],
  fetchText: '',
};

export const fetchPost = createAsyncThunk(`post/fetchPost`,
  async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return data;
  }
);

const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    getPostRequest: (state, action) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getPostFailure: (state, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.fetchText = 'pending';
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.fetchText = 'success';
      state.data = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.fetchText = 'failure';
    },
  }
});

export default postSlice.reducer;
export const { getPostRequest, getPostSuccess, getPostFailure } = postSlice.actions;