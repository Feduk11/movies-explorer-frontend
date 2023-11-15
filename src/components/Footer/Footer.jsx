import React from 'react';
import './Footer.css';

// Узнаю текущий год
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__data">&copy; {currentYear}</p>
        <nav className="footer__links">
          <a
          href="https://practicum.yandex.ru"
          className="footer__link"
          rel="noreferrer"
          target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
          href="https://github.com/Feduk11"
          className="footer__link"
          rel="noreferrer"
          target="_blank">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;