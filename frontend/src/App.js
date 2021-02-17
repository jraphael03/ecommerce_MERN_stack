import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              Ecommerce
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {cartItems.length > 0 && (
                <span className="badge" >{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>

          <Route path="/cart/:id?" component={CartScreen}></Route>    {/* id is optional */}
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path='/' exact component={HomeScreen}></Route>

        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
