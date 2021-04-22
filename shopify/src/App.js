import React from "react";
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
  <Route path="/checkout">
    <h1>Checkout</h1>
  </Route>
  <Router path="/login">
    <h1>Login Page</h1>
  </Router>
  <Router path="/">
    <Header/>
    <h1>
      HOME PAGE!!
    </h1>
  </Router>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
