/* eslint-disable react/prop-types */
import React, { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const PageNavLink = ({ to, text }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => classNames('Nav__Link', {
        'Nav__Link--Active': isActive,
      })
    }
  >
    {text}
  </NavLink>
);
