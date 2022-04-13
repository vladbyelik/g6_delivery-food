import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const logo = require(`../../assets/img/icon/logo.svg`).default;
  const instagram = require(`../../assets/img/social/instagram.svg`).default;
  const facebook = require(`../../assets/img/social/fb.svg`).default;
  const vk = require(`../../assets/img/social/vk.svg`).default;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          
          <Link to="/" className="logo footer-logo">
            <img src={logo} alt="logo" />
          </Link>

          <nav className="footer-nav">
            <a href="#" className="footer-link">Ресторанам </a>
            <a href="#" className="footer-link">Курьерам</a>
            <a href="#" className="footer-link">Пресс-центр</a>
            <a href="#" className="footer-link">Контакты</a>
          </nav>
          <div className="social-links">
            <a href="#" target="_blank" className="social-link"><img src={instagram} alt="instagram"/></a>
            <a href="#" target="_blank" className="social-link"><img src={facebook} alt="facebook"/></a>
            <a href="#" target="_blank" className="social-link"><img src={vk} alt="vk"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;