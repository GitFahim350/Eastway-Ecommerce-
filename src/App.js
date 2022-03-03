import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Individual from './components/Individual';
import ProductList from './components/ProductList';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products/:category">
            <ProductList></ProductList>
          </Route>
          <Route path="/product/:id">
            <Individual></Individual>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
