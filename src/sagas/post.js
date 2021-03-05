import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { getPostRequest, getPostSuccess, getPostFailure } from '../reducers/post';

function getPostAPI() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function* getPost() {
  try {
    const { data } = yield call(getPostAPI);
    yield put(getPostSuccess(data));
  } catch (error) {
    yield put(getPostFailure(error));
  }
}

function* watchGetPost() {
  yield takeLatest(getPostRequest, getPost);
}

export default function* postSaga() {
  yield all([fork(watchGetPost)]);
}