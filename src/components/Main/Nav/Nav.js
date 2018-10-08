import React from 'react';

const Nav = ({ props }) => {

  return (

    <nav class="nav uppercase">
      <div class="nav__menu--title uppercase">Menu 
        <i class="fas fa-bars nav__menu-title-hamburguer"></i>
      </div>
      <img src="images/layout/escudo.png" alt="" class="nav__logo" />
      <div class="nav__AllLinks nav__AllLinks--hidden">
        <a class="nav__link nav__link-active" href="index.html">Noticias</a>
        <a class="nav__link" href="players/index.html">Plantilla</a>
        <a class="nav__link" href="contacto.html">Contacto</a>
      </div>
    </nav>

  );
}

export default Nav;