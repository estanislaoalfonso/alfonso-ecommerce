import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {NavBar} from './components/navBar/navBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import {ItemDetailContainer} from './components/itemListContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { Home } from './components/home/home';
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch> 
            <Route exact path = "/"> 
              <Home/>
            </Route>
            <Route exact path = "/category/:categoryId">
              <ItemListContainer/>
            </Route>
            <Route exact path = "/itemListContainer">
                <ItemListContainer/>
            </Route>
            <Route exact path="/itemDetailContainer/:itemDetailId">
                <ItemDetailContainer/>
            </Route>
            <Route exact path = "/cart"> 
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
