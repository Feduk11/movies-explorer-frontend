import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Navigation({ modifyHeaderBackground }) {

  /* Если ссылка активна, изменяю класс для выделения активной ссылки.
     Кнопка профиля меняет цвет фона в соответствии с текущим пути url */
  return (
    <>
      <nav className="header__links">
        <NavLink to="/movies" className={({isActive}) => isActive ? 'header__link_active' : 'header__link'}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => isActive ? 'header__link_active' : 'header__link'}>Сохранённые фильмы</NavLink>
      </nav>
      <Link to="/profile" className={`header__link ${modifyHeaderBackground ? 'header__profile-link_dark' : 'header__profile-link_blue'}`}>Аккаунт</Link>
    </>
  );
}

function HamburgerMenu() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // Управление состоянием гамбургер-меню (открыто/закрыто)
  const manageMenuClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  /* Функционал открытия/закрытия гамбургера. Остановка обработчика клика.
     Если ссылка активна, изменяю класс меняется для подчёркивания активной ссылки */
  return (
    <>
      <button className={`header__hamburger-button ${isHamburgerOpen ? 'header__hamburger-button_hide' : ''}`} onClick={manageMenuClick}></button>
      <div className={`hamburger-menu__overlay ${isHamburgerOpen ? 'hamburger-menu__overlay_active' : ''}`} onClick={manageMenuClick}>
        <button className="hamburger-menu__close-button" onClick={manageMenuClick} />
        <div className="hamburger-menu__content" onClick={(e) => e.stopPropagation()}>
          <nav className="hamburger-menu__links">
            <NavLink to="/" className={({isActive}) => isActive ? 'hamburger-menu__link_active' : 'hamburger-menu__link'}>Главная</NavLink>
            <NavLink to="/movies" className={({isActive}) => isActive ? 'hamburger-menu__link_active' : 'hamburger-menu__link'}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({isActive}) => isActive ? 'hamburger-menu__link_active' : 'hamburger-menu__link'}>Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="hamburger-menu__profile">
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  );
}

function Header({ name, isLoggedIn }) {
  const location = useLocation();
  const modifyHeaderBackground = location.pathname !== '/';

  /* Проверка пути url для изменения цвета контейнера.
     Проверка на авторицаию пользователя.
     Отображение шапки навигации и гамбургер-меню */
  return (
    <header className={`header ${modifyHeaderBackground ? 'header_dark-background' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" />
        {
          name === 'main' && !isLoggedIn ? (
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
