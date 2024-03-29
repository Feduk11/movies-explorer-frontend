import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Андрей!</h1>
        <form className="profile__form" name="profile">
          <div className="profile__inputs">
            <label className="profile__label">
              Имя
              <input className="profile__input" name="name" type="text" placeholder="Имя" minLength="2" maxLength="30" required />
            </label>
            <span className="profile__input-error name-error">Ошибка</span>
            <label className="profile__label">
              E-mail
              <input className="profile__input" name="email" type="email" placeholder="E-mail" minLength="2" maxLength="30" required />
            </label>
            <span className="profile__input-error email-error">Ошибка</span>
          </div>
          <div className="profile__buttons-container">
            <button type="submit" className="profile__button-edit">Редактировать</button>
            <Link to="/" className="profile__button-logout">Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile;