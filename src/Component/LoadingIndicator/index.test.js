import React from "react";
import LoadingIndicator from ".";
import Enzyme from 'enzyme';

describe("LoadingIndicator", () => {
  it("renders", async () => {
    Enzyme.mount(<LoadingIndicator/>)
  });
});
