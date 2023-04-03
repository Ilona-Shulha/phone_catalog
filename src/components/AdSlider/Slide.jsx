/* eslint-disable react/jsx-filename-extension */

export const Slide = ({ num, isActive }) => {
  return (
    <img
      hidden={!isActive}
      src={`./img/app-top-slide-${num}.jpg`}
      alt={`slide${num}`}
      className={`AdSlider__SlideImg AdSlider__SlideImg--${num}`}
    />
  );
};
