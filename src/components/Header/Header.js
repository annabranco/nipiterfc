import React from 'react';
import niPiterTopBar from '../../images/layout/nipiter_bar_top.jpg';
const Header = ({ props }) => {

  return (

    <header class="header">
      <div class="header__block--outer">
        <div class="header__block--inner">
          <h1 class="header__title">NPFC</h1>
          <img class="header__img" src={niPiterTopBar} alt="" />
        </div>
      </div>
      <div class="header__titlebar">NiPiter Football Club</div>
    </header>

  );
}

export default Header;