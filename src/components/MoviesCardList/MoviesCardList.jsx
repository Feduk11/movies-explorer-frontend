import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import { MOBILE_SCREEN_768, TABLET_SCREEN_980, DESKTOP_SCREEN_1150, DESKTOP_XL_SCREEN_1280, DESKTOPXL_INIT_MOVIES_NUM, DESKTOP_INIT_MOVIES_NUM, TABLET_INIT_MOVIES_NUM, MOBILE_INIT_MOVIES_NUM, DESKTOPXL_ADD_MOVIES_NUM, DESKTOP_ADD_MOVIES_NUM, TABLET_ADD_MOVIES_NUM, MOBILE_ADD_MOVIES_NUM } from '../../utils/constants';

function MoviesCardList({
  checkMovie,
  deleteMovie,
  isEmpty,
  isSearched,
  isLoading,
  isSearchError,
  savedMovies,
  filteredMovies,
  isChecked,
  handleCheckBoxClick,
  searchFilm,
  searchRequest,
}) {
  const [publishedMovies, setPublishedMovies] = React.useState(
    publishMovies().base
  );

  function publishMovies() {
    const counter = {};
    if (window.innerWidth >= DESKTOP_XL_SCREEN_1280) {
      counter.base = DESKTOPXL_INIT_MOVIES_NUM;
      counter.step = DESKTOPXL_ADD_MOVIES_NUM;
    }
    if (window.innerWidth <= DESKTOP_SCREEN_1150) {
      counter.base = DESKTOP_INIT_MOVIES_NUM;
      counter.step = DESKTOP_ADD_MOVIES_NUM;
    }
    if (window.innerWidth <= TABLET_SCREEN_980) {
      counter.base = TABLET_INIT_MOVIES_NUM;
      counter.step = TABLET_ADD_MOVIES_NUM;
    }
    if (window.innerWidth <= MOBILE_SCREEN_768) {
      counter.base = MOBILE_INIT_MOVIES_NUM;
      counter.step = MOBILE_ADD_MOVIES_NUM;
    }
    return counter;
  }

  function addMore() {
    setPublishedMovies(publishedMovies + publishMovies().step);
  }

  return (
    <main className="main page__movies movies">
      <SearchForm
        isChecked={isChecked}
        handleCheckBoxClick={handleCheckBoxClick}
        searchFilm={searchFilm}
        searchRequest={searchRequest}
        isLoading={isLoading}
      />
      <section className="movies__section">
        {isLoading ? (
          <Preloader />
        ) : (
          !isEmpty && (
            <>
              <ul className="movies__list">
                {filteredMovies.slice(0, publishedMovies).map((cardData) => (
                  <MoviesCard
                    cardData={cardData}
                    key={cardData.id}
                    checkMovie={checkMovie}
                    deleteMovie={deleteMovie}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <button
                type="button"
                className={`movies__more ${
                  publishedMovies >= filteredMovies.length &&
                  'movies__more_hidden'
                }`}
                onClick={addMore}
              >
                Ещё
              </button>
            </>
          )
        )}
        <span
          className={`${
            isSearchError ? 'movies__error' : 'movies__error_hidden'
          }`}
        >
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </span>
        <span
          className={`${
            filteredMovies <= 0 && isSearched && !isLoading
              ? 'movies__error'
              : 'movies__error_hidden'
          }`}
        >
          Ничего не найдено.
        </span>
      </section>
    </main>
  );
}

export default MoviesCardList;
