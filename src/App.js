import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {NavBar} from './components/navBar/navBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import {ItemDetailContainer} from './components/itemListContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { Home } from './components/home/home';
import { Error404 } from './components/error404/error404'
import { Footer } from './components/footer/footer';
import {CartProvider} from './context/CartContext';
import ItemList from './components/itemListContainer/itemList';
import { Form } from './components/form/form';


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
              <ItemList/>
            </Route>
            <Route exact path = "/itemListContainer">
                <ItemListContainer/>
            </Route>
            <Route exact path="/itemDetailContainer/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path = "/cart"> 
              <Cart/>
            </Route>
            <Route exact path = "/form"> 
              <Form/>
            </Route>
            <Route> 
              <Error404/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
