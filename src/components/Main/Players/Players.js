import React from 'react';
import Diana from '../../../images/players/1-diana.jpg';
import Lara from '../../../images/players/4-lara.jpg';
import Merida from '../../../images/players/9-merida.jpg';
import Lisa from '../../../images/players/13-lisa.jpg';
import LGBT from '../../../images/players/flags/flag-rainbow.png';

const Players = ({ props }) => {

  return (

    <section class="players">

    {/* Para alterar orden
        1. En player__outer, colocar player--order-XX con la orden deseada;
        Ordenes pares:

        2. Em player__box--birthplace añadir player__info--right;

        3. Em player__city añadir: player--align-right;

        4. Em social-networks, añadir social-networks--right;

        Ordenes impares:

        Borrar las clases añadidas en las pares. */}

      <div class="player__outer player--order-01 row no-gutters">
        <div class="player__box--photo col-6 col-sm-4 col-md-3">
          <img class="player__photo" src={Diana} alt="Diana" />
        </div>
        <div class="player__box--details col-6 col-sm-8 col-md-6">
          <h4 class="player__name">Diana</h4>
          <p class="player__info">Portera</p>
          <p class="player__info">Dorsal #1</p>
          <p class="player__box--birthplace player__info">
            <span class="player__city">Themyscira</span>
            <img class="player__flag" src={LGBT} alt="Bandera LGBT"/> 
          </p>
          <p class="player__info">Desde 2015</p>
          <div class="social-networks">
            <i class="fab fa-twitter twitter"></i>
            <i class="fab fa-facebook-square facebook"></i>
            <i class="fab fa-instagram instagram"></i>
          </div>
        </div>
        <div class="outer__footbal--field col-md-3">
          <div class="footbal--field">
            <span class="footbal--field-position position--GK">1</span>
          </div>
        </div>
      </div>

      <div class="player__outer player--order-02 row no-gutters">
        <div class="player__box--photo col-6 col-sm-4 col-md-3">
          <img class="player__photo" src={Lara} alt="Diana" />
        </div>
        <div class="player__box--details col-6 col-sm-8 col-md-6">
          <h4 class="player__name">Lara</h4>
          <p class="player__info">Defensa Central</p>
          <p class="player__info">Dorsal #4</p>
          <p class="player__box--birthplace player__info player__info--right">
            <span class="player__city player--align-right">Wimbledom</span>
            <img class="player__flag" src="https://www.countryflags.io/gb/flat/32.png" alt="Bandera del Reino Unido"></img>
          </p>
          <p class="player__info">Desde 2018</p>
          <div class="social-networks social-networks--right">
            <i class="fab fa-twitter twitter"></i>
            <i class="fab fa-facebook-square facebook"></i>
            <i class="fab fa-instagram instagram"></i>
          </div>
        </div>
        <div class="outer__footbal--field col-md-3">
          <div class="footbal--field">
            <span class="footbal--field-position position--FB rightFocus">4</span>
          </div>
        </div>
      </div>

      <div class="player__outer player--order-03 row no-gutters">
        <div class="player__box--photo col-6 col-sm-4 col-md-3">
          <img class="player__photo" src={Merida} alt="Diana" />
        </div>
        <div class="player__box--details col-6 col-sm-8 col-md-6">
          <h4 class="player__name">Merida</h4>
          <p class="player__info">Delantera</p>
          <p class="player__info">Dorsal #9</p>
          <p class="player__box--birthplace player__info">
            <span class="player__city">DunBroch</span>
            <img class="player__flag" src="https://www.countryflags.io/gb/flat/32.png" alt="Bandera de Escocia"></img>
          </p>
          <p class="player__info">Desde 2016</p>
          <div class="social-networks">
            <i class="fab fa-twitter twitter"></i>
            <i class="fab fa-facebook-square facebook"></i>
            <i class="fab fa-instagram instagram"></i>
          </div>
        </div>
        <div class="outer__footbal--field col-md-3">
          <div class="footbal--field">
            <span class="footbal--field-position position--ST">9</span>
          </div>
        </div>
      </div>

      <div class="player__outer player--order-04 row no-gutters">
        <div class="player__box--photo col-6 col-sm-4 col-md-3">
          <img class="player__photo" src={Lisa} alt="Diana" />
        </div>
        <div class="player__box--details col-6 col-sm-8 col-md-6">
          <h4 class="player__name">Lisa</h4>
          <p class="player__info">Medio Izquierda / Central</p>
          <p class="player__info">Dorsal #13</p>
          <p class="player__box--birthplace player__info player__info--right">
            <span class="player__city player--align-right">Springfield</span>
            <img class="player__flag" src="https://www.countryflags.io/us/flat/32.png" alt="Bandera de Estados Unidos"></img>
          </p>
          <p class="player__info">Desde 2018</p>
          <div class="social-networks social-networks--right">
            <i class="fab fa-twitter twitter"></i>
            <i class="fab fa-facebook-square facebook"></i>
            <i class="fab fa-instagram instagram"></i>
          </div>
        </div>
        <div class="outer__footbal--field col-md-3">
          <div class="footbal--field">
            <span class="footbal--field-position position--GK">1</span>
            <span class="footbal--field-position position--FB leftFocus">3</span>
            <span class="footbal--field-position position--FB rightFocus">13</span>
            <span class="footbal--field-position position--MF">5</span>
            <span class="footbal--field-position position--LM">21</span>
            <span class="footbal--field-position position--RM">11</span>
            <span class="footbal--field-position position--ST">8</span>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Players;