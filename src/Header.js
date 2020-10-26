import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket)

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div class="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div class="header__nav">
                <Link to="/login" className="header__link">
                    <div class="header__option">
                        <span className="header__optionLineOne">Hello Mario</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div class="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div class="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div class="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
