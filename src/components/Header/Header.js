import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux-store/actions';
import ModalAuth from '../ModalAuth/ModalAuth';
import ModalCart from '../ModalCart/ModalCart';

const Header = ({ login, dispatch }) => {

  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isBasketModal, setIsBasketModal] = useState(false);

  let navigate = useNavigate();

  const handleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  const handleBasketModal = () => {
    setIsBasketModal(!isBasketModal);
  }

  const handleLogOut = () => {
    dispatch(logOut());
    navigate(`/`);
  };

  const logo = require('../../assets/img/icon/logo.svg').default;

  return (
    <header className="store-header">
      <div className="container">
        <div className="store-header__wrapper">

          <Link to="/" className="logo">
            <img src={logo} alt="Logo"/>
          </Link>
          
          <label className="store-header__address">
            <input type="text" className="input store-header__input-address" placeholder="Адрес доставки"/>
          </label>

          <div className="store-header__buttons">
            <span className="store-header__user-name">{login}</span>

            {!login && <button className="button button-primary button-auth" onClick={handleLoginModal}>
              <span className="button-auth-svg"></span>
              <span className="button-text">Войти</span>
            </button>}

            {login && 
              <>
                <button className="button button-cart" id="cart-button" onClick={handleBasketModal}>
                  <span className="button-cart-svg"></span>
                  <span className="button-text">Корзина</span>
                </button>

                <button className="button button-primary button-out" onClick={handleLogOut}>
                  <span className="button-text">Выйти</span>
                  <span className="button-out-svg"></span>
                </button>
              </>
            }
          </div>
        </div>
      </div>

      {isLoginModal && <ModalAuth onClose={handleLoginModal}/>}
      {isBasketModal && <ModalCart onClose={handleBasketModal} login={login}/>}
    </header>
  )
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps)(Header);