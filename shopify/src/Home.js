import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (

        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://miro.medium.com/max/3000/1*k1OZBUe6f8pzEbjlYfYZ9A.png"
            alt="diwali "/>

          <div className="home__row" >
              <Product title='the lean startup' price={399}/>
              <Product/>
              
              </div> 
              <div className="home__row" >
              <Product/>
              <Product/>
              <Product/>
              </div> 
              <div className="home__row" >
              <Product/>
              </div> 
        </div>
        </div>
    )
}

export default Home;
