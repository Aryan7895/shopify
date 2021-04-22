import React from 'react';
import "./Product.css";

function Product({title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                <small>Rs</small>
                <strong>399</strong></p>
                <div className="product__rating">
                    <p>*</p>
                   
                </div>
            </div>
            <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTc0NDQ0NTg4NzI1OTcwNTY2/shiva-myth-redefined-in-the-shiva-trilogy-by-amish-tripathy.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    );
}

export default Product
