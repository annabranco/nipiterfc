import React from 'react';
import { SQUAD } from '../../../database/squad';
import Player1 from '../../../images/players/shirts/1.png';
import Player2 from '../../../images/players/shirts/2.png';
import Player3 from '../../../images/players/shirts/3.png';
import Player5 from '../../../images/players/shirts/5.png';
import Player6 from '../../../images/players/shirts/6.png';
import Player7 from '../../../images/players/shirts/7.png';
import Player8 from '../../../images/players/shirts/8.png';
import Player9 from '../../../images/players/shirts/9.png';
import Player10 from '../../../images/players/shirts/10.png';
import Player11 from '../../../images/players/shirts/11.png';
import Player12 from '../../../images/players/shirts/12.png';
import Player13 from '../../../images/players/shirts/13.png';
import Player14 from '../../../images/players/shirts/14.png';
import Player15 from '../../../images/players/shirts/15.png';
import Player16 from '../../../images/players/shirts/16.png';
import Player19 from '../../../images/players/shirts/19.png';
import Player21 from '../../../images/players/shirts/21.png';
import Player37 from '../../../images/players/shirts/37.png';
import PlayerInfo from './PlayerInfo/PlayerInfo';


class Players extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = {
      selectedPlayer : null,
      showDetails    : false,
    };
  }

  handleSelectPlayer = event => {
    const shirtNumber = Number( event.target.id.slice( 8 ) );

    for ( const player of SQUAD ) {
      if ( player.shirt === shirtNumber ) {
        this.setState({ selectedPlayer: player });
      }
    }
  }

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });

  render () {

    const { selectedPlayer, showDetails } = this.state;

    return (

      <section className="players">

        { selectedPlayer ?
          <PlayerInfo
            player={ selectedPlayer }
            showDetails={ showDetails }
            toggleDetails={ this.toggleDetails }
          />
          :
          <p>No player selected.</p>
        }

        <div className="shirts__container">
          <img className="shirts__photo" src={ Player1 } id="Player #1" alt="Camiseta número 1" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player2 } id="Player #2" alt="Camiseta número 2" onClick={ this.handleSelectPlayer } />
          <img className="shirts__photo" src={ Player3 } id="Player #3" alt="Camiseta número 3" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player5 } id="Player #5" alt="Camiseta número 5" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player6 } id="Player #6" alt="Camiseta número 6" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player7 } id="Player #7" alt="Camiseta número 7" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player8 } id="Player #8" alt="Camiseta número 8" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player9 } id="Player #9" alt="Camiseta número 9" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player10 } id="Player #10" alt="Camiseta número 10" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player11 } id="Player #11" alt="Camiseta número 11" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player12 } id="Player #12" alt="Camiseta número 12" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player13 } id="Player #13" alt="Camiseta número 13" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player14 } id="Player #14" alt="Camiseta número 14" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player15 } id="Player #15" alt="Camiseta número 15" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player16 } id="Player #16" alt="Camiseta número 16" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player19 } id="Player #19" alt="Camiseta número 19" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player21 } id="Player #21" alt="Camiseta número 21" onClick={ this.handleSelectPlayer }/>
          <img className="shirts__photo" src={ Player37 } id="Player #37" alt="Camiseta número 37" onClick={ this.handleSelectPlayer }/>
        </div>
      </section>
    );
  }
}

export default Players;
