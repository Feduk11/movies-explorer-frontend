import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__description">
          <div className="about-project__description-text">
            <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__description-text">
            <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-text">
            <h3 className="about-project__timeline-title about-project__timeline-title_green-background">1 неделя</h3>
            <p className="about-project__timeline-subtitle">Back-end</p>
          </div>
          <div className="about-project__timeline-text">
            <h3 className="about-project__timeline-title about-project__timeline-title_dark-background">4 недели</h3>
            <p className="about-project__timeline-subtitle">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;