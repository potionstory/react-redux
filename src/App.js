import { AppProvider } from './AppContext';
import ContextCounter from './components/ContextCounter';
import ReduxCounter from './components/ReduxCounter';
import RTCounter from './components/RTCounter';
import Post from './components/Post';

const App = () => {
  return (
    <div>
      <AppProvider>
        <ContextCounter />
      </AppProvider>
      <ReduxCounter />
      <RTCounter />
      <Post />
    </div>
  );
}

export default App;
