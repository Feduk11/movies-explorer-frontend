import React from 'react';
import './Portfolio.css';

function Portfolio() {

  const portfolioLinks = [
    {url: "https://feduk11.github.io/how-to-learn", text: "Статичный сайт"},
    {url: "https://feduk11.github.io/russian-travel", text: "Адаптивный сайт"},
    {url: "https://feduk11.nomoredomainsrocks.ru", text: "Одностраничное приложение"}
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {portfolioLinks.map((link, i) =>
          <li key={i} className="portfolio__item">
            <a href={link.url} className="portfolio__link" target="_blank" rel="noreferrer">
              {link.text}
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Portfolio;