import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NiPiter from '../components/NiPiter';

class App extends Component {
  constructor ( props ) {
    super( props );

    this.state = { version: 'v0.2.0' };
  }

  render () {
    const { version } = this.state;

    return (
      <div className="App">
        <NiPiter version={ version } />
      </div>
    );
  }
}

export default App;

App.propTypes = { version: PropTypes.string };
