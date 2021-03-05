import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../reducers/rtCounter';

const RTCounter = () => {
  const { count } = useSelector(state => state.rtCounter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increase());
  };

  const onDecrement = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <h1>RTCounter</h1>
      <h2>{count}</h2>
      <button type="button" onClick={onIncrement}>+</button>
      <button type="button" onClick={onDecrement}>-</button>
    </div>
  );
}

export default RTCounter;