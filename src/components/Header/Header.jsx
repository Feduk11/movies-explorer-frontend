import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';



function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const pasteActiveClass = (path) => {
    return location.pathname === path ? 'hamburger-menu__link_active' : '';
  };

  const manageMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <button
        className={`header__hamburger-button ${isMenuOpen ? 'header__hamburger-button_hide' : ''}`}
        onClick={manageMenuClick}
      ></button>
      <div
        className={`hamburger-menu__overlay ${isMenuOpen ? 'hamburger-menu__overlay_active' : ''}`}
        onClick={manageMenuClick}
      >
        <button className="hamburger-menu__close-button" onClick={manageMenuClick} />
        <div className="hamburger-menu__content" onClick={(e) => e.stopPropagation()}>
          <nav className="hamburger-menu__links">
            <Link to="/" className={`hamburger-menu__link ${pasteActiveClass('/')}`}>
              Главная
            </Link>
            <Link to="/movies" className={`hamburger-menu__link ${pasteActiveClass('/movies')}`}>
              Фильмы
            </Link>
            <Link to="/saved-movies" className={`hamburger-menu__link ${pasteActiveClass('/saved-movies')}`}>
              Сохранённые фильмы
            </Link>
          </nav>
          <Link to="/profile" className="hamburger-menu__profile">
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  );
}

function Header({ isLoggedIn }) {
  const location = useLocation();

  const modifyHeaderBackground = location.pathname !== '/';

  return (
    <header className={`header ${modifyHeaderBackground ? 'header_dark-background' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" />
        {
          !isLoggedIn ? (
            <ul className="header__list">
              <li><Link to="/signup" className="header__item">Регистрация</Link></li>
              <li><Link to="/signin" className="header__item header__item_button">Войти</Link></li>
            </ul>
          ) : (
            <>
              <Navigation modifyHeaderBackground={modifyHeaderBackground} />
              <HamburgerMenu />
            </>
          )
        }
      </div>
    </header>
  );
}

export default Header;