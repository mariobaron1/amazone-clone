import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />

            <div class="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12321342"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51EXcNKQgoL._AC_US218_.jpg"
                />
            </div>

            <div class="home__row">
                <Product
                    id="12321343"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Product
                    id="12321344"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12321345"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41TNmDIIUQL._AC_US218_.jpg"
                />
            </div>

            <div class="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: how Constant Innovation Creates"
                    price={11.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31ypqmJYnRL._AC_US218_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
