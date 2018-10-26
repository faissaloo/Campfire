export default class GetArtist {
  constructor(artistGateway) {
    this.artistGateway = artistGateway;
  }

  async execute(presenter, name) {
    let artist = await this.artistGateway.getArtist(name);
    let genres = artist.genres();
    presenter.presentArtist({genres, name})
  }
};
