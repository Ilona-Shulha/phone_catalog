/* eslint-disable react/jsx-filename-extension */
import { useSearchParams } from 'react-router-dom';
import { ProductsList } from '../ProductsList/ProductsList';

import './SearchResult.scss';

export const SearchResult = ({ products }) => {
  const prodactsCounter = products.length;
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <section className="SearchResult">

      {(prodactsCounter === 0)
        ? (
          <p className="SearchResult__NoResults">
            {`"${query}" not found`}
          </p>
        )
        : (
          <>
            <p className="SearchResult__Counter">
              {`${prodactsCounter} results`}
            </p>
            <ProductsList
              products={products}
            />
          </>
        )}

    </section>

  );
};
