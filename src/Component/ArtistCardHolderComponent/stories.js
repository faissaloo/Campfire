import React from "react";
import ArtistCardHolderComponent from ".";
import { storiesOf } from "@storybook/react";

storiesOf("ArtistCardHolderComponent", module).add("Default", () => (
  <ArtistCardHolderComponent name="My Chemical Romance" getArtist={{ execute: async (presenter) => {presenter.presentArtist({name: 'My Chemical Romance', genres: ['Punk Rock', 'Emo', 'Post-hardcore']})}}}/>
));
