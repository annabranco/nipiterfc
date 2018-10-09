import React from 'react';
import Wordpress from './Wordpress/Wordpress';
import Home from './Home/Home';
import Players from './Players/Players';
import { Route, Switch } from 'react-router-dom';

const Main = ({ props }) => {

  return (

    <main class="main background--strips">
      <section class="main__principal">

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/news' render={ () => <Wordpress page="news" /> } />
          <Route path='/players' component={ Players } />
          <Route path='/contact' render={ () => <Wordpress page="contact" /> } />
        </Switch>

      </section>
    </main>

  );
}

export default Main;