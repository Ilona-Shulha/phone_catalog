/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import {
  Routes, Route, useSearchParams,
} from 'react-router-dom';

import {
  getPhones, getTablets, getAccessories,
} from '../../api/processServerData';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { NoResults } from '../../components/NoResults/NoResults';
import { SearchResult } from '../../components/SearchResult/SearchResult';
import { Loader } from '../../components/Loader/Loader';

import './ProductsPage.scss';

export const ProductsPage = ({ productType }) => {
  const [products, setProducts] = useState();
  const [productsCount, setProductsCount] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const perPage = searchParams.get('perPage') || '4';
  const sort = searchParams.get('sort') || 'age';
  const query = searchParams.get('query');

  const getData = () => {
    switch (productType) {
      case 'phones':
        getPhones()
          .then(data => {
            console.log('productType', productType);
            setProducts(data);
            setProductsCount(data.length);
          });
        break;
      case 'tablets':
        getTablets()
          .then(data => {
            console.log('productType', productType);
            setProducts(data);
            setProductsCount(data.length);
          });
        break;
      default:
        getAccessories()
          .then(data => {
            console.log('productType', productType);
            setProducts(data);
            setProductsCount(data.length);
          });
    }
  };

  useEffect(() => {
    getData();
  }, [productType]);

  const getSearchWith = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, value);

      if (key === 'perPage' && currentPage > Math.ceil(productsCount / value)) {
        searchParams.set('page', '1');
      }
    });

    setSearchParams(searchParams);
  };

  return (
    <main className="ProductsPage">
      {/* {console.log('ProductsPage')} */}
      {query && products
        ? (
          <SearchResult
            products={[...products].sort((a, b) => (
              (typeof a[sort] !== 'number')
                ? a[sort].localeCompare(b[sort])
                : a[sort] - b[sort])).filter(el => {
              return el.name.toLowerCase().includes(query.toLowerCase());
            })}
          />
        )
        : (
          <>
            <Breadcrumbs />
            <h2 className="ProductsPage__Title">
              {productType === 'phones'
                ? 'mobile phones'
                : `${productType}` }
            </h2>
            <Loader isLoading={!products} />
            {(products && productsCount === 0)
              && <NoResults category={productType} />}
            {(products && productsCount > 0)
            && (
              <>
                <p className="ProductsPage__ProductCount">
                  {`${productsCount} models`}
                </p>
                <div
                  className="ProductsPage__ViewSelects"
                >
                  <label htmlFor="productsSelect">
                    Sort by
                    <select
                      className="ProductsPage__Select"
                      name="productsSelect"
                      id="productsSelect"
                      value={sort}
                      onChange={(e) => {
                        getSearchWith({ sort: e.target.value });
                      }}
                    >
                      <option value="age">Newest</option>
                      <option value="name">Alphabetically</option>
                      <option value="price">Cheapest</option>
                    </select>
                  </label>
                  <label
                    htmlFor="onPageSelect"
                    className="ProductsPage__OnPageLabel"
                  >
                    Items on page
                    <select
                      name="onPageSelect"
                      id="onPageSelect"
                      className="ProductsPage__Select"
                      value={perPage}
                      onChange={(e) => {
                        getSearchWith({ perPage: e.target.value });
                      }}
                    >
                      <option value="4">4</option>
                      <option value="8">8</option>
                      <option value="16">16</option>
                      <option value={`${productsCount}`}>all</option>
                    </select>
                  </label>
                </div>
                <Routes>
                  <Route
                    index
                    element={(
                      <ProductsList
                        products={[...products].sort((a, b) => (
                          (typeof a[sort] !== 'number')
                            ? a[sort].localeCompare(b[sort])
                            : a[sort] - b[sort])).slice(
                          (currentPage - 1) * perPage, currentPage * perPage,
                        )}
                        // sliderId={currentPage}
                        // perPage={perPage}
                      />
                    )}
                  />
                </Routes>
                {(perPage < productsCount) && (
                  <Pagination
                    productsCount={productsCount}
                    perPage={perPage}
                    getSearchWith={getSearchWith}
                    currentPage={currentPage}
                  />
                )}
              </>
            )}
            {/* }} */}
          </>
        )}
    </main>
  );
};
