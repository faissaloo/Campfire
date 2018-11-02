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
      <ArtistCardHolderComponent name="Agent Orange (band)" getArtist={getArtist}/>
    );
  }
}

export default App;
