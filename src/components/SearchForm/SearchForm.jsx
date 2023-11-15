import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidation from '../hooks/useFormValidation';
import { useLocation } from 'react-router-dom';

function SearchForm({
  isChecked,
  handleCheckBoxClick,
  searchFilm,
  searchRequest,
  isLoading,
}) {
  const { pathname } = useLocation();
  const [isValid, setIsValid] = React.useState(true);
  const { inputValues, isFormValid, handleChange, updateForm } =
    useFormValidation();

  React.useEffect(() => {
    if (pathname === '/saved-movies') {
      updateForm({ search: '' });
    } else {
      updateForm({ search: searchRequest });
    }
  }, [pathname, updateForm, searchRequest]);

  function onFormSubmit(event) {
    event.preventDefault();
    if (isFormValid) {
      setIsValid(true);
      searchFilm(event.target.search.value);
    } else {
      setIsValid(false);
    }
  }

  function handleInputModifi(event) {
    handleChange(event);
    setIsValid(true);
  }

  return (
    <section className="movies__search search" aria-label="Форма поиска">
      <div className="search__container">
        <form
          noValidate
          className="search__form-group"
          name={'SearchForm'}
          onSubmit={onFormSubmit}
        >
          <div className="search__form">
            <input
              type="text"
              name="search"
              placeholder="Фильм"
              className="search__input"
              value={inputValues.search}
              onChange={handleInputModifi}
              required
            />
            <button
              type="submit"
              className="search__button"
              disabled={isLoading}
            ></button>
          </div>
          <FilterCheckbox
            isChecked={isChecked}
            handleCheckBoxClick={handleCheckBoxClick}
          />
        </form>
        <span
          className={`search__error ${!isValid && 'search__error_visible'}`}
        >
          {!isValid && 'Нужно ввести ключевое слово'}
        </span>
      </div>
    </section>
  );
}

export default SearchForm;
