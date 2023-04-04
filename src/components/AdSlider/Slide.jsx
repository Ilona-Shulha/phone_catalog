/* eslint-disable react/prop-types */
import React from 'react';

export const Slide = ({ num, isActive }) => (
  <img
    hidden={!isActive}
    src={`./img/app-top-slide-${num}.jpg`}
    alt={`slide${num}`}
    className={`AdSlider__SlideImg AdSlider__SlideImg--${num}`}
  />
);
