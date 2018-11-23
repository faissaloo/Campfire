import React from "react";
import LoadingMessage from ".";
import { storiesOf } from "@storybook/react";

storiesOf("LoadingMessage", module).add("Default", () => {
  return <LoadingMessage/>
});
