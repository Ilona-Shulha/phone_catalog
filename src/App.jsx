/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CartContext, LikeContext } from './components/Context/Context';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { Favorites } from './pages/Favorites/Favorites';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import './App.scss';

const useLocalStorage = (key, initialValue) => {
  const valueLocal = localStorage.getItem(key) || '';

  const [value, setValue] = useState((valueLocal.length === 0)
    ? initialValue
    : JSON.parse(valueLocal));

  const saveLocal = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, saveLocal];
};

const App = () => {
  const [cartContent, setCartContent] = useLocalStorage('cartContent', []);
  const [likeProducts, setLikeProducts] = useLocalStorage('likeProducts', []);

  const updateCartContent = (action, component) => {
    switch (action) {
      case 'delAll':
        setCartContent(cartContent.filter(el => el.id !== component.id));
        break;
      case 'del':
        // eslint-disable-next-line max-len
        if (cartContent.some(el => el.id === component.id && el.quantity > 1)) {
          setCartContent(cartContent.map(el => ((el.id === component.id)
            ? {
              el, quantity: el.quantity - 1,
            }
            : el)));
        } else if (cartContent.some(el => el.id === component.id)) {
          setCartContent(cartContent.filter(el => el.id !== component.id));
        }

        break;
      case 'add':
        if (cartContent.some(el => el.id === component.id)) {
          setCartContent(cartContent.map(el => ((el.id === component.id)
            ? {
              ...el, quantity: el.quantity + 1,
            }
            : el)));
        } else {
          setCartContent([...cartContent, component]);
        }

        break;
      default:
        setCartContent([...cartContent]);
    }
  };

  const updateLikeContent = (product) => {
    if (likeProducts.some(el => el.id === product.id)) {
      setLikeProducts(likeProducts.filter(el => el.id !== product.id));
    } else {
      setLikeProducts([...likeProducts, product]);
    }
  };

  return (
    <CartContext.Provider value={{
      cartContent, updateCartContent,
    }}
    >
      <LikeContext.Provider value={{
        likeProducts, updateLikeContent,
      }}
      >
        <Routes>
          <Route path="/phone_catalog/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route
              path="accessories/"
              element={<ProductsPage productType="accessories" />}
            />
            <Route
              path="tablets/*"
              element={<ProductsPage productType="tablets" />}
            />
            <Route
              path="phones/*"
              element={
                <ProductsPage productType="phones" />
              }
            />
            <Route path="/phone_catalog/phones/:id" element={<ProductDetailsPage />} />
            <Route path="tablets/:id" element={<ProductDetailsPage />} />
            <Route path="accessories/:id" element={<ProductDetailsPage />} />
            <Route path=":productType/:id" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </LikeContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
