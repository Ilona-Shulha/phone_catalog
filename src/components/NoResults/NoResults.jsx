/* eslint-disable react/prop-types */
import React from 'react';
import './NoResults.scss';

export const NoResults = ({ category }) => (
  <>
    <p className="NoResults">
      {`${category} not found`}
    </p>
  </>
);
