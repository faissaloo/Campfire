import fetch from "isomorphic-fetch";
import Artist from "../../Domain/Artist";

export default class ArtistGateway {
  async getArtist(name) {

    let rawResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&formatversion=2&titles=${name}`);
    let jsonResponse = await rawResponse.json();
    return new Artist(name, jsonResponse);
  }
};
