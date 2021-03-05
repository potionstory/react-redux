import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counter';

const ReduxCounter = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>ReduxCounter</h1>
      <h2>{count}</h2>
      <button type="button" onClick={onIncrement}>+</button>
      <button type="button" onClick={onDecrement}>-</button>
    </div>
  );
};

export default ReduxCounter;