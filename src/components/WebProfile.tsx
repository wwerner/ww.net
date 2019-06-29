import React, { Component, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

import { URL } from "url";
import "./Rainbow.css";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: IconDefinition;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url } = this.props;
    return (
      <a href={url.href} title={title} target="_blank"  className="rainbow">
          <FontAwesomeIcon
            icon={icon}
            color="rgb(230, 230, 230)"
            mask={faSquareFull}
            transform="shrink-6"
          />
      </a>
    );
  }
}
export default WebProfile;
