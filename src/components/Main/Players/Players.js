import React from 'react'; // eslint-disable-line no-unused-vars
import { Squad } from '../../../database/squad';

const Players = () => (

  <section className="players">

    { Squad.map( player => (

      <div className="player__outer player--order-01 row no-gutters" key={ player.shirt}>
        <div className="player__box--photo col-6 col-sm-4 col-md-3">
          <img className="player__photo" src={ player.photo } alt={ player.name } />
        </div>
        <div className="player__box--details col-6 col-sm-8 col-md-6">
          <h4 className="player__name">{ player.name }</h4>
          <p className="player__info">{ player.position }</p>
          <p className="player__info">Dorsal #{ player.shirt }</p>
          <p className="player__box--birthplace player__info">
            <span className="player__city">{ player.city }</span>
            <img
              className="player__flag"
              src={ `https://www.countryflags.io/${ player.country }/shiny/32.png` }
              alt="Bandera del país"
            />
          </p>
          <p className="player__info">Desde { player.since }</p>
          <div className="social-networks">
            <i className="fab fa-twitter twitter"></i>
            <i className="fab fa-facebook-square facebook"></i>
            <i className="fab fa-instagram instagram"></i>
          </div>
        </div>
        <div className="outer__footbal--field col-md-3">
          <div className="footbal--field">
            <span className={`footbal--field-position position--${ player.cod }`}>
              { player.shirt }
            </span>
          </div>
        </div>
      </div>
    ))}

  </section>
);

export default Players;
