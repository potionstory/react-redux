import { createContext, useState } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const value = {
    state: {
      count,
    },
    action: {
      increment,
      decrement,
    },
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };