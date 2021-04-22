import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';



function Header() {
    return (
        <nav className="header">
            <Link to="/login">
            <h1 className="header__logo">Shopify</h1>
            

            </Link>
            <div className="header__search">
            
            <input type="text" className="header__searchInput"/>
           
            </div>

        </nav>
    );
}

export default Header
