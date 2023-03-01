import React, { useContext } from 'react';
import classNames from 'classnames';
import { CartItemInfo } from '../../types/CartItemInfo';
import './CartItem.scss';
import { ProductsContext } from '../../helpers/ProductsContext';

type Props = {
  cartItem: CartItemInfo;
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const {
    deleteProductFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ProductsContext);

  const newPrice = cartItem.product.discount > 0
    ? cartItem.product.price
      - (cartItem.product.price * cartItem.product.discount) / 100
    : cartItem.product.price;

  return (
    <div className="cart-item">
      <div className="cart-item__content">
        <div className="cart-item__part">
          <button
            type="button"
            className="cart-item__cross-button"
            onClick={() => deleteProductFromCart(cartItem.product)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M12.4716 4.4714C12.7319 4.21105 12.7319 3.78894 12.4716 3.52859C12.2112 3.26824 11.7891 3.26824 11.5288 3.52859L8.00016 7.05719L4.47157 3.52859C4.21122 3.26824 3.78911 3.26824 3.52876 3.52859C3.26841 3.78894 3.26841 4.21105 3.52876 4.4714L7.05735 7.99999L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.9428L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99999L12.4716 4.4714Z"
                fill="#B4BDC4"
              />
            </svg>
          </button>

          <div className="cart-item__image-wrapper">
            <img
              src={cartItem.product.imageUrl}
              alt={cartItem.product.name}
              className="cart-item__image"
            />
          </div>

          <p className="cart-item__text cart-item__text--name">
            {cartItem.product.name}
          </p>
        </div>

        <div className="cart-item__part">
          <div className="cart-item__buttons-wrapper">
            <button
              type="button"
              className="cart-item__button"
              onClick={() => decreaseQuantity(cartItem.product)}
              disabled={cartItem.quantity === 1}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames(
                  'cart-item__icon',
                  {
                    'cart-item__icon--disabled': cartItem.quantity === 1,
                  },
                )}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  // eslint-disable-next-line max-len
                  d="M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z"
                />
              </svg>
            </button>

            <span className="cart-item__text">
              {cartItem.quantity}
            </span>

            <button
              type="button"
              className="cart-item__button"
              onClick={() => increaseQuantity(cartItem.product)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="cart-item__icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  // eslint-disable-next-line max-len
                  d="M8.6665 3.33334C8.6665 2.96515 8.36803 2.66667 7.99984 2.66667C7.63165 2.66667 7.33317 2.96515 7.33317 3.33334V7.33334H3.33317C2.96498 7.33334 2.6665 7.63182 2.6665 8.00001C2.6665 8.3682 2.96498 8.66667 3.33317 8.66667H7.33317V12.6667C7.33317 13.0349 7.63165 13.3333 7.99984 13.3333C8.36803 13.3333 8.6665 13.0349 8.6665 12.6667V8.66667H12.6665C13.0347 8.66667 13.3332 8.3682 13.3332 8.00001C13.3332 7.63182 13.0347 7.33334 12.6665 7.33334H8.6665V3.33334Z"
                />
              </svg>
            </button>
          </div>

          <div className="cart-item__price">
            {`$${newPrice}`}
          </div>
        </div>
      </div>
    </div>
  );
};
