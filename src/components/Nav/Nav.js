import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../images/layout/escudo.png';
import HomeLogo from '../../images/escudo_intro.gif';

class Navigation extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = { menuOpen: false };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render () {

    const { menuOpen } = this.state;

    return (

      <nav className="nav uppercase">
        <button className={`nav__button ${ menuOpen ? 'isOpened' : '' }`} onClick={this.toggleMenu}>
          { menuOpen ? 'x' : 'menu' }
        </button>

        <div className={`nav__AllLinks ${ menuOpen ? 'isOpened' : '' }`} >
          <Link to="/news" className="nav__link">Noticias</Link>
          <Link to="/players" className="nav__link">Plantilla</Link>
          <Link to="/contact" className="nav__link">Contacto</Link>
          <img src={ HomeLogo } alt="Escudo de Ni Piter FC" className="nav__logo-menu" />
        </div>

        <Link to="/" className="header__link">
          <img src={ Badge } alt="Escudo de Ni Piter FC" className="nav__logo-topBar" />
        </Link>

      </nav>
    );
  }
}

export default Navigation;
