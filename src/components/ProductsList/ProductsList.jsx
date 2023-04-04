/* eslint-disable react/prop-types */
import React, { ProductCard } from '../ProductCard/ProductCard';

import './ProductsList.scss';

export const ProductsList = ({ products }) => (
  <ul
    className="ProductsList"
    data-cy="productList"
  >
    {products.map(el => (
      <li
        key={el.id}
        className="ProductsList__Item"
      >
        <ProductCard
          product={el}
        />
      </li>
    ))}
  </ul>
);
