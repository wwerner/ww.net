import React from "react";

import { storiesOf } from "@storybook/react";
import WebProfile from "./WebProfile";


storiesOf("WebProfile", module)
  .add("standard", () => (
    <WebProfile
      title="Foo"
      icon='fab fa-github'
      url="https://twitter.com"
      rainbow='false'
    ></WebProfile>
  ))
  .add("rainbowy", () => (
    <WebProfile
      title="Foo"
      icon='fab fa-github'
      url="https://twitter.com"
      rainbow='true'
    ></WebProfile>
  ));
