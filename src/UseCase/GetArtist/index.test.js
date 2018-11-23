import GetArtist from ".";

describe("GetArtist", () => {
  it('no artist found', async () => {
    let artistGateway = {
      getArtist: jest.fn(async () => null)
    };
    let presenterSpy = {
      presentArtist: jest.fn(),
      artistNotFound: jest.fn()
    };
    let useCase = new GetArtist(artistGateway);
    let return_value = await useCase.execute(presenterSpy, 'Agent Orange');
    expect(presenterSpy.presentArtist).not.toHaveBeenCalled();
    expect(presenterSpy.artistNotFound).toHaveBeenCalledWith('Agent Orange');
    expect(useCase);
  });

  describe("Calls the artist gateway", () => {
    it('example 1', async () => {
      let artistDomain = {
        name: 'Nic Endo',
        genres: jest.fn(() => ['Noise'])
      }
      let artistGateway = {
        getArtist: jest.fn(async () => artistDomain)
      };
      let presenterSpy = {
        presentArtist: jest.fn()
      };
      let useCase = new GetArtist(artistGateway);
      let return_value = await useCase.execute(presenterSpy, 'Nic Endo');
      expect(presenterSpy.presentArtist).toHaveBeenCalledWith({
        name: 'Nic Endo',
        genres: ['Noise']
      }, "Nic Endo");
      expect(artistGateway.getArtist).toHaveBeenCalledWith('Nic Endo');
      expect(artistDomain.genres).toHaveBeenCalled();
      expect(useCase)
    });

    it('example 2', async () => {
      let artistDomain = {
        name: 'AO',
        genres: jest.fn(() => ['Surf Punk', 'Punk Rock'])
      }
      let artistGateway = {
        getArtist: jest.fn(async () => artistDomain)
      };
      let presenterSpy = {
        presentArtist: jest.fn()
      };
      let useCase = new GetArtist(artistGateway);
      let return_value = await useCase.execute(presenterSpy, 'Agent Orange');
      expect(presenterSpy.presentArtist).toHaveBeenCalledWith({
        name: 'AO',
        genres: ['Surf Punk', 'Punk Rock']
      }, "Agent Orange");
      expect(artistGateway.getArtist).toHaveBeenCalledWith('Agent Orange');
      expect(artistDomain.genres).toHaveBeenCalled();
      expect(useCase)
    });
  });
});
