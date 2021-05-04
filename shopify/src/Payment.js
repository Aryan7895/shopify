import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';


function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Delivery Address
                        </h3>

                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Gla university</p>
                        <p>Mathura</p>
                    </div>

                </div>
           <div className="payment__section">
               <div className="payment__title">
             <h3>Review items and delivery</h3>
               </div>
               <div className="payment__items">
        {basket.map(item =>(
        
         <CheckoutProduct
         id={item.id}
         title={item.title}
         image={item.image}
         price ={item.price}
         rating={item.rating}
         />
        )    )
        }
               </div>
                    
                </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment method</h3>
                </div>
                <div className="payment__details">

                    
                </div>

                            
                </div>

            </div>
            
        </div>
    )
}

export default Payment
