// Should probably move ^ to a central file
import React from "react";
import ArtistCardComponent from ".";
import Enzyme from 'enzyme';

describe("ArtistCardComponent", () => {
  describe("It displays data", async () => {
    it('example 1', () => {
      let component = Enzyme.mount(<ArtistCardComponent data={{
            name: 'Bjork',
            genres: ['Dance', 'Avante Garde']
          }
        }
      />);

      expect(component.find('[data-test="artist-name"]').text()).toEqual("Bjork")
      expect(component.find('[data-test="genres"]').text()).toEqual("DanceAvante Garde")
    });

    it('example 2', () => {
      let component = Enzyme.mount(<ArtistCardComponent data={{
            name: 'Operation Ivy',
            genres: ['Ska Punk']
          }
        }
      />);

      expect(component.find('[data-test="artist-name"]').text()).toEqual("Operation Ivy")
      expect(component.find('[data-test="genres"]').text()).toEqual("Ska Punk")
    });
  });
});
