import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                <div class="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div class="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>

                <img src={image} alt="" />
                <button onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
