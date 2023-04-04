/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import './Pagination.scss';

export const Pagination = ({
  productsCount, perPage, currentPage,
}) => {
  const [pageArr, setPageArr] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const pageNum = Math.ceil(productsCount / perPage);
    const e = [];

    for (let i = 1; i <= pageNum; i += 1) {
      e.push(i);
    }

    setPageArr(e);
  }, [productsCount, perPage]);

  return (
    <ul className="Pagination" data-cy="pagination">
      <li className="Pagination__Item">
        <Link
          to={{ search: searchParams.toString().replace(/page=\w+/, `page=${+currentPage - 1}`) }}
          data-cy="paginationLeft"
          className={
            classNames('Pagination__Button', 'Pagination__Button--prev', {
              'Pagination__Button--disabled': currentPage <= 1,
            })
          }
        >
          {' '}
        </Link>
      </li>
      {pageArr.map(el => (
        <li key={el} className="Pagination__Item Pagination__Item--num">
          <Link
            to={{
              search: (searchParams.toString().includes('page'))
                ? searchParams.toString().replace(/page=\w+/, `page=${el}`)
                : `${searchParams.toString()}&page=${el}`,
            }}
            className={classNames('Pagination__Button', {
              'Pagination__Button--active': +currentPage === el,
            })}
          >
            {el}
          </Link>
        </li>
      ))}
      <li className="Pagination__Item">
        <Link
          to={{
            search: (searchParams.toString().includes('page'))
              ? searchParams.toString().replace(/page=\w+/, `page=${+currentPage + 1}`)
              : `${searchParams.toString()}&page=${+currentPage + 1}`,
          }}
          className={
            classNames('Pagination__Button', 'Pagination__Button--next', {
              'Pagination__Button--disabled': currentPage >= pageArr.length,
            })
          }
          data-cy="paginationRight"
        >
          {' '}
        </Link>
      </li>
    </ul>
  );
};
