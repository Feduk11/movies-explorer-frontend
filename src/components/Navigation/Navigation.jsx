import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
        <NavLink to="/movies" className={`header__link ${({isActive}) => isActive ? 'header__link_active' : ''}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" /*className={`header__link ${addActiveClass('/saved-movies')}`}*/>Сохранённые фильмы</NavLink>
      </nav>
      <NavLink to="/profile" className={`header__link ${modifyHeaderBackground ? 'header__link_dark' : 'header__link_blue'}`}>Аккаунт</NavLink>
    </>
  );
}

export default Navigation;