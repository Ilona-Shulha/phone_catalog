/* eslint-disable react/jsx-filename-extension */
import { ProductCard } from '../ProductCard/ProductCard';

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
          // imageUrl={el.imageUrl}
          // name={el.name}
          // price={el.price}
          // discount={el.discount}
          // screen={el.screen}
          // capacity={el.capacity}
          // ram={el.ram}
          // type={el.type}
        />
      </li>
    ))}
  </ul>
);
