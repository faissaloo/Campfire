import React from 'react';
import "./style.css";
import ArtistCardComponent from "../ArtistCardComponent";

export default class ArtistCardHolderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artistName: null,
      artistData: null
    }
  }

  presentArtist = (artistData) => {
    this.setState({artistData})
  }

  renderArtistComponent() {
    if (this.state.artistData !== null) {
      return <ArtistCardComponent data={this.state.artistData}/>
    }
  }

  onChange = (e) => {
    this.props.getArtist.execute(this, e.target.value);
  }
  
  render() {
    return <div data-test="artist-card-holder"><input data-test="artist-entry" onChange={this.onChange}/>{this.renderArtistComponent()}</div>
  }
};
