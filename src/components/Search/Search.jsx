/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Search.scss';

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...args);
  };
};

export const Search = ({ pageCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const [visibleQuery, setVisibleQuery] = useState(query);

  const getSearchWith = (value) => {
    if (searchParams.get('query') !== value) {
      if (!value) {
        searchParams.delete('query');
      } else {
        searchParams.set('query', value);
      }

      setSearchParams(searchParams);
    }
  };

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
      }}
    >
      <input
        type="input"
        className="Search__Input"
        placeholder={`Search in ${pageCategory}...`}
        value={visibleQuery}
        onChange={(e) => {
          setVisibleQuery(e.target.value);
          applieQuery(e.target.value);
        }}
      />
      <button
        type="button"
        className="Search__Close"
        data-cy="searchDelete"
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
