import React, { Component } from 'react';
import logo from './logo.svg';
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
        <h6><a href="https://github.com/faissalMT/Campfire">GitHub</a></h6>
        <ArtistCardHolderComponent name="" getArtist={getArtist}/>
      </div>
    );
  }
}

export default App;
