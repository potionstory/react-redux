import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, getPostRequest } from '../reducers/post';

const Post = () => {
  const { data } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onPostRequest = () => {
    dispatch(getPostRequest());
  };

  const onFetchPost = () => {
    dispatch(fetchPost());
  };

  return (
    <div>
      <h1>Post</h1>
      <button type="button" onClick={onPostRequest}>POST 요청</button>
      <button type="button" onClick={onFetchPost}>createAsyncThunk 요청</button>
      <ul>
        {data.length !== 0 && data.map(item => {
          const { id, title, body } = item;

          return (
            <li key={id}>
              <span>{id}</span>
              <span>{title}</span>
              <span>{body}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;