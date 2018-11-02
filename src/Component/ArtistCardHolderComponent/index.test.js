import React from "react";
import ArtistCardHolderComponent from ".";
import ArtistCardComponent from "../ArtistCardComponent";
import Enzyme from 'enzyme';

describe("ArtistCardHolderComponent", () => {
  describe("calls the getartist usecase", () => {
    it('example 1', () => {
      let getArtistSpy = {
        execute: jest.fn(async (presenter) => {presenter.presentArtist({name: 'Green Day', genres: ['Punk Rock']})})
      };

      let component = Enzyme.mount(<ArtistCardHolderComponent getArtist = {getArtistSpy}/>);

      expect(component.find('[data-test="artist-entry"]').simulate('change', {target: {value: 'Green Day'}}));
      component.update();

      expect(getArtistSpy.execute).toHaveBeenCalledWith(expect.any(ArtistCardHolderComponent), 'Green Day');
      expect(component.find('[data-test="card-holder"]').length).toEqual(1);
      expect(component.find('[data-test="artist-name"]').text()).toEqual('Green Day');
      expect(component.find('[data-test="genres"]').text()).toEqual('Punk Rock');
    });

    it('example 2', () => {
      let getArtistSpy = {
        execute: jest.fn(async (presenter) => {presenter.presentArtist({name: 'Rabbit Junk', genres: ['Digital Hardcore', 'Industrial']})})
      };

      let component = Enzyme.mount(<ArtistCardHolderComponent getArtist = {getArtistSpy}/>);

      expect(component.find('[data-test="artist-entry"]').simulate('change', {target: {value: 'Rabbit Junk'}}));
      component.update();

      expect(getArtistSpy.execute).toHaveBeenCalledWith(expect.any(ArtistCardHolderComponent), 'Rabbit Junk');
      expect(component.find('[data-test="card-holder"]').length).toEqual(1);
      expect(component.find('[data-test="artist-name"]').text()).toEqual('Rabbit Junk');
      expect(component.find('[data-test="genres"]').text()).toEqual('Digital HardcoreIndustrial');
    });
  });
});
