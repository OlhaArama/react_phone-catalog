import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Logo />

      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <Link className="footer__link" to="/">Github</Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/">Contacts</Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/">Rights</Link>
          </li>
        </ul>
      </nav>

      <button type="button" className="footer__up-button">
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
            d="M3.52858 10.4712C3.26823 10.2109 3.26823 9.78878 3.52858 9.52843L7.52858 5.52843C7.78892 5.26808 8.21103 5.26808 8.47138 5.52843L12.4714 9.52843C12.7317 9.78878 12.7317 10.2109 12.4714 10.4712C12.211 10.7316 11.7889 10.7316 11.5286 10.4712L7.99998 6.94265L4.47138 10.4712C4.21103 10.7316 3.78892 10.7316 3.52858 10.4712Z"
            fill="#313237"
          />
        </svg>
      </button>
    </div>
  );
};
