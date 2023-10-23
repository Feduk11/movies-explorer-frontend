import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { BASE_URL } from '../../../utils/constants';
import { formatDuration } from '../../../utils/durationFormat';

function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  const changeButtonBg = location.pathname === '/saved-movies';

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className="movie">
      <img src={`${BASE_URL}${movie.image.url}`} alt={`Постер фильма ${movie.nameRU}`} className="movie__img" />
      <div className="movie__container">
        <div className="movie__caption">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{formatDuration(movie.duration)}</p>
        </div>
        <button type="button" className={`movie__save-btn ${isSaved ? 'movie__save-btn_active' : ''} ${changeButtonBg ? 'movie__delete-btn' : ''}`} onClick={handleSaveClick} />
      </div>
    </li>
  )
}

export default MoviesCard;