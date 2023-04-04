/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LikeContext } from '../../components/Context/Context';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { SearchResult } from '../../components/SearchResult/SearchResult';

import './Favorites.scss';

export const Favorites = () => {
  const like = useContext(LikeContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <main className="Favorites">
      {query && like.likeProducts.length > 0
        ? (
          <SearchResult
            // eslint-disable-next-line max-len
            products={like.likeProducts.filter(el => el.name.toLowerCase().includes(query.toLowerCase()))}
          />
        )
        : (
          <>
            <Breadcrumbs />
            <h2 className="Favorites__Title">
              Favourites
            </h2>
            <p className="Favorites__Count">
              {`${like.likeProducts.length} items`}
            </p>
            <ProductsList
              products={like.likeProducts}
            />
          </>
        )}
    </main>
  );
};
