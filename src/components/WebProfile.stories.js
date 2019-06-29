import React from "react";

import { storiesOf } from "@storybook/react";
import WebProfile from "./WebProfile";

import { faAllergies } from "@fortawesome/free-solid-svg-icons";

storiesOf("WebProfile", module)
  .add("all props", () => (
    <WebProfile
      title="foo"
      icon={faAllergies}
      url="https://twitter.com"
    ></WebProfile>
  ));
