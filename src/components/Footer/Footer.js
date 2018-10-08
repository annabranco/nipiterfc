import React from 'react';
import NiPiterBarBottom from '../../images/layout/nipiter_bar_bottom.jpg';

const Footer = ({ props }) => {

  return (

    <footer class="footer">
      <img class="footer__img" src={NiPiterBarBottom} alt="" />
      <div class="footer__block--red"></div>
      <div class="footer__block--green">
        <p class="footer__txt">NiPiter FC ©2018</p>
        <p class="footer__txt">Madrid</p>
      </div>
      <div class="footer__whitebar background--strips"></div>
    </footer>

  );
}

export default Footer;