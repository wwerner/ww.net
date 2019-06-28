import React from "react";

import { storiesOf } from "@storybook/react";
import WebProfile from "./WebProfile";

import { faAllergies, faCity } from "@fortawesome/free-solid-svg-icons";

storiesOf("WebProfile", module)
  .add("empty", () => <WebProfile></WebProfile>)
  .add("title only", () => <WebProfile title="title"></WebProfile>)
  .add("icon only", () => <WebProfile icon={faCity}></WebProfile>)
  .add("url only", () => <WebProfile url="test"></WebProfile>)
  .add("all props", () => (
    <WebProfile
      title="foo"
      icon={faAllergies}
      url="https://twitter.com"
    ></WebProfile>
  ));
