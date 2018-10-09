import React from 'react';
import { Link } from 'react-router-dom';
import Escudo from '../../images/layout/escudo.png';

const Nav = ({ props }) => {

  return (

    <nav class="nav uppercase">
      <div class="nav__AllLinks">
        <Link to='/news' className="nav__link nav__link-active">Noticias</Link>
        <Link to='/players' className="nav__link">Plantilla</Link>
        <Link to='/contact' className="nav__link">Contacto</Link>
      </div>

      <img src={Escudo} alt="Escudo de Ni Piter FC" class="nav__logo" />
    </nav>

  );
}

export default Nav;