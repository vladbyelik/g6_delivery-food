import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux-store/actions';
import Portal from '../Portal/Portal';

const ModalAuth = ({ onClose, dispatch }) => {

  const [data, setData] = useState({
    login: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(data))
    onClose();
  }

  return (
    <Portal>
      <div className="modal-auth">
        <div className="modal-dialog modal-dialog-auth">
          <button className="close-auth" onClick={onClose}>&times;</button>
          <form id="logInForm" onSubmit={handleSubmit}>
            <fieldset className="modal-body">
              <legend className="modal-title">Авторизация</legend>
              <label className="label-auth">
                <span>Логин</span>
                <input name="login" type="text" value={data.login} onChange={handleChange}/>
              </label>
              <label className="label-auth">
                <span>Пароль</span>
                <input name="password" type="password" value={data.password} onChange={handleChange}/>
              </label>
            </fieldset>
            <div className="modal-footer">
              <div className="footer-buttons">
                <button className="button button-primary button-login" type="submit">Войти</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Portal>
  )
}

export default connect(null)(ModalAuth);