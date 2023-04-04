/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

export const NotFoundPage = ({ product }) => (
  <main className="NotFoundPage">
    <h2 className="NotFoundPage__title">
      {product
        ? `${product} was not found`
        : 'Page not found'}
    </h2>
    <Link
      to="/"
      className="NotFoundPage__ToHomePage"
    >
      Home page
    </Link>
  </main>
);
