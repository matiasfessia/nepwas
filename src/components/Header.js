import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">ne<em>pwa</em>s</h1>
      <button className="header__btn-country" type="button">
        <FontAwesomeIcon icon={faGlobe} className="content-nav__option__icon" />
        ar
      </button>
    </header>
  );
};

export default Header;