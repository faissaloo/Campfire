export default class GetArtist {
  constructor(artistGateway) {
    this.artistGateway = artistGateway;
  }

  async execute(presenter, name) {
    let artist = await this.artistGateway.getArtist(name);
    if (artist) {
      presenter.presentArtist({
        genres: artist.genres(),
        name: artist.name
      }, name);
    } else {
      presenter.artistNotFound(name);
    }
  }
};
