import React from 'react';
import { Link } from 'react-router-dom';
import niPiterTopBar from '../../images/layout/nipiter_bar_top.jpg';

const Header = () => (

  <header className="header">
    <div className="header__block--outer">
      <div className="header__block--inner">
        <Link to="/" className="header__link">
          <h1 className="header__title">NPFC</h1>
        </Link>
        <img className="header__img" src={ niPiterTopBar } alt="" />
      </div>
    </div>
    <div className="header__titlebar">NiPiter Football Club</div>
  </header>

);

export default Header;
