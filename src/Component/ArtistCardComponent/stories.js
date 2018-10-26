import React from "react";
import ArtistCardComponent from ".";
import { storiesOf } from "@storybook/react";

storiesOf("ArtistCardComponent", module).add("Default", () => {
  <ArtistCardComponent data={{
      name: 'Corrupted Morals',
      genres: ['Punk Rock']
    }}/>
});
