import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlider } from '../../components/AdSlider/AdSlider';
import {
  getHotPriceProducts, getBrandNewProducts,
} from '../../api/processServerData';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';

import './HomePage.scss';

export const HomePage = () => {
  const [hotProducts, setHotProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    getHotPriceProducts()
      .then(data => setHotProducts(data));
    getBrandNewProducts()
      .then(data => setNewProducts(data));
  }, []);

  return (
    <main className="HomePage">
      <section className="HomePage__HeaderSlider">
        <AdSlider />
      </section>

      <section className="HomePage__HotProducts">
        <ProductsSlider
          allProducts={hotProducts}
          title="Hot prices"
        />
      </section>
      <section
        className="HomePage__ShopByCategory ShopByCategory"
      >
        <h2
          className="ShopByCategory__SectionTitle"
        >
          Shop by category
        </h2>
        <div
          className="ShopByCategory__Categories"
          data-cy="categoryLinksContainer"
        >
          <Link
            className="ShopByCategory__Category"
            to="/phone_catalog/phones"
          >
            <img
              src="./img/category-phones.jpg"
              alt="category-phones"
              className="ShopByCategory__CategoryImg"
            />
            <h4 className="ShopByCategory__CategoryTitle">
              Mobile phones
            </h4>
            <p className="ShopByCategory__CategoryCount">
              95 models
            </p>
          </Link>
          <Link
            className="ShopByCategory__Category"
            to="/phone_catalog/tablets"
          >
            <img
              src="./img/category-tablets.jpg"
              alt="category-tablets"
              className="ShopByCategory__CategoryImg"
            />
            <h4 className="ShopByCategory__CategoryTitle">
              Tablets
            </h4>
            <p className="ShopByCategory__CategoryCount">
              24 models
            </p>
          </Link>
          <Link
            className="ShopByCategory__Category"
            to="/phone_catalog/accessories"
          >
            <img
              src="./img/category-accessories.jpg"
              alt="category-accessories"
              className="ShopByCategory__CategoryImg"
            />
            <h4 className="ShopByCategory__CategoryTitle">
              Accessories
            </h4>
            <p className="ShopByCategory__CategoryCount">
              100 models
            </p>
          </Link>
        </div>
      </section>
      <section className="HomePage__NewProducts">
        <ProductsSlider
          allProducts={newProducts}
          title="Brand new models"
        />
      </section>

    </main>
  );
};
