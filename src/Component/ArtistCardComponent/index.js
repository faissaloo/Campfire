import React from 'react';
import "./style.css";

export default class ArtistCardComponent extends React.Component {
  render = () => (
    <div className="ArtistCardComponent" data-test='card-holder'>
      <div className="artist-name" data-test="artist-name">{this.props.data.name}</div>
      <div data-test="genres">
        <ul className="genre-list">
          {this.props.data.genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    </div>
  )
}
