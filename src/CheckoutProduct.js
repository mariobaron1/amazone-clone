import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, rating, price, title }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div class="checkoutProduct__info">

                <div class="checkoutProduct__title">
                    {title}
                </div>

                <div class="checkoutProduct__price">
                    <p>${price}</p>
                </div>

                <div class="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>

                <button onClick={removeBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
