import React from 'react';
import './Header.css';
// import TeslaLogoSmall from 'url(https://cdn.worldvectorlogo.com/logos/tesla-9.svg)'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                {/* <img src={TeslaLogoSmall} alt=""/> */}
                <span>Tesla</span>
            </div>
            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header
