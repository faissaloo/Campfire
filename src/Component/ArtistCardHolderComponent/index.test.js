import React from "react";
import ArtistCardHolderComponent from ".";
import ArtistCardComponent from "../ArtistCardComponent";
import Enzyme from 'enzyme';

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 100));
}

describe("ArtistCardHolderComponent", () => {
  describe("calls the getartist usecase", () => {
    it('example 1', async () => {
      let getArtistSpy = {
        execute: jest.fn(async (presenter) => {presenter.presentArtist({name: 'Green Day', genres: ['Punk Rock']}, 'Green Day')})
      };

      let component = Enzyme.mount(<ArtistCardHolderComponent getArtist = {getArtistSpy}/>);

      expect(component.find('[data-test="artist-entry"]').simulate('change', {target: {value: 'Green Day'}}));
      await component.update();
      await component.update();

      expect(getArtistSpy.execute).toHaveBeenCalledWith(expect.any(ArtistCardHolderComponent), 'Green Day');
      expect(component.find('[data-test="card-holder"]').length).toEqual(1);
      expect(component.find('[data-test="artist-name"]').text()).toEqual('Green Day');
      expect(component.find('[data-test="genres"]').text()).toEqual('Punk Rock');
    });

    it('example 2', async () => {
      let getArtistSpy = {
        execute: jest.fn(async (presenter) => {presenter.presentArtist({name: 'Rabbit Junk', genres: ['Digital Hardcore', 'Industrial']}, 'Rabbit Junk')})
      };

      let component = Enzyme.mount(<ArtistCardHolderComponent getArtist = {getArtistSpy}/>);

      expect(component.find('[data-test="artist-entry"]').simulate('change', {target: {value: 'Rabbit Junk'}}));
      await component.update();
      await component.update();

      expect(getArtistSpy.execute).toHaveBeenCalledWith(expect.any(ArtistCardHolderComponent), 'Rabbit Junk');
      expect(component.find('[data-test="card-holder"]').length).toEqual(1);
      expect(component.find('[data-test="artist-name"]').text()).toEqual('Rabbit Junk');
      expect(component.find('[data-test="genres"]').text()).toEqual('Digital HardcoreIndustrial');
    });
  });
});
