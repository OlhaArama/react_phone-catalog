import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './HomePageSlider.scss';
import '../../helpers/grid.scss';

export const HomePageSlider: React.FC = () => {
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (transform < 2) {
        setTransform(transform + 1);
      } else {
        setTransform(0);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [transform]);

  const handleNext = () => {
    if (transform !== 2) {
      setTransform(transform + 1);
    } else {
      setTransform(0);
    }
  };

  const handlePrev = () => {
    if (transform !== 0) {
      setTransform(transform - 1);
    } else {
      setTransform(0);
    }
  };

  return (
    <div className="home-page-slider">
      <div
        className="home-page-slider__content grid"
      >
        <button
          type="button"
          className="home-page-slider__button grid__item grid__item--1-1"
          onClick={handlePrev}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M5.47136 0.528606C5.21101 0.268256 4.7889 0.268256 4.52855 0.528606L0.528555 4.52861C0.268205 4.78896 0.268205 5.21107 0.528555 5.47141L4.52855 9.47141C4.7889 9.73176 5.21101 9.73176 5.47136 9.47141C5.73171 9.21107 5.73171 8.78896 5.47136 8.52861L1.94277 5.00001L5.47136 1.47141C5.73171 1.21107 5.73171 0.788955 5.47136 0.528606Z"
              fill="#313237"
            />
          </svg>
        </button>

        <div className="home-page-slider__wrapper grid__item grid__item--2-23">
          <div
            className="home-page-slider__slides"
            style={{ transform: `translateX(-${transform * 1040}px)` }}
          >
            <div
              className="home-page-slider__image-wrapper"
            >
              <img
                src="_new/img/banner-phones.png"
                alt="phones"
                className="home-page-slider__image"
              />
            </div>

            <div
              className="home-page-slider__image-wrapper"
            >
              <img
                src="_new/img/banner-tablets.png"
                alt="phones"
                className="home-page-slider__image"
              />
            </div>

            <div
              className="home-page-slider__image-wrapper"
            >
              <img
                src="_new/img/banner-accessories.png"
                alt="phones"
                className="home-page-slider__image"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="home-page-slider__button grid__item grid__item--24-24"
          onClick={handleNext}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M0.528636 0.528606C0.788986 0.268256 1.2111 0.268256 1.47145 0.528606L5.47145 4.52861C5.73179 4.78896 5.73179 5.21107 5.47145 5.47141L1.47145 9.47141C1.2111 9.73176 0.788986 9.73176 0.528636 9.47141C0.268287 9.21107 0.268287 8.78896 0.528636 8.52861L4.05723 5.00001L0.528636 1.47141C0.268287 1.21107 0.268287 0.788955 0.528636 0.528606Z"
              fill="#313237"
            />
          </svg>
        </button>
      </div>

      <div className="home-page-slider__radio-controls">
        <label
          className={classNames(
            'home-page-slider__radio-control',
            {
              'home-page-slider__radio-control--checked': transform === 0,
            },
          )}
        >
          <input
            id="radio-1"
            type="radio"
            className="home-page-slider__radio-button"
            checked={transform === 0}
            onChange={() => setTransform(0)}
          />
        </label>

        <label
          className={classNames(
            'home-page-slider__radio-control',
            {
              'home-page-slider__radio-control--checked': transform === 1,
            },
          )}
        >
          <input
            id="radio-2"
            type="radio"
            className="home-page-slider__radio-button"
            checked={transform === 1}
            onChange={() => setTransform(1)}
          />
        </label>

        <label
          className={classNames(
            'home-page-slider__radio-control',
            {
              'home-page-slider__radio-control--checked': transform === 2,
            },
          )}
        >
          <input
            id="radio-3"
            type="radio"
            className="home-page-slider__radio-button"
            checked={transform === 2}
            onChange={() => setTransform(2)}
          />
        </label>
      </div>
    </div>
  );
};
