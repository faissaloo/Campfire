import fetch from "isomorphic-fetch";
import Artist from "../../Domain/Artist";

export default class ArtistGateway {
  async getArtist(name) {
    let rawResponse;
    let jsonResponse;
    let artistFound;
    let genres;

    let disambiguations = [
      "",
      "%20%28singer%29",
      "%20%28musician%29",
      "%20%28rapper%29",
      "%20%28entertainer%29",
      "%20%28composer%29",
      "%20%28DJ%29",
      "%20%28music%20producer%29",
      "%20%28band%29",
      "%20%28group%29",
      "%20%28vocal%20ensemble%29",
      "%20%28duo%29"
    ]

    let i;
    for (i = 0; i < disambiguations.length; i++) {
        rawResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&formatversion=2&titles=${name}${disambiguations[i]}`
        );
        jsonResponse = await rawResponse.json();
        artistFound = new Artist(name, jsonResponse);
        genres = artistFound.genres();
        if (genres.length) {
          return artistFound;
        }
    }
    return null;
  }
};
