import React from "react";
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
  <Route path="/checkout">
   <Header/>
    <h1>Checkout</h1>
    
  </Route>
  <Router path="/login">
    <h1>Login Page</h1>
  </Router>
  <Router path="/">
    <Header/>
    <Home/>
    
    
  </Router>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
