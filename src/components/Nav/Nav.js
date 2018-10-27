import React from 'react';
import { Link } from 'react-router-dom';
import Escudo from '../../images/layout/escudo.png';

const Navigation = () => (

  <nav className="nav uppercase">
    <div className="nav__AllLinks">
      <Link to="/news" className="nav__link nav__link-active">Noticias</Link>
      <Link to="/players" className="nav__link">Plantilla</Link>
      <Link to="/contact" className="nav__link">Contacto</Link>
    </div>

    <Link to="/" className="header__link">
      <img src={Escudo} alt="Escudo de Ni Piter FC" className="nav__logo" />
    </Link>
  </nav>

);

export default Navigation;
