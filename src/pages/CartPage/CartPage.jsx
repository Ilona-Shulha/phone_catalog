/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { CartContext } from '../../components/Context/Context';
import { BackButton } from '../../components/BackButton/BackButton';

import './CartPage.scss';

export const CartPage = () => {
  const cart = useContext(CartContext);

  const getActualPrice = component => component.price - component.price * (component.discount / 100);

  return (
    <main className="CartPage">
      <div className="CartPage__BackButton">
        <BackButton />
      </div>
      <h2 className="CartPage__SectionTitle">
        Cart
      </h2>
      {(cart.cartContent.length > 0)
        ? (
          <div className="CartPage__Content">
            <div className="CartPage__Products">
              {cart.cartContent.map(el => (
                <div
                  key={el.id}
                  className="CartPage__Product"
                >
                  <button
                    type="button"
                    data-cy="cartDeleteButton"
                    className="CartPage__DelAllProduct"
                    onClick={
                      () => cart.updateCartContent('delAll', { id: el.id })
                    }
                  >
                    {' '}
                  </button>
                  <img
                    src={`/${el.product.imageUrl}`}
                    alt=""
                    className="CartPage__ProductImg"
                  />
                  <p className="CartPage__ProductName">
                    {el.product.name}
                  </p>
                  <div className="CartPage__Counter">
                    <button
                      type="button"
                      className={classNames('CartPage__DelProduct', {
                        'CartPage__DelProduct--disabled': el.quantity === 1,
                      })}
                      onClick={() => cart.updateCartContent('del', {
                        id: el.id,
                      })}
                    >
                      {' '}
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      type="button"
                      className="CartPage__AddProduct"
                      onClick={() => cart.updateCartContent('add', {
                        id: el.id,
                      })}
                    >
                      {' '}
                    </button>
                  </div>
                  <p className="CartPage__Price">
                    {/* {`$${el.product.price - el.product.price * (el.product.discount / 100)}`} */}
                    {`$${getActualPrice(el.product)}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="CartPage__ShopInfo">
              <div className="CartPage__Total">
                <p className="CartPage__TotalPrice">
                  {`$${cart.cartContent.reduce((acc, current) => acc + getActualPrice(current.product)
                      * current.quantity, 0)}`}
                </p>
                <p
                  className="CartPage__TotalAmount"
                  data-cy="productQauntity"
                >
                  {`Total for ${cart.cartContent.reduce((acc, current) => acc + current.quantity, 0)} items`}
                </p>
              </div>
              <button type="button" className="CartPage__BuyButton">
                Checkout
              </button>
            </div>
          </div>
        )
        : (<p>Your cart is empty</p>)}
    </main>
  );
};
