import React from 'react';
import './Techs.css';

function Techs() {

  const techList = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__content">
          <h3 className="techs__content-title">7 технологий</h3>
          <p className="techs__content-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__list">
            {techList.map((tech, i) =>
              <li key={i} className="techs__list-name">
                {tech}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;