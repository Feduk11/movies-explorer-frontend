import React from 'react';
import { Navlink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ modifyHeaderBackground }) {

 /* const location = useLocation();

  // Если текущий путь url совпадает, добавляю класс подчёркивания для выделения активной ссылки
  function addActiveClass(path) {
    return location.pathname === path ? 'header__link_active' : '';
}*/

  return (
    <>
      <nav className="header__links">
        <Navlink to="/movies" className={({isActive}) => isActive ? 'header__link_active' : ''}>Фильмы</Navlink>
        <Link to="/saved-movies" /*className={`header__link ${addActiveClass('/saved-movies')}`}*/>Сохранённые фильмы</Link>
      </nav>
      <Link to="/profile" className={`header__link ${modifyHeaderBackground ? 'header__link_dark' : 'header__link_blue'}`}>Аккаунт</Link>
    </>
  );
}

export default Navigation;