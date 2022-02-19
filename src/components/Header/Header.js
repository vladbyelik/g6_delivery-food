import React from 'react';

const Header = () => {

  const logo = require('../../assets/img/icon/logo.svg').default;

  return (
    <header className="store-header">
      <div className="container">
        <div className="store-header__wrapper">

          <a href="/" className="logo">
            <img src={logo} alt="Logo"/>
          </a>
          
          <label className="store-header__address">
            <input type="text" className="input store-header__input-address" placeholder="Адрес доставки"/>
          </label>

          <div className="store-header__buttons">
            <span className="store-header__user-name"></span>

            <button className="button button-primary button-auth">
              <span className="button-auth-svg"></span>
              <span className="button-text">Войти</span>
            </button>
            <button className="button button-cart" id="cart-button">
              <span className="button-cart-svg"></span>
              <span className="button-text">Корзина</span>
            </button>
            <button className="button button-primary button-out">
              <span className="button-text">Выйти</span>
              <span className="button-out-svg"></span>
            </button>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;