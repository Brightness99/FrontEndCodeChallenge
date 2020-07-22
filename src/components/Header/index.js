import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import './index.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo className="header__logo"/>
      </div>
    </div>
  );
}

export default Header;
