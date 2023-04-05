/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import {
  Link, Outlet, NavLink, useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import { CartContext, LikeContext } from '../Context/Context';
import { PagesNav } from '../PagesNav/PagesNav';
import { Search } from '../Search/Search';

import './Layout.scss';

export const Layout = () => {
  const cartContent = useContext(CartContext);
  const like = useContext(LikeContext);
  const searchOnPeges = ['phones', 'tablets', 'accessories', 'favorites'];
  const { pathname } = useLocation();
  const visibleSearch = searchOnPeges.find(el => pathname.endsWith(el));

  return (
    <>
      <header className="Header" id="Header">
        <Link
          to="/phone_catalog/"
          className="Logo Header__Logo"
        >
          <img src="img/logo.svg" alt="our company" />
        </Link>
        <PagesNav />
        <div className="ShopingNav Header__ShopingNav">
          {
            (visibleSearch)
              && (
                <Search pageCategory={visibleSearch} />
              )
          }

          <NavLink
            to="/phone_catalog/favorites"
            className={({ isActive }) => classNames('ShopingNav__Link',
              'ShopingNav__Link--favorites', {
                'ShopingNav__Link--active': isActive,
              })}
          >
            <div
              className="ShopingNav__FavoritesQuantity"
              hidden={like.likeProducts.length === 0}
            >
              {like.likeProducts.length}
            </div>
          </NavLink>
          <NavLink
            to="/phone_catalog/cart"
            className={({ isActive }) => classNames('ShopingNav__Link',
              'ShopingNav__Link--cart', {
                'ShopingNav__Link--active': isActive,
              })}
          >
            <div
              className="ShopingNav__ProductsQuantity"
              hidden={cartContent.cartContent.length === 0}
            >
              {cartContent.cartContent.reduce((prev, current) => prev + current.quantity, 0)}
            </div>
          </NavLink>
        </div>
      </header>
      <Outlet />
      <footer className="Footer">
        <a href="#" className="Logo Footer__Logo">
          <img src="img/logo.svg" alt="our company" />
        </a>
        <div className="Nav Footer__Nav">
          <ul className="Nav__List">
            <li className="Nav__Item">
              <a
                href="https://github.com/Ilona-Shulha"
                className="Nav__Link"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >

                github
              </a>
            </li>
            <li className="Nav__Item">
              <Link to="/" className="Nav__Link">
                contacts
              </Link>
            </li>
            <li className="Nav__Item">
              <Link to="/" className="Nav__Link">
                rights
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="#Header"
          className="Footer__ButtonTop"
        >
          {' '}
        </a>
      </footer>
    </>
  );
};
