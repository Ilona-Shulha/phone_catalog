/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
// import {
import classNames from 'classnames';
import { useState } from 'react';
import { Slide } from './Slide';
import './AdSlider.scss';

export const AdSlider = () => {
  const [activeNum, setActiveNum] = useState(1);
  const [slideCount] = useState([1, 2, 3]);

  const ChangeActiveNum = (newActiveSlide) => {
    let newValue = newActiveSlide;

    if (newActiveSlide > slideCount.length) {
      newValue = slideCount[0];
    }

    if (newActiveSlide < 1) {
      newValue = slideCount.length;
    }

    setActiveNum(newValue);
  };

  return (
    <section className="AdSlider">
      <div className="AdSlider__Slider">
        <button
          type="button"
          className="AdSlider__Button AdSlider__Button--Prev"
          onClick={() => ChangeActiveNum(activeNum - 1)}
        >
          {' '}
        </button>
        <ul className="AdSlider__SlidesContainer">
          {slideCount.map(el => (
            <li
              key={el}
              className="AdSlider__Slide"
            >
              <Slide num={el} isActive={el === activeNum} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="AdSlider__Button AdSlider__Button--Next"
          onClick={() => ChangeActiveNum(activeNum + 1)}
        >
          {' '}
        </button>
      </div>
      <ul className="AdSlider__Bullets">
        {slideCount.map(el => (
          <li
            key={el}
          >
            <button
              type="button"
              onClick={() => ChangeActiveNum(el)}
              className={classNames('AdSlider__Bullet', `AdSlider__Bullet--${el}`, { 'AdSlider__Bullet--active': (el === activeNum) })}
            >
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
