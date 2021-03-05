import { useContext } from 'react';
import AppContext from '../AppContext';

const ContextCounter = () => {
  const { state, action } = useContext(AppContext);
  const { count } = state;
  const { increment, decrement } = action;

  return (
    <div>
      <h1>ContextCounter</h1>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

export default ContextCounter;

