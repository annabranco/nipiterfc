import React from 'react';
import HomeLogo from '../../../images/escudo_intro.gif';

const Home = ({ props }) => {

  return (
    <div className="home_container">
      <img src={HomeLogo} alt="Escudo de Ni Piter FC" className="home__logo"/>
      <h1 className="home__title">Bienvenid@ a la página oficial de Ni Piter FC</h1>
    </div>
  );
}

export default Home;