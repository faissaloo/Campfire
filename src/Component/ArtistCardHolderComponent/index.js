import React from 'react';
import "./style.css";
import ArtistCardComponent from "../ArtistCardComponent";
import LoadingIndicator from "../LoadingIndicator";

export default class ArtistCardHolderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artistName: null,
      artistData: null,
      loading: false,
      showHelpText: true
    }
  }

  presentArtist = (artistData, forArtistName) => {
    //So when we're typing we don't consume stuff from old async calls unrelated to this artist
    if (forArtistName === this.state.artistName) {
      this.setState({artistData, loading: false, showHelpText: false});
    }
  }

  artistNotFound = async (forArtistName) => {
    if (forArtistName === this.state.artistName) {
      await this.setState({artistData: null, loading: false, showHelpText: false});
    }
  }

  renderArtistComponent() {
    if (this.state.showHelpText) {
      return <div>To search for an artist, start typing!</div>
    } else if (this.state.loading) {
      return <LoadingIndicator/>
    } else {
      if (this.state.artistData === null) {
        return <div>Unknown artist</div>
      } else {
        return <ArtistCardComponent data={this.state.artistData}/>
      }
    }
  }

  onArtistChange = async (artistName) => {
    if (artistName === "") {
      await this.setState({loading: false, artistName: null, showHelpText: true});
    } else {
      await this.setState({loading: true, artistName, showHelpText: false});
      await this.props.getArtist.execute(this, artistName);
    }
  }

  onChangeDispatcher = (e) => {
    this.onArtistChange(e.target.value)
  }

  render = () => (
    <div className="ArtistCardHolder" data-test="artist-card-holder">
      <input className="artist-entry" data-test="artist-entry" onChange={this.onChangeDispatcher} autoFocus/>
      {this.renderArtistComponent()}
    </div>
  )
};
