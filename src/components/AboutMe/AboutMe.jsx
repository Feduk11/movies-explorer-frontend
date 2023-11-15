import React from 'react';
import './AboutMe.css';
import AvatarImg from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me page__about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__bio-name">Андрей</h3>
          <h4 className="about-me__bio-role">Фронтенд-разработчик, 26 лет</h4>
          <p className="about-me__description">
          Я родился и живу в г. Новокузнецк, закончил педагогический факультет КемГУ. Я люблю слушать музыку, а ещё увлекаюсь спортом и IT. Нравится заниматься фронтенд-разработкой. В 2019 году получил диплом учителя информатики. По семейным обстоятельствам длительное время работал огнеупорщиком на заводе. Сейчас планирую осуществить давнюю мечту и полностью уйти в разработку сайтов и приложений.
          </p>
          <a
            href="https://github.com/Feduk11"
            target="_blank"
            className="about-me__link"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={AvatarImg} alt="Аватар" className="about-me__pic" />
      </div>
    </section>
  );
}

export default AboutMe;
