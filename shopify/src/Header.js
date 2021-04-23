import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';



function Header() {
    const[{basket},dispatch]=useStateValue();
    return (
        <nav className="header">
            <Link className="abc" to="/">
            <h1 className="header__logo">Shop</h1>
            <h1 className="header__logo2">ify</h1>
            

            </Link>
            <div className="header__search">
            
            <input type="text" className="header__searchInput"/>
           
            </div>

            <div className="header__nav">
          <Link to="/login" className="header__link"> 
          <div className="header__option">
          <span className="header__lineone">Hello</span>
          <span className="header__linetwo">SignIn</span></div>
          
          
          </Link>
          <Link to="/" className="header__link"> 
          <div className="header__option">
          <span className="header__lineone">Returns</span>
          <span className="header__linetwo">Orders</span></div>
          
          
          </Link>
          <Link to="/" className="header__link"> 
          <div className="header__option">
          <span className="header__lineone">Your</span>
          <span className="header__linetwo">Prime</span></div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionbasket">
                    <span>CART</span>
                    
                    <span className="header__basketcount">{basket?.length}</span>
          
            </div>
            </Link>
     </div>
        </nav>
    );
}

export default Header
