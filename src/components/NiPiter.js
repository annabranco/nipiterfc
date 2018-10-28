import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Navigation from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const NiPiter = ({ version }) => (

  <React.Fragment>

    <Header />
    <Navigation />
    <Main />
    <Footer version={ version } />

  </React.Fragment>
);

export default NiPiter;

NiPiter.propTypes = { version: PropTypes.string };
