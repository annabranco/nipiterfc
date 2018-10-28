import React from 'react';
import PropTypes from 'prop-types';
import NiPiterBarBottom from '../../images/layout/nipiter_bar_bottom.jpg';

const Footer = ({ version }) => (

  <footer className="footer">
    <img className="footer__img" src={NiPiterBarBottom} alt="" />
    <div className="footer__block--red"></div>
    <div className="footer__block--green">
      <p className="footer__txt">NiPiter FC ©2018</p>
      <p className="footer__txt">Madrid</p>
      <p className="footer__version">{ version }</p>
    </div>
    <div className="footer__whitebar background--strips"></div>
  </footer>

);

export default Footer;

Footer.propTypes = { version: PropTypes.string };
