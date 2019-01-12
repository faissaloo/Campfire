import React, { Component } from 'react';
import './App.css';
import ArtistGateway from './Gateway/ArtistGateway';
import GetArtist from './UseCase/GetArtist';
import ArtistCardHolderComponent from './Component/ArtistCardHolderComponent';

const artistGateway = new ArtistGateway();
const getArtist = new GetArtist(artistGateway);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Campfire</h1>
        <h4>Bitcoin: 1LseDRH9dywzfpW6vGpkaNYpQWSpaqwz44</h4>
          <h6 className="Links">
            <a href="https://github.com/faissalMT/Campfire">GitHub</a>
            <a href="http://minh36dudc62vuhs.onion/">TOR</a>
          </h6>
        <ArtistCardHolderComponent name="" getArtist={getArtist}/>
      </div>
    );
  }
}

export default App;
