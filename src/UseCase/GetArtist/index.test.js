import GetArtist from ".";

describe("GetArtist", () => {
  describe("Calls the artist gateway", () => {
    it('example 1', async () => {
      let artistDomain = {
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
      });
      expect(artistGateway.getArtist).toHaveBeenCalledWith('Nic Endo');
      expect(artistDomain.genres).toHaveBeenCalled();
      expect(useCase)
    });

    it('example 2', async () => {
      let artistDomain = {
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
        name: 'Agent Orange',
        genres: ['Surf Punk', 'Punk Rock']
      });
      expect(artistGateway.getArtist).toHaveBeenCalledWith('Agent Orange');
      expect(artistDomain.genres).toHaveBeenCalled();
      expect(useCase)
    });
  });
});
