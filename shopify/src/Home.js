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
              <Product id="8754567" title='The immortals of meluha ' price={399} rating ={5} image="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTc0NDQ0NTg4NzI1OTcwNTY2/shiva-myth-redefined-in-the-shiva-trilogy-by-amish-tripathy.jpg"/>
              <Product id="4354578" title='iPhone by Apple Inc. 'price={45000} rating={4} image="https://photos.dialcom.lk/big/items/ip12-_3369_jpg"/>
              
              </div> 
              <div className="home__row" >
              <Product id="646534" title='High quality watch for men. Best smartwatch for men.' price={24999} rating={4} image="https://www.bhphotovideo.com/images/images2500x2500/apple_mlck2ll_a_watch_smartwatch_38mm_space_1187206.jpg"/>
              <Product id="742466"title='Discover Degrees full range of

deodorants & antiperspirants ' price={249} rating={5} image="https://n2.sdlcdn.com/imgs/b/s/6/SDL374637059_1-e5e35.jpg"/>
              <Product id="9866878" title='Farmhouse Wood Dining Table ' price={4999} rating={4} image="https://www.woodcraft.ca/wp-content/uploads/2018/10/Spotlight-On-Reclaimed-Wood-Dining-Tables-FEATURE.jpg"/>
              </div> 
              <div className="home__row" >
              <Product id="971356" title=' Grey Wallpaper for walls' price={2999} rating={5} image="https://cdn.shopify.com/s/files/1/0285/1316/products/w0558_1s_Black-grey-textured-rectangular-pattern-tile-wallpaper-Modern-Groove_For-Interior-Walls-7.jpg?v=1602869599"/>
              </div> 
        </div>
        </div>
    )
}

export default Home;
