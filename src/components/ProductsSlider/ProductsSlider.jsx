/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import {
  Navigation, Scrollbar, Autoplay, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../ProductCard/ProductCard';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import './ProductsSlider.scss';

export const ProductsSlider = ({ allProducts, title }) => {
  return (
    <>
      <div className="ProductsSlider__SliderTop">
        <h2 className="ProductsSlider__SectionTitle">
          {title}
        </h2>
        <div className="ProductsSlider__Buttons">
          <button
            type="button"
            className="ProductsSlider__ButtonPrev"
          >
            {' '}
          </button>
          <button
            type="button"
            className="ProductsSlider__ButtonNext"
          >
            {' '}
          </button>
        </div>
      </div>
      <Swiper
        modules={
          [Navigation, Scrollbar, Autoplay, A11y]
        }
        navigation={{
          nextEl: '.ProductsSlider__ButtonNext',
          prevEl: '.ProductsSlider__ButtonPrev',
        }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        slidesPerView={4}
        spaceBetween={16}
        grabCursor
        loop
        autoplay={{
          delay: 5000, stopOnLastSlide: false, disableOnInteraction: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <>
          {
            allProducts.map(el => (
              <SwiperSlide
                key={el.id}
              >
                <ProductCard
                  product={el}
                />
              </SwiperSlide>
            ))
          }
        </>
      </Swiper>

    </>
  );
};
