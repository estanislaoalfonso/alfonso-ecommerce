import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {NavBar} from './components/navBar/navBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import {ItemDetailContainer} from './components/itemListContainer/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path = "/">
          <div className = "App">
            <NavBar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
