import fetch from "isomorphic-fetch";
import Artist from "../../Domain/Artist";

export default class ArtistGateway {
  constructor() {
    this.disambiguations = [
      "$ARTIST",
      "$ARTIST %28singer%29",
      "$ARTIST %28musician%29",
      "$ARTIST %28rapper%29",
      "$ARTIST %28entertainer%29",
      "$ARTIST %28composer%29",
      "$ARTIST %28DJ%29",
      "$ARTIST %28music producer%29",
      "$ARTIST %28band%29",
      "$ARTIST %28group%29",
      "$ARTIST %28vocal ensemble%29",
      "$ARTIST %28duo%29",
      "The $ARTIST",
      "The $ARTIST %28singer%29",
      "The $ARTIST %28musician%29",
      "The $ARTIST %28rapper%29",
      "The $ARTIST %28entertainer%29",
      "The $ARTIST %28composer%29",
      "The $ARTIST %28DJ%29",
      "The $ARTIST %28music producer%29",
      "The $ARTIST %28band%29",
      "The $ARTIST %28group%29",
      "The $ARTIST %28vocal ensemble%29",
      "The $ARTIST %28duo%29"
    ];
  }
  async getArtist(name) {
    let artistFound;

    let i;
    for (i = 0; i < this.disambiguations.length; i++) {
        artistFound = await this.getArtistVerbatim(this.disambiguate(i, name));
        if (artistFound.genres().length) {
          return artistFound;
        }
    }
    return null;
  }

  async getArtistVerbatim(name) {
    let rawResponse = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&formatversion=2&titles=${name}`
    );
    let jsonResponse = await rawResponse.json();
    return new Artist(name, jsonResponse);
  }

  disambiguate(disambiguationIndex, artist) {
    return this.disambiguations[disambiguationIndex].replace("$ARTIST", artist)
  }
};
