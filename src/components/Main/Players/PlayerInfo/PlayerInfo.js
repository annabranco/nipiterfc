import React from 'react';

const PlayerInfo = ({ player, showDetails, toggleDetails }) => {

  return (

    <React.Fragment>
      <div className="player__outer" key={ player.shirt}>
        <div className="player__box--photo">
          <div className={`player__box--details ${ showDetails ? 'showDetails' : '' }`}>
            <h4 className={`player__name ${ showDetails ? 'showDetails' : '' }`}>{ player.shortname }</h4>
            <i className={` ${ showDetails ? ' fas fa-times-circle moreInfo showDetails' : 'fas fa-info-circle moreInfo'}`}onClick={ toggleDetails }></i>
            <div className={`social-networks ${ showDetails ? 'showDetails' : '' }`}>
              <i className="fab fa-twitter sw-icon twitter"></i>
              <i className="fab fa-facebook-square sw-icon facebook"></i>
              <i className="fab fa-instagram sw-icon instagram"></i>
            </div>
            {/* <p className="player__info">{ player.position }</p> */}
            <p className={`player__box--birthplace player__info ${ showDetails ? 'showDetails' : '' }`}>
              <span className="player__city">{ player.city }</span>
              <img
                className="player__flag"
                src={ `https://www.countryflags.io/${ player.country }/shiny/32.png` }
                alt="Bandera del país"
              />
            </p>
            <p className={`player__info ${ showDetails ? 'showDetails' : '' }`}>Desde { player.since }</p>
            <div className="outer__footbal--field">
              <div className={`footbal--field ${ showDetails ? 'showDetails' : '' }`}>
                <span className={`footbal--field-position position--${ player.cod }`}>
                  { player.shirt }
                </span>
              </div>
            </div>
          </div>
          <img className="player__photo" src={ player.photo } alt={ player.name } />
        </div>
      </div>
      <div className="blackscreen"></div>
    </React.Fragment>
  );
}

export default PlayerInfo;
