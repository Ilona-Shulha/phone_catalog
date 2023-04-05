/* eslint-disable max-len */
import React, { useEffect, useState, useContext } from 'react';
import { useMatch } from 'react-router-dom';
import classNames from 'classnames';
import {
  getProductDetails, getSuggestedProducts, getProduct,
} from '../../api/processServerData';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import { BackButton } from '../../components/BackButton/BackButton';

import './ProductDetailsPage.scss';
import { CartContext, LikeContext } from '../../components/Context/Context';
import { AdditionalInfo } from '../../components/AdditionalInfo/AdditionalInfo';
import { Loader } from '../../components/Loader/Loader';

export const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState();
  const [aboutProduct, setAboutProduct] = useState();
  const [activeImg, setActiveImg] = useState(0);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const cart = useContext(CartContext);
  const like = useContext(LikeContext);
  const match = useMatch('/:productType/:id');

  useEffect(() => {
    getProduct(match.params.id)
      .then(data => setAboutProduct(data));

    getSuggestedProducts()
      .then(data => setSuggestedProducts(data));

    getProductDetails(match.params.id)
      .then(data => setProductDetails(data))
      .catch(() => setProductDetails('Product was not found'));
  }, []);

  return (
    <main className="ProductDetailsPage">
      <Breadcrumbs />
      <div className="ProductDetailsPage__BackButton">
        <BackButton />
      </div>
      <Loader isLoading={!productDetails} />
      <>
        {(productDetails && typeof productDetails === 'string')
          && (
            <p className="ProductDetailsPage__NotFound">
              Product was not found
            </p>
          )}
        {(productDetails && typeof productDetails !== 'string')
        && (
          <>
            <h1 className="ProductDetailsPage__Title">
              {productDetails.name}
            </h1>
            <section className="ProductDetailsPage__ProductInfo">
              <div className="ProductDetailsPage__Imgs">
                <div className="ProductDetailsPage__References">
                  {productDetails.images.map((el, ind) => (
                    <button
                      className="ProductDetailsPage__Reference"
                      key={el}
                      type="button"
                      onClick={() => setActiveImg(ind)}
                    >
                      <img
                        className="ProductDetailsPage__ReferenceImg"
                        src={`/${el}`}
                        alt="Product reference"
                      />
                    </button>
                  ))}
                </div>
                <div className="ProductDetailsPage__MainImgContainer">
                  {productDetails.images.map((el, ind) => (
                    <img
                      key={el}
                      className="ProductDetailsPage__MainImg"
                      src={`/${el}`}
                      alt="Product reference"
                      hidden={ind !== activeImg}
                    />
                  ))}
                </div>
              </div>
              <div className="ProductDetailsPage__MainInfo">
                <p className="ProductDetailsPage__Price">
                  <span className="ProductDetailsPage__CurrentPrice">
                    {`$${aboutProduct.price - aboutProduct.price * (aboutProduct.discount / 100)}`}
                  </span>
                  <span
                    className="ProductDetailsPage__UnactualPrice"
                    hidden={aboutProduct.discount === 0}
                  >
                    {`$${aboutProduct.price}`}
                  </span>
                </p>
                <div
                  className="ProductDetailsPage__CardButtons"
                >
                  <button
                    type="button"
                    className={classNames('ProductDetailsPage__AddButton', {
                      'ProductDetailsPage__AddButton--added':
                      cart.cartContent.some(el => el.id === aboutProduct.id),
                    })}
                    onClick={() => {
                      cart.updateCartContent('add', {
                        id: aboutProduct.id,
                        quantity: 1,
                        product: aboutProduct,
                      });
                    }}
                  >
                    {
                      (cart.cartContent.some(el => el.id === aboutProduct.id))
                        ? ('Added to cart')
                        : ('Add to cart')
                    }
                  </button>
                  <button
                    type="button"
                    className={classNames('ProductDetailsPage__LikeButton', {
                      'ProductDetailsPage__LikeButton--active':
                      like.likeProducts.some(el => el.id === aboutProduct.id),
                    })}
                    onClick={() => {
                      like.updateLikeContent(aboutProduct);
                    }}
                  >
                    {' '}
                  </button>
                </div>
                <AdditionalInfo
                  screen={aboutProduct.screen}
                  ram={aboutProduct.ram}
                  capacity={aboutProduct.capacity}
                />
              </div>
              <div
                className="ProductDetailsPage__AboutDescription"
                data-cy="productDescription"
              >
                <h3
                  className="ProductDetailsPage__Sibtitle"
                >
                  About
                </h3>
                <p className="ProductDetailsPage__AboutInfo">
                  {productDetails.description}
                </p>
              </div>
              <div className="ProductDetailsPage__AboutTech">
                <h3
                  className="ProductDetailsPage__Sibtitle"
                >
                  Tech specs
                </h3>
                <div className="ProductDetailsPage__Specs">
                  <div className="ProductDetailsPage__Feature">
                    <p className="ProductDetailsPage__FeatureKey">
                      Screen
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {/* {productDetails.screenSize.split(' ').join('" ')} */}
                      {productDetails.display.screenSize}
                    </p>
                  </div>
                  <div className="ProductDetailsPage__Feature">
                    <p className="ProductDetailsPage__FeatureKey">
                      Resolution
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {/* {`${capacity.slice(0, -2)} ${capacity.slice(-2)}`} */}
                      {productDetails.display.screenResolution}
                    </p>
                  </div>
                  <div className="ProductDetailsPage__Feature">
                    <p className="ProductDetailsPage__FeatureKey">
                      Processor
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {/* {`${capacity.slice(0, -2)} ${capacity.slice(-2)}`} */}
                      {productDetails.android.ui}
                    </p>
                  </div>
                  <div
                    className={classNames('ProductDetailsPage__Feature', {
                      'ProductDetailsPage__Feature--disabled':
                      !productDetails.storage.ram,
                    })}
                  >
                    <p
                      className="ProductDetailsPage__FeatureKey"
                    >
                      ram
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {`${productDetails.storage.ram.slice(0, -2)} ${productDetails.storage.ram.slice(-2)}`}
                    </p>
                  </div>
                  <div
                    className={classNames('ProductDetailsPage__Feature', {
                      'ProductDetailsPage__Feature--disabled':
                    !productDetails.storage.flash,
                    })}
                  >
                    <p
                      className="ProductDetailsPage__FeatureKey"
                    >
                      Built in memory
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {`${productDetails.storage.flash.slice(0, -2)} ${productDetails.storage.flash.slice(-2)}`}
                    </p>
                  </div>
                  <div
                    className={classNames('ProductDetailsPage__Feature', {
                      'ProductDetailsPage__Feature--disabled':
                      !productDetails.camera.primary,
                    })}
                  >
                    <p
                      className="ProductDetailsPage__FeatureKey"
                    >
                      Camera
                    </p>
                    <p className="ProductDetailsPage__FeatureValue">
                      {productDetails.camera.primary}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="ProductDetailsPage__SuggestedProducts">
              <ProductsSlider
                allProducts={suggestedProducts}
                title="You may also like"
              />
            </section>
          </>
        )}
      </>
    </main>
  );
};
