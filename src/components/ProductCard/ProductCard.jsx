/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { CartContext, LikeContext } from '../Context/Context';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';

import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  const {
    imageUrl, name, price, discount, screen, capacity, ram, type, id,
  } = product;
  const [typeProduct, setTypeProduct] = useState('');
  const cart = useContext(CartContext);
  const like = useContext(LikeContext);

  useEffect(() => {
    switch (type) {
      case 'phone':
        setTypeProduct('phones');
        break;
      case 'tablet':
        setTypeProduct('tablets');
        break;
      default:
        setTypeProduct('accessories');
    }
  }, []);

  return (
    <Link
      to={`/phone_catalog/${typeProduct}/${id}`}
      className="ProductCard"
      data-cy="cardsContainer"
    >
      <div
        className="ProductCard__MainInfo"
      >
        <img
          src={`/phone_catalog/${imageUrl}`}
          alt={name}
          className="ProductCard__Img"
        />
        <p className="ProductCard__Name">
          {name}
        </p>
        <span className="ProductCard__CurrentPrice">
          {`$${price - price * (discount / 100)}`}
        </span>
        <span className="ProductCard__UnactualPrice" hidden={discount === 0}>
          {`$${price}`}
        </span>
      </div>
      <AdditionalInfo
        screen={screen}
        capacity={capacity}
        ram={ram}
      />
      <div className="ProductCard__CardButtons CardButtons">
        <button
          type="button"
          className={classNames('CardButtons__AddButton', {
            'CardButtons__AddButton--added': cart.cartContent.some(el => el.id === id),
          })}
          onClick={(e) => {
            e.preventDefault();
            cart.updateCartContent('add', {
              id,
              quantity: 1,
              product,
            });
          }}
        >
          {
            (cart.cartContent.some(el => el.id === id))
              ? ('Added to cart')
              : ('Add to cart')
          }
        </button>
        <button
          type="button"
          data-cy="addToFavorite"
          className={classNames('CardButtons__LikeButton', {
            'CardButtons__LikeButton--active': like.likeProducts.some(el => el.id === id),
          })}
          onClick={(e) => {
            e.preventDefault();
            like.updateLikeContent(product);
          }}
        />
      </div>
    </Link>
  );
};
