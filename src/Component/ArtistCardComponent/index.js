import React from 'react';
import "./style.css";

export default class ArtistCardComponent extends React.Component {
  render() {
    return (<div data-test='card-holder'>
        <div data-test="artist-name">{this.props.data.name}</div>
        <div data-test="genres"><ul>{this.props.data.genres.map((genre) => <li key={genre}>{genre}</li>)}</ul></div>
      </div>)
  }
};
