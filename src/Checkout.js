import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            {basket?.length === 0 ? (
                <h2>kosong</h2>
            ) : (
                    <h2 class="check__title">
                        You shopping cart
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                        )}
                    </h2>
                )}
        </div>
    )
}

export default Checkout
