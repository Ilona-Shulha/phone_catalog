/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import './Search.scss';

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    timerId = setTimeout(f, delay, ...args);
  };
};

export const Search = ({ pageCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.toString());
  const query = searchParams.get('query') || '';
  // const sort = searchParams.get('sort');++
  const [visibleQuery, setVisibleQuery] = useState(query);
  const { pathname } = useLocation();

  const getSearchWith = (value) => {
    console.log(searchParams.toString());
    if (searchParams.get('query') !== value) {
    // Object.entries(params).forEach(([key, value]) => {
      console.log(searchParams.toString(), pathname);
      if (!value) {
        searchParams.delete('query');
      } else {
        searchParams.set('query', value);
        console.log(searchParams.toString(), pathname);
      }
      // });

      setSearchParams(searchParams);
    }
  };
  // const getSearchWith = (params) => {
  //   console.log(searchParams.toString());
  //   // if (searchParams.get(key) !== value) {
  //   // Object.entries(params).forEach(([key, value]) => {
  //   console.log(searchParams.toString(), pathname);
  //   if (!value) {
  //     searchParams.delete(key);
  //   } else {
  //     searchParams.set(key, value);
  //     console.log(searchParams.toString(), pathname);
  //   }
  //   // });

  //   setSearchParams(searchParams);
  //   // }
  // };

  const applieQuery = useCallback(
    debounce(getSearchWith, 1000),
    [pageCategory, searchParams],
  );

  useEffect(() => {
    if (query === '') {
      setVisibleQuery('');
    }
  }, [searchParams]);

  return (
    <form
      action="get"
      className="Search"
      onSubmit={(e) => {
        e.preventDefault();
        // getSearchWith({ query: e.target[0].value });
        // console.log(e.target[0].value);
      }}
    >
      <input
        type="input"
        className="Search__Input"
        placeholder={`Search in ${pageCategory}...`}
        value={visibleQuery}
        onChange={(e) => {
          // e.preventDefault();
          setVisibleQuery(e.target.value);
          // if (searchParams.get('query') !== e.target.value) {
          console.log(searchParams.toString());
          applieQuery(e.target.value);
          // applieQuery({ query: e.target.value });
          // }
        }}
      />
      <button
        type="button"
        className="Search__Close"
        data-cy="searchDelete"
        // hidden={!visibleQuery}
        disabled={!visibleQuery}
        onClick={() => {
          getSearchWith('');
          setVisibleQuery('');
        }}
      >
        {' '}
      </button>
    </form>
  );
};
