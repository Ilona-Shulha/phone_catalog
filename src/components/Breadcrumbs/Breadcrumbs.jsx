/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { Link, useLocation } from 'react-router-dom';

import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');

  return (
    <ul className="Breadcrumbs" data-cy="breadCrumbs">
      {/* {console.log(pathParts)}
      {console.log(pathname)} */}
      <li>
        <Link
          to="/phone_catalog/"
          className="Breadcrumbs__LinkHome"
        >
          {' '}
        </Link>
      </li>
      {pathParts.slice(1).map((el, ind) => (
        <li key={el}>
          {(ind === pathParts.slice(1).length - 1)
            ? (<p className="Breadcrumbs__Item">{el}</p>)
            : (
              <Link
                to={pathParts.slice(0, ind + 2).join('/')}
                className="Breadcrumbs__Item Breadcrumbs__Item--link"
              >
                {el}
              </Link>
            )}
        </li>
      ))}
    </ul>
  );
};
