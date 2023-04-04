import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdSlider } from '../../components/AdSlider/AdSlider';
import {
  getHotPriceProducts, getBrandNewProducts,
} from '../../api/processServerData';
// import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';

import './HomePage.scss';

export const HomePage = () => {
  // const [allProducts, setAllProducts] = useState([]);
  const [hotProducts, setHotProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  // const [shiftActivePart, setShiftActivePart] = useState(0);

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
        // data-cy="categoryLinksContainer"
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
            to="/phones"
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
            to="/tablets"
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
            to="/accessories"
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
