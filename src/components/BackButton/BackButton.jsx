/* eslint-disable react/jsx-filename-extension */
import React, { useNavigate } from 'react-router-dom';

import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="BackButton"
      onClick={() => navigate(-1)}
      data-cy="backButton"
    >
      Back
    </button>
  );
};
