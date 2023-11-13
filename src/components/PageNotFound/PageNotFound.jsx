import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

function Page404() {
  const navigate = useNavigate();

  return (
    <main className="page-error-404">
      <section className="page-error-404__section">
        <h1 className="page-error-404__code">404</h1>
        <p className="page-error-404__title">Страница не найдена</p>
        <button className="page-error-404__button" onClick={() => navigate(-1)}>Назад</button>
      </section>
    </main>
  );
}

export default Page404;