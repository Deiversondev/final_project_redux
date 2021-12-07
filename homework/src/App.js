import './App.css';
import Login from './Pages/Login'
import { Provider } from 'react-redux';
import store from './store';
import Routers from './routers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        
         <Routers/>
      </Provider>
    </div>
  );
}

export default App;
